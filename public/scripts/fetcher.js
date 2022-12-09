/* eslint-disable no-multi-assign */
function typeInTextarea(newText, el = document.activeElement) {
  const start = el.selectionStart;
  const end = el.selectionEnd;
  const text = el.value;
  const before = text.substring(0, start);
  const after = text.substring(end, text.length);
  el.value = (before + newText + after);
  el.selectionStart = el.selectionEnd = start + newText.length;
  el.focus();
}
function getLineNumber(textarea) {
  return textarea.value.substr(0, textarea.selectionStart).split('\n').length - 1;
}
function validateJSON(element) {
  try {
    JSON.parse(element.value);
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
    return true;
  } catch (error) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    element.nextElementSibling.textContent = `You enter invalid JSON: ${error.message.match(/(?<=: ).*/)?.[0]}`;
    return false;
  }
}
function upgradeTextArea(textAreaElement) {
  textAreaElement.addEventListener('input', (event) => {
    validateJSON(event.target);
  });
  textAreaElement.addEventListener('keydown', (event) => {
    if (event.keyCode === 9 && event.shiftKey) {
      event.preventDefault();
      const targetLine = getLineNumber(textAreaElement);
      textAreaElement.value = textAreaElement.value.split('\n').map((row, lineIndex) => {
        if (lineIndex === targetLine) return row.replace(/^ {2}/, '');
        return row;
      }).join('\n');
      return;
    }
    if (event.keyCode === 9) {
      event.preventDefault();
      typeInTextarea('  ');
    }
  });
}

const loadingAnimationBody = document.querySelector('#loading-main-body');
const loadingAnimationImage = document.querySelector('#loading-modal-body');
loadingAnimationBody.hidden = true;
loadingAnimationImage.hidden = true;

const danger = document.querySelector('#danger-alert');
const warning = document.querySelector('#warning-alert');

const alerts = {
  danger,
  warning,
  hideAll() {
    this.danger.hidden = true;
    this.warning.hidden = true;
  },
};
alerts.hideAll();

const myModal = new bootstrap.Modal(document.getElementById('image-preview-modal'), {});

const callApiForm = document.querySelector('#call-api');
const inputApiUrl = document.querySelector('#api-link');
const methodApi = document.querySelector('#api-method');
const modalImagePreview = document.querySelector('#modal-image-preview');

const outputBox = document.querySelector('#output-box');

let requestBodyContainer = document.querySelector('#request-body-container');
const jsonContainer = document.querySelector('#json-display');

const bodyTextAreaCode = `
<textarea name="request-body" id="request-body" rows="5" class="form-control" spellcheck="false" ></textarea>
<div id="invalidValidationFeedback" class="invalid-feedback">
</div>
<div class="valid-feedback">
  Valid JSON
</div>`;

if (methodApi.value.toLowerCase() === 'post') {
  requestBodyContainer.innerHTML = bodyTextAreaCode;
  upgradeTextArea(requestBodyContainer.querySelector('#request-body'));
}

methodApi.addEventListener('change', (event) => {
  if (methodApi.value.toLowerCase() === 'get') {
    requestBodyContainer.innerHTML = '';
  } else {
    requestBodyContainer.innerHTML = bodyTextAreaCode;
    requestBodyContainer = document.querySelector('#request-body-container');
    upgradeTextArea(requestBodyContainer.querySelector('#request-body'));
  }
});

callApiForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  alerts.hideAll();
  loadingAnimationBody.hidden = false;
  jsonContainer.innerHTML = '';
  jsonContainer.hidden = true;

  if (!inputApiUrl.value) {
    inputApiUrl.setCustomValidity('Please fill all form fields');
    inputApiUrl.checkValidity();
    setTimeout(() => inputApiUrl.setCustomValidity(''), 1000);
  }

  let dangerTriggered = false;
  const timer = setTimeout(() => {
    alerts.hideAll();
    alerts.warning.querySelector('.cst-alert-text').textContent = 'The requested API responds for a very long time (more than 5 seconds)';
    alerts.warning.hidden = false;
  }, 5000);
  const timerDanger = setTimeout(() => {
    alerts.hideAll();
    alerts.danger.querySelector('.cst-alert-text').textContent = 'The requested API doesn\'t response';
    alerts.danger.hidden = false;
    dangerTriggered = true;
    loadingAnimationBody.hidden = true;
  }, 9000);

  let response;
  switch (methodApi.value.toLowerCase()) {
    case 'post':
      if (validateJSON(requestBodyContainer.firstElementChild)) {
        response = await fetch('/fetcher', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: inputApiUrl.value,
            method: 'POST',
            data: requestBodyContainer.firstElementChild.textContent.trim().replace(/ /g, ''),
          }),
        });
      }
      break;
    default:
      response = await fetch('/fetcher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: inputApiUrl.value,
          method: 'GET',
        }),
      });
      break;
  }

  clearTimeout(timer);
  clearTimeout(timerDanger);

  if (dangerTriggered) {
    return;
  }

  if (response.ok) {
    const result = await response.json();
    function getJson() {
      return result;
    }

    const editor = new JsonEditor('#json-display', getJson());
    editor.load(getJson());
    loadingAnimationBody.hidden = true;
    jsonContainer.hidden = false;
  } else {
    alerts.danger.querySelector('.cst-alert-text').textContent = `Received status code: ${response.status}`;
    alerts.danger.hidden = false;
    loadingAnimationBody.hidden = true;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 17) {
    requestBodyContainer.classList.add('activate-json-links');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.keyCode === 17) {
    requestBodyContainer.classList.remove('activate-json-links');
  }
});
jsonContainer.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('json-url') && requestBodyContainer.classList.contains('activate-json-links')) {
    loadingAnimationImage.hidden = false;
    modalImagePreview.src = target.href;
    modalImagePreview.addEventListener('load', () => { loadingAnimationImage.hidden = true; });
    myModal.show();
  }
});

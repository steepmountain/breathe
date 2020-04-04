window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
deferredInstallPrompt = evt;
installButton.removeAttribute('hidden');
// CODELAB: Add code show install prompt & hide the install button.
deferredInstallPrompt.prompt();
// Hide the install button, it can't be called twice.
evt.srcElement.setAttribute('hidden', true);
window.addEventListener('appinstalled', logAppInstalled);
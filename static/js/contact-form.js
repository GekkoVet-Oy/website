(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const modeInput = document.getElementById('form-mode');
  const subjectInput = document.getElementById('form-subject');
  const submitBtn = document.getElementById('submit-btn');
  const btns = document.querySelectorAll('[data-mode-btn]');
  const pimsFields = document.querySelectorAll('[data-field="pims"]');
  const insurerFields = document.querySelectorAll('[data-field="insurer"]');

  const labels = {
    pims: { subject: 'New PIMS demo request', cta: 'Request a Technical Demo' },
    insurer: { subject: 'New Insurer pilot request', cta: 'Request a Pilot' },
  };

  function setMode(mode) {
    const m = mode === 'insurer' ? 'insurer' : 'pims';
    modeInput.value = m;
    subjectInput.value = labels[m].subject;
    submitBtn.textContent = labels[m].cta;

    btns.forEach(function (b) {
      const active = b.dataset.modeBtn === m;
      b.classList.toggle('bg-brand-green', active);
      b.classList.toggle('text-white', active);
      b.classList.toggle('text-brand-green', !active);
    });

    pimsFields.forEach(function (el) { el.classList.toggle('hidden', m !== 'pims'); });
    insurerFields.forEach(function (el) { el.classList.toggle('hidden', m !== 'insurer'); });
  }

  btns.forEach(function (b) {
    b.addEventListener('click', function () { setMode(b.dataset.modeBtn); });
  });

  const params = new URLSearchParams(window.location.search);
  const initial = params.get('mode');
  setMode(initial === 'insurer' ? 'insurer' : 'pims');
})();

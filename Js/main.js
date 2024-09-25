window.addEventListener('scroll', e => {
  document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
});

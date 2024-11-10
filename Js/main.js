// For parallax

window.addEventListener('scroll', e => {
  document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
});

// For scroll trigger 

const animationItems = document.querySelectorAll('.anim')
console.log(animationItems)

if(animationItems) {
  window.addEventListener('scroll', animationScroll);
  function animationScroll() {
    for (let i = 0; i < animationItems.length; i++){
      const animationItem = animationItems[i];
      const animationItemHeight = animationItem.offsetHeight;
      const animationIOffset = offset(animationItem).top;
      const animationStartPoint = 3;

      let animationItemPoint = window.innerHeight - animationItemHeight / animationStartPoint
      if (animationItemHeight > window.innerHeight) {
        animationItemPoint = window.innerHeight - window.innerHeight / animationStartPoint
      }

      if ((pageYOffset > animationIOffset - animationItemPoint) && pageYOffset < (animationIOffset + animationItemHeight)){
        animationItem.classList.add('active')
      } else {
        animationItem.classList.remove('active')
      }
    }
  };
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
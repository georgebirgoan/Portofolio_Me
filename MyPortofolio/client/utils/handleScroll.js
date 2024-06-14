export const handleScroll = (e) => {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  console.log(targetId);
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const offsetTop = targetElement.offsetTop;
    window.scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

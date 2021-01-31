window.onload = () => {
  const header = document.querySelector(".header-container-area");
  window.onscroll = () => {
    const height = window.scrollY;
    if (height > 70) {
      header.classList.add("scrolling");
    } else {
      header.classList.remove("scrolling");
    }
  };
};

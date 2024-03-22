var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var footer = document.querySelector(".footer");

  var headerHeight = header.offsetHeight;
  var footerOffsetTop = footer.offsetTop;
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > lastScrollTop) {
    if (scrollPosition >= footerOffsetTop - headerHeight) {
      header.style.position = "absolute";
      header.style.top = footerOffsetTop - headerHeight + "px";
    }
  } else {
    if (scrollPosition <= footerOffsetTop - headerHeight) {
      header.style.position = "fixed";
      header.style.top = "0";
    }
  }

  lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
});

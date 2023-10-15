function cloneItemsInCarousel(carouselSelector) {
  let carousel = document.querySelector(carouselSelector);
  if (carousel) {
    let items = carousel.querySelectorAll(".carousel .carousel-item");
    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }
}

function countAndLogCarousels() {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    const carouselId = carousel.getAttribute("id");
    cloneItemsInCarousel(`#${carouselId}`);
  });
}

countAndLogCarousels();

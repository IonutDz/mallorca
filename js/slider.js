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
  
  // Clona elementos en el primer carrusel
  cloneItemsInCarousel("#recipeCarousel");
  
  // Clona elementos en el segundo carrusel (si tienes otro)
  cloneItemsInCarousel("#recipeCarousel2");
  
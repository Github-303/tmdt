document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".container-fluid");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("fixed-navbar");
    } else {
      navbar.classList.remove("fixed-navbar");
    }
  });
  const myCarouselElement = document.querySelector("#myCarousel");

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let showcaseContainers = document.querySelectorAll(".showcase");

  showcaseContainers.forEach(function (container) {
    let description = container.querySelector(".description");
    let viewMoreButton = container.querySelector(".view-more-button");

    viewMoreButton.addEventListener("click", function () {
      description.classList.toggle("full-description");
      viewMoreButton.textContent = description.classList.contains(
        "full-description"
      )
        ? "View less"
        : "View more";
    });
  });
});

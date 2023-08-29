var splide = new Splide("#splide4", {
  pagination: false,
  autoScroll: false,
  arrows: false,
  gap: 12,
});

var thumbnails = document.getElementsByClassName("thumbnail4");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

const nextSlider4 = () => {
  splide.go(splide.index + 1);
};

const prevSlider4 = () => {
  splide.go(splide.index - 1);
};

splide.mount();

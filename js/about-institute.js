var splide = new Splide("#splide1", {
  pagination: false,
  autoScroll: false,
  gap: 16,
  classes: {
    arrow: "splide__arrow splide1-arrows",
    prev: "splide__arrow--prev splide1-prev",
    next: "splide__arrow--next splide1-next",
  },
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;
var lastText;

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

  if (lastText && !lastText.classList.contains("line-clamp-[9]")) {
    lastText.classList.add("line-clamp-[9]");
  }

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();

const uncoverTextSlider = (event) => {
  const text = event.target.previousElementSibling;

  lastText = text;

  if (text.classList.contains("line-clamp-[9]")) {
    text.classList.remove("line-clamp-[9]");
    event.target.textContent = "Скрыть";
  } else {
    text.classList.add("line-clamp-[9]");
    event.target.textContent = "Скрыть";
  }
};

const splide2 = new Splide("#slide2", {
  arrows: false,
  pagination: false,
  gap: 12,
});

var thumbnails2 = document.getElementsByClassName("thumbnail2");
var current2;

for (var i = 0; i < thumbnails2.length; i++) {
  initThumbnail2(thumbnails2[i], i);
}

function initThumbnail2(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide2.go(index);
  });
}

splide2.on("mounted move", function () {
  var thumbnail2 = thumbnails2[splide2.index];

  if (thumbnail2) {
    if (current2) {
      current2.classList.remove("is-active");
    }

    thumbnail2.classList.add("is-active");
    current2 = thumbnail2;
  }
});

const nextSlider2 = () => {
  splide2.go(splide2.index + 1);
};

const prevSlider2 = () => {
  splide2.go(splide2.index - 1);
};

splide2.mount();

const splide3 = new Splide("#splide3", {
  arrows: false,
  pagination: false,
  perPage: 2,
  gap: 12,
  breakpoints: {
    640: {
      perPage: 1,
      gap: 12,
    },
  },
});

var thumbnails3 = document.getElementsByClassName("thumbnail3");
var current3;

for (var i = 0; i < thumbnails3.length; i++) {
  initThumbnail3(thumbnails3[i], i);
}

function initThumbnail3(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide3.go(index);
  });
}

splide3.on("mounted move", function () {
  var thumbnail3 = thumbnails3[splide3.index];

  if (thumbnail3) {
    if (current3) {
      current3.classList.remove("is-active");
    }

    thumbnail3.classList.add("is-active");
    current3 = thumbnail3;
  }
});

const nextSlider3 = () => {
  splide3.go(splide3.index + 1);
};

const prevSlider3 = () => {
  splide3.go(splide3.index - 1);
};

splide3.mount();

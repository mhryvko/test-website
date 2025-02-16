const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = [
  {src: "/images/1.gif", alt: "Image 1"},
  {src: "/images/2.gif", alt: "Image 2"},
  {src: "/images/3.png", alt: "Image 3"},
  {src: "/images/4.gif", alt: "Image 4"},
];
const slideWidth = 280;
let slideIndex = slides.length;
let autoSlideInterval;

const createSlides = () => {
  const duplicatedSlides = [
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
  ];

  duplicatedSlides.forEach((slide) => {
    const slideElement = document.createElement("div");
    slideElement.classList.add("slider-item");

    const imgElement = document.createElement("img");
    imgElement.src = slide.src;
    imgElement.alt = slide.alt;

    slideElement.appendChild(imgElement);
    sliderWrapper.appendChild(slideElement);
  });

  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
};

const moveSlider = (direction) => {
  slideIndex = direction === "down" ? slideIndex + 1 : slideIndex - 1;
  sliderWrapper.style.transition = "transform 0.5s ease-in-out";
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  setTimeout(() => {
    if (slideIndex >= slides.length * 2) {
      slideIndex = slides.length;
      sliderWrapper.style.transition = "none";
      sliderWrapper.style.transform = `translateX(-${
        slideIndex * slideWidth
      }px)`;
    } else if (slideIndex < slides.length) {
      slideIndex = slides.length * 2 - 1;
      sliderWrapper.style.transition = "none";
      sliderWrapper.style.transform = `translateX(-${
        slideIndex * slideWidth
      }px)`;
    }
  }, 500);
};

const startAutoSlider = () => {
  autoSlideInterval = setInterval(() => moveSlider("down"), 3000);
};

sliderWrapper.addEventListener("wheel", (e) => {
  clearInterval(autoSlideInterval);
  moveSlider(e.deltaY > 0 ? "down" : "up");
  startAutoSlider();
});

createSlides();
startAutoSlider();

createSlides();
startAutoSlider();

const sliderWrapper1 = document.querySelector(".slider-wrapper-1");
const slides1 = [
  {src: "/images/girls/1.png", alt: "Image 1"},
  {src: "/images/girls/2.png", alt: "Image 2"},
  {src: "/images/girls/3.png", alt: "Image 3"},
  {src: "/images/girls/4.png", alt: "Image 3"},
  {src: "/images/girls/5.png", alt: "Image 4"},
];
const slideWidth1 = 280;
let slideIndex1 = slides1.length;
let autoSlideInterval1;

const createSlides1 = () => {
  const duplicatedSlides1 = [
    ...slides1,
    ...slides1,
    ...slides1,
    ...slides1,
    ...slides1,
  ];

  duplicatedSlides1.forEach((slide) => {
    const slideElement = document.createElement("div");
    slideElement.classList.add("slider-item-1");

    const imgElement = document.createElement("img");
    imgElement.src = slide.src;
    imgElement.alt = slide.alt;

    slideElement.appendChild(imgElement);
    sliderWrapper1.appendChild(slideElement);
  });

  sliderWrapper1.style.transform = `translateX(-${
    slideIndex1 * slideWidth1
  }px)`;
};

const moveSlider1 = (direction) => {
  slideIndex1 = direction === "down" ? slideIndex1 + 1 : slideIndex1 - 1;
  sliderWrapper1.style.transition = "transform 0.5s ease-in-out";
  sliderWrapper1.style.transform = `translateX(-${
    slideIndex1 * slideWidth1
  }px)`;

  setTimeout(() => {
    if (slideIndex1 >= slides1.length * 2) {
      slideIndex1 = slides1.length;
      sliderWrapper1.style.transition = "none";
      sliderWrapper1.style.transform = `translateX(-${
        slideIndex1 * slideWidth1
      }px)`;
    } else if (slideIndex1 < slides1.length) {
      slideIndex1 = slides1.length * 2 - 1;
      sliderWrapper1.style.transition = "none";
      sliderWrapper1.style.transform = `translateX(-${
        slideIndex1 * slideWidth1
      }px)`;
    }
  }, 500);
};

const startAutoSlider1 = () => {
  autoSlideInterval1 = setInterval(() => moveSlider1("down"), 3000);
};

sliderWrapper1.addEventListener("wheel", (e) => {
  clearInterval(autoSlideInterval1);
  moveSlider1(e.deltaY > 0 ? "down" : "up");
  startAutoSlider1();
});

createSlides1();
startAutoSlider1();

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    let slider = document.querySelector(".join-slider");
    let slides = document.querySelectorAll(".slide");
    let index = 0;
    const totalSlides = slides.length;

    function nextSlide() {
      index = (index + 1) % totalSlides;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    let slideInterval = setInterval(nextSlide, 4000);

    slider.addEventListener("touchstart", function (event) {
      clearInterval(slideInterval);
    });

    slider.addEventListener("touchend", function (event) {
      slideInterval = setInterval(nextSlide, 4000);
    });
  }
});

const sliderWrapper2 = document.querySelector(".join-slider");
const slides2 = [
  {
    src: "/images/sky.png",
    alt: "Chat with attractive streamers for free",
    title: "Chat with attractive streamers for free",
    text: "It’s an excellent web platform for streaming. Write messages to the beautiful streamers for free and explore this magical universe of communication!",
  },
  {
    src: "/images/zamok.png",
    alt: "Only verified users",
    title: "Only verified users",
    text: "We care about the privacy and security of our customers. All accounts are verified so look for an attractive stranger confidently!",
  },
  {
    src: "/images/search.svg",
    alt: "Customized search",
    title: "Customized search",
    text: "Match alluring partners for your own preferences. Maybe you will be interested in a hot slender European or shy beautiful Asian? Make your choice…",
  },
  {
    src: "/images/ok.png",
    alt: "Easy to use",
    title: "Easy to use",
    text: "Forget about hundreds of annoying notifications and inconvenient use. We have created the platform as easy to use and search as possible. Don’t waste your time studying functionality. Just enjoy!",
  },
];
const slideWidth2 = 100;
let slideIndex2 = 0;
let autoSlideInterval2;

const createSlides2 = () => {
  slides2.forEach((slide) => {
    const slideElement = document.createElement("div");
    slideElement.classList.add("slide");

    const contentElement = document.createElement("div");
    contentElement.classList.add("left-block-join");

    const titleElement = document.createElement("div");
    titleElement.classList.add("title-join");

    const imgElement = document.createElement("img");
    imgElement.src = slide.src;
    imgElement.alt = slide.alt;

    const h2Element = document.createElement("h2");
    h2Element.classList.add("h2-left");
    h2Element.textContent = slide.title;

    const pElement = document.createElement("p");
    pElement.classList.add("p-left");
    pElement.textContent = slide.text;

    titleElement.appendChild(imgElement);
    titleElement.appendChild(h2Element);
    contentElement.appendChild(titleElement);
    contentElement.appendChild(pElement);
    slideElement.appendChild(contentElement);

    sliderWrapper2.appendChild(slideElement);
  });

  sliderWrapper2.style.transform = `translateX(-${slideIndex2 * slideWidth2}%)`;
};

const startSlider2 = () => {
  autoSlideInterval2 = setInterval(() => {
    slideIndex2 = (slideIndex2 + 1) % slides2.length;
    sliderWrapper2.style.transform = `translateX(-${slideIndex2 * 100}%)`;
  }, 3000);
};

const stopSlider2 = () => {
  clearInterval(autoSlideInterval2);
};
createSlides2();
startSlider2();

function scrollToForm() {
  const form = document.getElementById("form-container");
  form.scrollIntoView({behavior: "smooth"});
}



document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.getElementById("form-1");
  const form2 = document.getElementById("form-2");
  const microbutton1 = document.getElementById("microbutton1");
  const microbutton2 = document.getElementById("microbutton2");

  
  if (window.innerWidth <= 768) { 
    form1.classList.add('active-form');
    form2.classList.remove('active-form');

  } else { 
    form1.classList.remove('active-form');
    form2.classList.add('active-form');
    microbutton2.classList.remove('opacity');
    microbutton1.classList.add('opacity')
  }
});

const handleFormSwitch = () => {
  document.getElementById("form-1").classList.toggle('active-form');
  document.getElementById("form-2").classList.toggle('active-form');
  document.getElementById("microbutton1").classList.toggle('opacity');
  document.getElementById("microbutton2").classList.toggle('opacity');
};

document.getElementById("microbutton1").addEventListener("click", handleFormSwitch);
document.getElementById("microbutton2").addEventListener("click", handleFormSwitch);



function selectGender(button) {
  const buttons = document.querySelectorAll(".gender");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  button.classList.add("selected");
}
 
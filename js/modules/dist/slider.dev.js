"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function slider(_ref) {
  var container = _ref.container,
      slide = _ref.slide,
      nextArrow = _ref.nextArrow,
      prevArrow = _ref.prevArrow,
      totalCounter = _ref.totalCounter,
      currentCounter = _ref.currentCounter,
      wrapper = _ref.wrapper,
      field = _ref.field;
  var slides = document.querySelectorAll(slide),
      currentSlide = document.querySelector(currentCounter),
      totalSlides = document.querySelector(totalCounter),
      nextSlideButton = document.querySelector(nextArrow),
      prevSlideButton = document.querySelector(prevArrow),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      slider = document.querySelector(container),
      width = window.getComputedStyle(slidesWrapper).width;
  var slideIndex = 1,
      offset = 0;

  if (slides.length < 10) {
    totalSlides.textContent = "0".concat(slides.length);
    currentSlide.textContent = "0".concat(slideIndex);
  } else {
    totalSlides.textContent = slides.length;
    currentSlide.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.tansition = '0.5s all';
  slider.style.position = 'relative';
  slidesWrapper.style.overflow = 'hidden';
  slides.forEach(function (slide) {
    return slide.style.width = width;
  });
  var dotsWrapper = document.createElement('ol');
  dotsWrapper.classList.add('carousel-indicators');
  slider.append(dotsWrapper);
  var dots = [];

  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('dataNumber', i + 1);
    dot.addEventListener('click', function (e) {
      var slideTo = +e.target.attributes.datanumber.nodeValue;
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, "") * (slideTo - 1);
      slidesField.style.transform = "translateX(-".concat(offset, "px)");
      dots.forEach(function (dot) {
        return dot.style.opacity = '.5';
      });
      dots[slideIndex - 1].style.opacity = 1;
    });
    dotsWrapper.append(dot);
    dots.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  nextSlideButton.addEventListener('click', function () {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesField.style.transform = "translateX(-".concat(offset, "px)");

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      currentSlide.textContent = "0".concat(slideIndex);
    } else {
      currentSlide.textContent = slideIndex;
    }

    dots.forEach(function (dot) {
      return dot.style.opacity = '.5';
    });
    dots[slideIndex - 1].style.opacity = 1;
  });
  prevSlideButton.addEventListener('click', function () {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = "translateX(-".concat(offset, "px)");

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      currentSlide.textContent = "0".concat(slideIndex);
    } else {
      currentSlide.textContent = slideIndex;
    }

    dots.forEach(function (dot) {
      return dot.style.opacity = '.5';
    });
    dots[slideIndex - 1].style.opacity = 1;
  });
}

var _default = slider;
exports["default"] = _default;
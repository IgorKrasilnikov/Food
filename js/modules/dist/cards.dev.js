"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _services = require("./services/services");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function cards() {
  var menuField = document.querySelector('.menu__field');
  var menuContainer = menuField.querySelector('.container');

  var Menu =
  /*#__PURE__*/
  function () {
    function Menu(src, title, text, price) {
      _classCallCheck(this, Menu);

      this.src = src;
      this.title = title;

      for (var _len = arguments.length, classes = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        classes[_key - 4] = arguments[_key];
      }

      this.classes = classes;
      this.text = text;
      this.price = price;
    }

    _createClass(Menu, [{
      key: "render",
      value: function render() {
        var element = document.createElement('div');

        if (this.classes.length === 0) {
          this.element = 'menu__item';
          element.classList.add(this.element);
        } else {
          this.classes.forEach(function (className) {
            return element.classList.add(className);
          });
        }

        element.innerHTML = "\n                    <img src=".concat(this.src, ">\n                    <h3 class=\"menu__item-subtitle\">").concat(this.title, "</h3>\n                    <div class=\"menu__item-descr\">").concat(this.text, "</div>\n                    <div class=\"menu__item-divider\"></div>\n                    <div class=\"menu__item-price\">\n                        <div class=\"menu__item-cost\">\u0426\u0435\u043D\u0430:</div>\n                        <div class=\"menu__item-total\"><span>").concat(this.price, "</span> \u0433\u0440\u043D/\u0434\u0435\u043D\u044C</div>\n                    </div>");
        menuContainer.append(element);
      }
    }]);

    return Menu;
  }();

  (0, _services.getResource)("http://localhost:3000/menu").then(function (data) {
    data.forEach(function (_ref) {
      var img = _ref.img,
          title = _ref.title,
          descr = _ref.descr,
          price = _ref.price;
      price = price * 30;
      new Menu(img, title, descr, price).render();
    });
  });
}

var _default = cards;
exports["default"] = _default;
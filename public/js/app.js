(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
// Add own String method for uppercasing
// the first char of each word in a string.
"use strict";

var _modelPerson = require('./model/Person');

var _bootstrapAlert = require('./bootstrap/alert');

var _bootstrapButton = require('./bootstrap/button');

var _bootstrapCarousel = require('./bootstrap/Carousel');

var _bootstrapCollapse = require('./bootstrap/collapse');

var _bootstrapDropdown = require('./bootstrap/dropdown');

var _bootstrapModal = require('./bootstrap/modal');

var _bootstrapPopover = require('./bootstrap/popover');

var _bootstrapScrollspy = require('./bootstrap/scrollspy');

var _bootstrapTooltip = require('./bootstrap/tooltip');

if (!String.prototype.titleize) {
  String.prototype.titleize = function () {
    'use strict';
    var finalWords = [];
    var words = String(this).split(" ");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var word = _step.value;

        var firstChar = word.charAt(0).toUpperCase();
        finalWords.push(firstChar + word.substr(1));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return finalWords.join(" ");
  };
}

global.app = function () {
  var tom = new _modelPerson.Person('tom', 'jones');
  console.log(tom.firstName);
  console.log(tom.lastName);
  console.log(tom.fullName);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZmF1ci9Eb2N1bWVudHMvU2NyYXRjaC9FUzZURVNUUy9FUzYtQm9vdHN0cmFwNC9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OzJCQWVxQixnQkFBZ0I7OzhCQVNqQixtQkFBbUI7OytCQUNsQixvQkFBb0I7O2lDQUNsQixzQkFBc0I7O2lDQUN0QixzQkFBc0I7O2lDQUN0QixzQkFBc0I7OzhCQUN6QixtQkFBbUI7O2dDQUNqQixxQkFBcUI7O2tDQUNuQix1QkFBdUI7O2dDQUN6QixxQkFBcUI7O0FBOUIzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7QUFDOUIsUUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsWUFBVztBQUNyQyxnQkFBWSxDQUFDO0FBQ2IsUUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFFBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7OztBQUNwQywyQkFBaUIsS0FBSyw4SEFBRTtZQUFmLElBQUk7O0FBQ1gsWUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3QyxrQkFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQzdDOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsV0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQzdCLENBQUM7Q0FDSDs7QUFJRCxNQUFNLENBQUMsR0FBRyxHQUFHLFlBQVk7QUFDdkIsTUFBSSxHQUFHLEdBQUcsd0JBQVcsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNCLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQzNCLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFkZCBvd24gU3RyaW5nIG1ldGhvZCBmb3IgdXBwZXJjYXNpbmdcbi8vIHRoZSBmaXJzdCBjaGFyIG9mIGVhY2ggd29yZCBpbiBhIHN0cmluZy5cbmlmICghU3RyaW5nLnByb3RvdHlwZS50aXRsZWl6ZSkge1xuICBTdHJpbmcucHJvdG90eXBlLnRpdGxlaXplID0gZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBmaW5hbFdvcmRzID0gW107XG4gICAgbGV0IHdvcmRzID0gU3RyaW5nKHRoaXMpLnNwbGl0KFwiIFwiKTtcbiAgICBmb3IgKGxldCB3b3JkIG9mIHdvcmRzKSB7XG4gICAgICBsZXQgZmlyc3RDaGFyID0gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgIGZpbmFsV29yZHMucHVzaChmaXJzdENoYXIgKyB3b3JkLnN1YnN0cigxKSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5hbFdvcmRzLmpvaW4oXCIgXCIpO1xuICB9O1xufVxuXG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9tb2RlbC9QZXJzb24nO1xuXG5nbG9iYWwuYXBwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG9tID0gbmV3IFBlcnNvbigndG9tJywgJ2pvbmVzJyk7XG4gIGNvbnNvbGUubG9nKHRvbS5maXJzdE5hbWUpO1xuICBjb25zb2xlLmxvZyh0b20ubGFzdE5hbWUpO1xuICBjb25zb2xlLmxvZyh0b20uZnVsbE5hbWUpO1xufTtcblxuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi9ib290c3RyYXAvYWxlcnQnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4vYm9vdHN0cmFwL2J1dHRvbic7XG5pbXBvcnQge0Nhcm91c2VsfSBmcm9tICcuL2Jvb3RzdHJhcC9DYXJvdXNlbCc7XG5pbXBvcnQge0NvbGxhcHNlfSBmcm9tICcuL2Jvb3RzdHJhcC9jb2xsYXBzZSc7XG5pbXBvcnQge0Ryb3Bkb3dufSBmcm9tICcuL2Jvb3RzdHJhcC9kcm9wZG93bic7XG5pbXBvcnQge01vZGFsfSBmcm9tICcuL2Jvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQge1BvcG92ZXJ9IGZyb20gJy4vYm9vdHN0cmFwL3BvcG92ZXInO1xuaW1wb3J0IHtTY3JvbGxzcHl9IGZyb20gJy4vYm9vdHN0cmFwL3Njcm9sbHNweSc7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJy4vYm9vdHN0cmFwL3Rvb2x0aXAnO1xuIl19
},{"./bootstrap/Carousel":2,"./bootstrap/alert":3,"./bootstrap/button":4,"./bootstrap/collapse":5,"./bootstrap/dropdown":6,"./bootstrap/modal":7,"./bootstrap/popover":8,"./bootstrap/scrollspy":9,"./bootstrap/tooltip":10,"./model/Person":12}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };

  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };

  var Direction = {
    NEXT: 'next',
    PREVIOUS: 'prev'
  };

  var Event = {
    SLIDE: 'slide' + EVENT_KEY,
    SLID: 'slid' + EVENT_KEY,
    KEYDOWN: 'keydown' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'right',
    LEFT: 'left',
    ITEM: 'carousel-item'
  };

  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.next, .prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = (function () {
    function Carousel(element, config) {
      _classCallCheck(this, Carousel);

      this._items = null;
      this._interval = null;
      this._activeElement = null;

      this._isPaused = false;
      this._isSliding = false;

      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Carousel, [{
      key: 'next',

      // public

      value: function next() {
        if (!this._isSliding) {
          this._slide(Direction.NEXT);
        }
      }
    }, {
      key: 'prev',
      value: function prev() {
        if (!this._isSliding) {
          this._slide(Direction.PREVIOUS);
        }
      }
    }, {
      key: 'pause',
      value: function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if ($(this._element).find(Selector.NEXT_PREV)[0] && _util2['default'].supportsTransitionEnd()) {
          _util2['default'].triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      }
    }, {
      key: 'cycle',
      value: function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval($.proxy(this.next, this), this._config.interval);
        }
      }
    }, {
      key: 'to',
      value: function to(index) {
        var _this = this;

        this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          $(this._element).one(Event.SLID, function () {
            return _this.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var direction = index > activeIndex ? Direction.NEXT : Direction.PREVIOUS;

        this._slide(direction, this._items[index]);
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $(this._element).off(EVENT_KEY);
        $.removeData(this._element, DATA_KEY);

        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        _util2['default'].typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_addEventListeners',
      value: function _addEventListeners() {
        if (this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN, $.proxy(this._keydown, this));
        }

        if (this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)) {
          $(this._element).on(Event.MOUSEENTER, $.proxy(this.pause, this)).on(Event.MOUSELEAVE, $.proxy(this.cycle, this));
        }
      }
    }, {
      key: '_keydown',
      value: function _keydown(event) {
        event.preventDefault();

        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        switch (event.which) {
          case 37:
            this.prev();break;
          case 39:
            this.next();break;
          default:
            return;
        }
      }
    }, {
      key: '_getItemIndex',
      value: function _getItemIndex(element) {
        this._items = $.makeArray($(element).parent().find(Selector.ITEM));
        return this._items.indexOf(element);
      }
    }, {
      key: '_getItemByDirection',
      value: function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === Direction.NEXT;
        var isPrevDirection = direction === Direction.PREVIOUS;
        var activeIndex = this._getItemIndex(activeElement);
        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = direction === Direction.PREVIOUS ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;

        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      }
    }, {
      key: '_triggerSlideEvent',
      value: function _triggerSlideEvent(relatedTarget, directionalClassname) {
        var slideEvent = $.Event(Event.SLIDE, {
          relatedTarget: relatedTarget,
          direction: directionalClassname
        });

        $(this._element).trigger(slideEvent);

        return slideEvent;
      }
    }, {
      key: '_setActiveIndicatorElement',
      value: function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

          if (nextIndicator) {
            $(nextIndicator).addClass(ClassName.ACTIVE);
          }
        }
      }
    }, {
      key: '_slide',
      value: function _slide(direction, element) {
        var _this2 = this;

        var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];
        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

        var isCycling = Boolean(this._interval);

        var directionalClassName = direction === Direction.NEXT ? ClassName.LEFT : ClassName.RIGHT;

        if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, directionalClassName);
        if (slideEvent.isDefaultPrevented()) {
          return;
        }

        if (!activeElement || !nextElement) {
          // some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = $.Event(Event.SLID, {
          relatedTarget: nextElement,
          direction: directionalClassName
        });

        if (_util2['default'].supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {

          $(nextElement).addClass(direction);

          _util2['default'].reflow(nextElement);

          $(activeElement).addClass(directionalClassName);
          $(nextElement).addClass(directionalClassName);

          $(activeElement).one(_util2['default'].TRANSITION_END, function () {
            $(nextElement).removeClass(directionalClassName).removeClass(direction);

            $(nextElement).addClass(ClassName.ACTIVE);

            $(activeElement).removeClass(ClassName.ACTIVE).removeClass(direction).removeClass(directionalClassName);

            _this2._isSliding = false;

            setTimeout(function () {
              return $(_this2._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          $(activeElement).removeClass(ClassName.ACTIVE);
          $(nextElement).addClass(ClassName.ACTIVE);

          this._isSliding = false;
          $(this._element).trigger(slidEvent);
        }

        if (isCycling) {
          this.cycle();
        }
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Default, $(this).data());

          if (typeof config === 'object') {
            $.extend(_config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new Carousel(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (action) {
            data[action]();
          } else if (_config.interval) {
            data.pause();
            data.cycle();
          }
        });
      }
    }, {
      key: '_dataApiClickHandler',
      value: function _dataApiClickHandler(event) {
        var selector = _util2['default'].getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $(selector)[0];

        if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
          return;
        }

        var config = $.extend({}, $(target).data(), $(this).data());
        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($(target), config);

        if (slideIndex) {
          $(target).data(DATA_KEY).to(slideIndex);
        }

        event.preventDefault();
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
})(jQuery);

exports['default'] = Carousel;
module.exports = exports['default'];

},{"./util":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };

  var Event = {
    CLOSE: 'close' + EVENT_KEY,
    CLOSED: 'closed' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    IN: 'in'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = (function () {
    function Alert(element) {
      _classCallCheck(this, Alert);

      this._element = element;
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Alert, [{
      key: 'close',

      // public

      value: function close(element) {
        element = element || this._element;

        var rootElement = this._getRootElement(element);
        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }

      // private

    }, {
      key: '_getRootElement',
      value: function _getRootElement(element) {
        var selector = _util2['default'].getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = $(selector)[0];
        }

        if (!parent) {
          parent = $(element).closest('.' + ClassName.ALERT)[0];
        }

        return parent;
      }
    }, {
      key: '_triggerCloseEvent',
      value: function _triggerCloseEvent(element) {
        var closeEvent = $.Event(Event.CLOSE);

        $(element).trigger(closeEvent);
        return closeEvent;
      }
    }, {
      key: '_removeElement',
      value: function _removeElement(element) {
        $(element).removeClass(ClassName.IN);

        if (!_util2['default'].supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);
          return;
        }

        $(element).one(_util2['default'].TRANSITION_END, $.proxy(this._destroyElement, this, element)).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: '_destroyElement',
      value: function _destroyElement(element) {
        $(element).detach().trigger(Event.CLOSED).remove();
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      }
    }, {
      key: '_handleDismiss',
      value: function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
})(jQuery);

exports['default'] = Alert;
module.exports = exports['default'];

},{"./util":11}],4:[function(require,module,exports){
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Button = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };

  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = (function () {
    function Button(element) {
      _classCallCheck(this, Button);

      this._element = element;
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Button, [{
      key: 'toggle',

      // public

      value: function toggle() {
        var triggerChangeEvent = true;
        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

        if (rootElement) {
          var input = $(this._element).find(Selector.INPUT)[0];

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

                if (activeElement) {
                  $(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
              $(this._element).trigger('change');
            }
          }
        } else {
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName.ACTIVE);
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Button(this);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();

    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
})(jQuery);

exports['default'] = Button;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    IN: 'in',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.panel > .in, .panel > .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = (function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Collapse, [{
      key: 'toggle',

      // public

      value: function toggle() {
        if ($(this._element).hasClass(ClassName.IN)) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: 'show',
      value: function show() {
        var _this = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var actives = undefined;
        var activesData = undefined;

        if (this._parent) {
          actives = $.makeArray($(Selector.ACTIVES));
          if (!actives.length) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).data(DATA_KEY);
          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($(actives), 'hide');
          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

        this._element.style[dimension] = 0;
        this._element.setAttribute('aria-expanded', true);

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);

          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $(_this._element).trigger(Event.SHOWN);
        };

        if (!_util2['default'].supportsTransitionEnd()) {
          complete();
          return;
        }

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = 'scroll' + capitalizedDimension;

        $(this._element).one(_util2['default'].TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

        this._element.style[dimension] = this._element[scrollSize] + 'px';
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

        this._element.style[dimension] = this._element[offsetDimension] + 'px';

        _util2['default'].reflow(this._element);

        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN);

        this._element.setAttribute('aria-expanded', false);

        if (this._triggerArray.length) {
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);
          $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = 0;

        if (!_util2['default'].supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._element).one(_util2['default'].TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'setTransitioning',
      value: function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);

        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle); // coerce string values
        _util2['default'].typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_getDimension',
      value: function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      }
    }, {
      key: '_getParent',
      value: function _getParent() {
        var _this3 = this;

        var parent = $(this._config.parent)[0];
        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

        $(parent).find(selector).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });

        return parent;
      }
    }, {
      key: '_addAriaAndCollapsedClass',
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.IN);
          element.setAttribute('aria-expanded', isOpen);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }

      // static

    }], [{
      key: '_getTargetFromElement',
      value: function _getTargetFromElement(element) {
        var selector = _util2['default'].getSelectorFromElement(element);
        return selector ? $(selector)[0] : null;
      }
    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          var _config = $.extend({}, Default, $this.data(), typeof config === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    var target = Collapse._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Collapse._jQueryInterface.call($(target), config);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
})(jQuery);

exports['default'] = Collapse;
module.exports = exports['default'];

},{"./util":11}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    BACKDROP: 'dropdown-backdrop',
    DISABLED: 'disabled',
    OPEN: 'open'
  };

  var Selector = {
    BACKDROP: '.dropdown-backdrop',
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    ROLE_MENU: '[role="menu"]',
    ROLE_LISTBOX: '[role="listbox"]',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = (function () {
    function Dropdown(element) {
      _classCallCheck(this, Dropdown);

      this._element = element;

      this._addEventListeners();
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Dropdown, [{
      key: 'toggle',

      // public

      value: function toggle() {
        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return false;
        }

        var parent = Dropdown._getParentFromElement(this);
        var isActive = $(parent).hasClass(ClassName.OPEN);

        Dropdown._clearMenus();

        if (isActive) {
          return false;
        }

        if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {

          // if mobile we use a backdrop because click events don't delegate
          var dropdown = document.createElement('div');
          dropdown.className = ClassName.BACKDROP;
          $(dropdown).insertBefore(this);
          $(dropdown).on('click', Dropdown._clearMenus);
        }

        var relatedTarget = { relatedTarget: this };
        var showEvent = $.Event(Event.SHOW, relatedTarget);

        $(parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return false;
        }

        this.focus();
        this.setAttribute('aria-expanded', 'true');

        $(parent).toggleClass(ClassName.OPEN);
        $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

        return false;
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._element).off(EVENT_KEY);
        this._element = null;
      }

      // private

    }, {
      key: '_addEventListeners',
      value: function _addEventListeners() {
        $(this._element).on(Event.CLICK, this.toggle);
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            $(this).data(DATA_KEY, data = new Dropdown(this));
          }

          if (typeof config === 'string') {
            data[config].call(this);
          }
        });
      }
    }, {
      key: '_clearMenus',
      value: function _clearMenus(event) {
        if (event && event.which === 3) {
          return;
        }

        var backdrop = $(Selector.BACKDROP)[0];
        if (backdrop) {
          backdrop.parentNode.removeChild(backdrop);
        }

        var toggles = $.makeArray($(Selector.DATA_TOGGLE));

        for (var i = 0; i < toggles.length; i++) {
          var _parent = Dropdown._getParentFromElement(toggles[i]);
          var relatedTarget = { relatedTarget: toggles[i] };

          if (!$(_parent).hasClass(ClassName.OPEN)) {
            continue;
          }

          if (event && event.type === 'click' && /input|textarea/i.test(event.target.tagName) && $.contains(_parent, event.target)) {
            continue;
          }

          var hideEvent = $.Event(Event.HIDE, relatedTarget);
          $(_parent).trigger(hideEvent);
          if (hideEvent.isDefaultPrevented()) {
            continue;
          }

          toggles[i].setAttribute('aria-expanded', 'false');

          $(_parent).removeClass(ClassName.OPEN).trigger($.Event(Event.HIDDEN, relatedTarget));
        }
      }
    }, {
      key: '_getParentFromElement',
      value: function _getParentFromElement(element) {
        var parent = undefined;
        var selector = _util2['default'].getSelectorFromElement(element);

        if (selector) {
          parent = $(selector)[0];
        }

        return parent || element.parentNode;
      }
    }, {
      key: '_dataApiKeydownHandler',
      value: function _dataApiKeydownHandler(event) {
        if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this);
        var isActive = $(parent).hasClass(ClassName.OPEN);

        if (!isActive && event.which !== 27 || isActive && event.which === 27) {

          if (event.which === 27) {
            var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
            $(toggle).trigger('focus');
          }

          $(this).trigger('click');
          return;
        }

        var items = $.makeArray($(Selector.VISIBLE_ITEMS));

        items = items.filter(function (item) {
          return item.offsetWidth || item.offsetHeight;
        });

        if (!items.length) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === 38 && index > 0) {
          // up
          index--;
        }

        if (event.which === 40 && index < items.length - 1) {
          // down
          index++;
        }

        if (! ~index) {
          index = 0;
        }

        items[index].focus();
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Dropdown;
  })();

  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
})(jQuery);

exports['default'] = Dropdown;
module.exports = exports['default'];

},{"./util":11}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };

  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    RESIZE: 'resize' + EVENT_KEY,
    CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
    KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
    MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
    MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = (function () {
    function Modal(element, config) {
      _classCallCheck(this, Modal);

      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Modal, [{
      key: 'toggle',

      // public

      value: function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: 'show',
      value: function show(relatedTarget) {
        var _this = this;

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });

        $(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();
        this._setScrollbar();

        $(document.body).addClass(ClassName.OPEN);

        this._setEscapeEvent();
        this._setResizeEvent();

        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, $.proxy(this.hide, this));

        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this._element)) {
              that._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop($.proxy(this._showElement, this, relatedTarget));
      }
    }, {
      key: 'hide',
      value: function hide(event) {
        if (event) {
          event.preventDefault();
        }

        var hideEvent = $.Event(Event.HIDE);

        $(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;

        this._setEscapeEvent();
        this._setResizeEvent();

        $(document).off(Event.FOCUSIN);

        $(this._element).removeClass(ClassName.IN);

        $(this._element).off(Event.CLICK_DISMISS);
        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

        if (_util2['default'].supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {

          $(this._element).one(_util2['default'].TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideModal();
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);

        $(window).off(EVENT_KEY);
        $(document).off(EVENT_KEY);
        $(this._element).off(EVENT_KEY);
        $(this._backdrop).off(EVENT_KEY);

        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._originalBodyPadding = null;
        this._scrollbarWidth = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        _util2['default'].typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_showElement',
      value: function _showElement(relatedTarget) {
        var _this2 = this;

        var transition = _util2['default'].supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // don't move modals dom position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';
        this._element.scrollTop = 0;

        if (transition) {
          _util2['default'].reflow(this._element);
        }

        $(this._element).addClass(ClassName.IN);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this2._config.focus) {
            _this2._element.focus();
          }
          $(_this2._element).trigger(shownEvent);
        };

        if (transition) {
          $(this._dialog).one(_util2['default'].TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      }
    }, {
      key: '_enforceFocus',
      value: function _enforceFocus() {
        var _this3 = this;

        $(document).off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (_this3._element !== event.target && !$(_this3._element).has(event.target).length) {
            _this3._element.focus();
          }
        });
      }
    }, {
      key: '_setEscapeEvent',
      value: function _setEscapeEvent() {
        var _this4 = this;

        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === 27) {
              _this4.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      }
    }, {
      key: '_setResizeEvent',
      value: function _setResizeEvent() {
        if (this._isShown) {
          $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this));
        } else {
          $(window).off(Event.RESIZE);
        }
      }
    }, {
      key: '_hideModal',
      value: function _hideModal() {
        var _this5 = this;

        this._element.style.display = 'none';
        this._showBackdrop(function () {
          $(document.body).removeClass(ClassName.OPEN);
          _this5._resetAdjustments();
          _this5._resetScrollbar();
          $(_this5._element).trigger(Event.HIDDEN);
        });
      }
    }, {
      key: '_removeBackdrop',
      value: function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      }
    }, {
      key: '_showBackdrop',
      value: function _showBackdrop(callback) {
        var _this6 = this;

        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

        if (this._isShown && this._config.backdrop) {
          var doAnimate = _util2['default'].supportsTransitionEnd() && animate;

          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;

          if (animate) {
            $(this._backdrop).addClass(animate);
          }

          $(this._backdrop).appendTo(document.body);

          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this6._ignoreBackdropClick) {
              _this6._ignoreBackdropClick = false;
              return;
            }
            if (event.target !== event.currentTarget) {
              return;
            }
            if (_this6._config.backdrop === 'static') {
              _this6._element.focus();
            } else {
              _this6.hide();
            }
          });

          if (doAnimate) {
            _util2['default'].reflow(this._backdrop);
          }

          $(this._backdrop).addClass(ClassName.IN);

          if (!callback) {
            return;
          }

          if (!doAnimate) {
            callback();
            return;
          }

          $(this._backdrop).one(_util2['default'].TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else if (!this._isShown && this._backdrop) {
          $(this._backdrop).removeClass(ClassName.IN);

          var callbackRemove = function callbackRemove() {
            _this6._removeBackdrop();
            if (callback) {
              callback();
            }
          };

          if (_util2['default'].supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
            $(this._backdrop).one(_util2['default'].TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }

      // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------

    }, {
      key: '_handleUpdate',
      value: function _handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: '_adjustDialog',
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + 'px';
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + 'px~';
        }
      }
    }, {
      key: '_resetAdjustments',
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      }
    }, {
      key: '_checkScrollbar',
      value: function _checkScrollbar() {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
          // workaround for missing window.innerWidth in IE8
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      }
    }, {
      key: '_setScrollbar',
      value: function _setScrollbar() {
        var bodyPadding = parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0, 10);

        this._originalBodyPadding = document.body.style.paddingRight || '';

        if (this._isBodyOverflowing) {
          document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';
        }
      }
    }, {
      key: '_resetScrollbar',
      value: function _resetScrollbar() {
        document.body.style.paddingRight = this._originalBodyPadding;
      }
    }, {
      key: '_getScrollbarWidth',
      value: function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = $.extend({}, Modal.Default, $(this).data(), typeof config === 'object' && config);

          if (!data) {
            data = new Modal(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this7 = this;

    var target = undefined;
    var selector = _util2['default'].getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this7).is(':visible')) {
          _this7.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
})(jQuery);

exports['default'] = Modal;
module.exports = exports['default'];

},{"./util":11}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'popover';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = $.extend({}, _tooltip2['default'].Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'
  });

  var DefaultType = $.extend({}, _tooltip2['default'].DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName = {
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    TITLE: '.popover-title',
    CONTENT: '.popover-content',
    ARROW: '.popover-arrow'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = (function (_Tooltip) {
    _inherits(Popover, _Tooltip);

    function Popover() {
      _classCallCheck(this, Popover);

      _get(Object.getPrototypeOf(Popover.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    _createClass(Popover, [{
      key: 'isWithContent',

      // overrides

      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: 'getTipElement',
      value: function getTipElement() {
        return this.tip = this.tip || $(this.config.template)[0];
      }
    }, {
      key: 'setContent',
      value: function setContent() {
        var $tip = $(this.getTipElement());

        // we use append for html objects to maintain js events
        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
        this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

        $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);

        this.cleanupTether();
      }

      // private

    }, {
      key: '_getContent',
      value: function _getContent() {
        return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = typeof config === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',

      // getters

      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Popover;
  })(_tooltip2['default']);

  $.fn[NAME] = Popover._jQueryInterface;
  $.fn[NAME].Constructor = Popover;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
})(jQuery);

exports['default'] = Popover;
module.exports = exports['default'];

},{"./tooltip":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };

  var Event = {
    ACTIVATE: 'activate' + EVENT_KEY,
    SCROLL: 'scroll' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    NAV_LINK: 'nav-link',
    NAV: 'nav',
    ACTIVE: 'active'
  };

  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    LIST_ITEM: '.list-item',
    LI: 'li',
    LI_DROPDOWN: 'li.dropdown',
    NAV_LINKS: '.nav-link',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };

  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = (function () {
    function ScrollSpy(element, config) {
      _classCallCheck(this, ScrollSpy);

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;

      $(this._scrollElement).on(Event.SCROLL, $.proxy(this._process, this));

      this.refresh();
      this._process();
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(ScrollSpy, [{
      key: 'refresh',

      // public

      value: function refresh() {
        var _this = this;

        var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

        this._offsets = [];
        this._targets = [];

        this._scrollHeight = this._getScrollHeight();

        var targets = $.makeArray($(this._selector));

        targets.map(function (element) {
          var target = undefined;
          var targetSelector = _util2['default'].getSelectorFromElement(element);

          if (targetSelector) {
            target = $(targetSelector)[0];
          }

          if (target && (target.offsetWidth || target.offsetHeight)) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this._offsets.push(item[0]);
          _this._targets.push(item[1]);
        });
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._scrollElement).off(EVENT_KEY);

        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);

        if (typeof config.target !== 'string') {
          var id = $(config.target).attr('id');
          if (!id) {
            id = _util2['default'].getUID(NAME);
            $(config.target).attr('id', id);
          }
          config.target = '#' + id;
        }

        _util2['default'].typeCheckConfig(NAME, config, DefaultType);

        return config;
      }
    }, {
      key: '_getScrollTop',
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
      }
    }, {
      key: '_getScrollHeight',
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: '_process',
      value: function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;
        var scrollHeight = this._getScrollHeight();
        var maxScroll = this._config.offset + scrollHeight - this._scrollElement.offsetHeight;

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }
        }

        if (this._activeTarget && scrollTop < this._offsets[0]) {
          this._activeTarget = null;
          this._clear();
          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      }
    }, {
      key: '_activate',
      value: function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(',');
        queries = queries.map(function (selector) {
          return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
        });

        var $link = $(queries.join(','));

        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          $link.addClass(ClassName.ACTIVE);
        } else {
          // todo (fat) this is kinda sus…
          // recursively add actives to tested nav-links
          $link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
        }

        $(this._scrollElement).trigger(Event.ACTIVATE, {
          relatedTarget: target
        });
      }
    }, {
      key: '_clear',
      value: function _clear() {
        $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = typeof config === 'object' && config || null;

          if (!data) {
            data = new ScrollSpy(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  })();

  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
})(jQuery);

exports['default'] = ScrollSpy;
module.exports = exports['default'];

},{"./util":11}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tooltip';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = '.' + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tether';

  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: '0 0',
    constraints: []
  };

  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: 'string',
    constraints: 'array'
  };

  var AttachmentMap = {
    TOP: 'bottom center',
    RIGHT: 'middle left',
    BOTTOM: 'top center',
    LEFT: 'middle right'
  };

  var HoverState = {
    IN: 'in',
    OUT: 'out'
  };

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    INSERTED: 'inserted' + EVENT_KEY,
    CLICK: 'click' + EVENT_KEY,
    FOCUSIN: 'focusin' + EVENT_KEY,
    FOCUSOUT: 'focusout' + EVENT_KEY,
    MOUSEENTER: 'mouseenter' + EVENT_KEY,
    MOUSELEAVE: 'mouseleave' + EVENT_KEY
  };

  var ClassName = {
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner'
  };

  var TetherClass = {
    element: false,
    enabled: false
  };

  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = (function () {
    function Tooltip(element, config) {
      _classCallCheck(this, Tooltip);

      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._tether = null;

      // protected
      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    }

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Tooltip, [{
      key: 'enable',

      // public

      value: function enable() {
        this._isEnabled = true;
      }
    }, {
      key: 'disable',
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: 'toggleEnabled',
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: 'toggle',
      value: function toggle(event) {
        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {

          if ($(this.getTipElement()).hasClass(ClassName.IN)) {
            this._leave(null, this);
            return;
          }

          this._enter(null, this);
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        clearTimeout(this._timeout);

        this.cleanupTether();

        $.removeData(this.element, this.constructor.DATA_KEY);

        $(this.element).off(this.constructor.EVENT_KEY);

        if (this.tip) {
          $(this.tip).remove();
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;
        this._tether = null;

        this.element = null;
        this.config = null;
        this.tip = null;
      }
    }, {
      key: 'show',
      value: function show() {
        var _this = this;

        var showEvent = $.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          $(this.element).trigger(showEvent);

          var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }

          var tip = this.getTipElement();
          var tipId = _util2['default'].getUID(this.constructor.NAME);

          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);

          this.setContent();

          if (this.config.animation) {
            $(tip).addClass(ClassName.FADE);
          }

          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

          var attachment = this._getAttachment(placement);

          $(tip).data(this.constructor.DATA_KEY, this).appendTo(document.body);

          $(this.element).trigger(this.constructor.Event.INSERTED);

          this._tether = new Tether({
            attachment: attachment,
            element: tip,
            target: this.element,
            classes: TetherClass,
            classPrefix: CLASS_PREFIX,
            offset: this.config.offset,
            constraints: this.config.constraints
          });

          _util2['default'].reflow(tip);
          this._tether.position();

          $(tip).addClass(ClassName.IN);

          var complete = function complete() {
            var prevHoverState = _this._hoverState;
            _this._hoverState = null;

            $(_this.element).trigger(_this.constructor.Event.SHOWN);

            if (prevHoverState === HoverState.OUT) {
              _this._leave(null, _this);
            }
          };

          if (_util2['default'].supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
            $(this.tip).one(_util2['default'].TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
            return;
          }

          complete();
        }
      }
    }, {
      key: 'hide',
      value: function hide(callback) {
        var _this2 = this;

        var tip = this.getTipElement();
        var hideEvent = $.Event(this.constructor.Event.HIDE);
        var complete = function complete() {
          if (_this2._hoverState !== HoverState.IN && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this2.element.removeAttribute('aria-describedby');
          $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
          _this2.cleanupTether();

          if (callback) {
            callback();
          }
        };

        $(this.element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        $(tip).removeClass(ClassName.IN);

        if (_util2['default'].supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

          $(tip).one(_util2['default'].TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }

        this._hoverState = '';
      }

      // protected

    }, {
      key: 'isWithContent',
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: 'getTipElement',
      value: function getTipElement() {
        return this.tip = this.tip || $(this.config.template)[0];
      }
    }, {
      key: 'setContent',
      value: function setContent() {
        var $tip = $(this.getTipElement());

        this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());

        $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);

        this.cleanupTether();
      }
    }, {
      key: 'setElementContent',
      value: function setElementContent($element, content) {
        var html = this.config.html;
        if (typeof content === 'object' && (content.nodeType || content.jquery)) {
          // content is a DOM node or a jQuery
          if (html) {
            if (!$(content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($(content).text());
          }
        } else {
          $element[html ? 'html' : 'text'](content);
        }
      }
    }, {
      key: 'getTitle',
      value: function getTitle() {
        var title = this.element.getAttribute('data-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }

        return title;
      }
    }, {
      key: 'cleanupTether',
      value: function cleanupTether() {
        if (this._tether) {
          this._tether.destroy();

          // clean up after tether's junk classes
          // remove after they fix issue
          // (https://github.com/HubSpot/tether/issues/36)
          $(this.element).removeClass(this._removeTetherClasses);
          $(this.tip).removeClass(this._removeTetherClasses);
        }
      }

      // private

    }, {
      key: '_getAttachment',
      value: function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      }
    }, {
      key: '_setListeners',
      value: function _setListeners() {
        var _this3 = this;

        var triggers = this.config.trigger.split(' ');

        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, $.proxy(_this3.toggle, _this3));
          } else if (trigger !== Trigger.MANUAL) {
            var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
            var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;

            $(_this3.element).on(eventIn, _this3.config.selector, $.proxy(_this3._enter, _this3)).on(eventOut, _this3.config.selector, $.proxy(_this3._leave, _this3));
          }
        });

        if (this.config.selector) {
          this.config = $.extend({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      }
    }, {
      key: '_removeTetherClasses',
      value: function _removeTetherClasses(i, css) {
        return ((css.baseVal || css).match(new RegExp('(^|\\s)' + CLASS_PREFIX + '-\\S+', 'g')) || []).join(' ');
      }
    }, {
      key: '_fixTitle',
      value: function _fixTitle() {
        var titleType = typeof this.element.getAttribute('data-original-title');
        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      }
    }, {
      key: '_enter',
      value: function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;

        context = context || $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
        }

        if ($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN) {
          context._hoverState = HoverState.IN;
          return;
        }

        clearTimeout(context._timeout);

        context._hoverState = HoverState.IN;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.IN) {
            context.show();
          }
        }, context.config.delay.show);
      }
    }, {
      key: '_leave',
      value: function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;

        context = context || $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);

        context._hoverState = HoverState.OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      }
    }, {
      key: '_isWithActiveTrigger',
      value: function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

        if (config.delay && typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        _util2['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);

        return config;
      }
    }, {
      key: '_getDelegateConfig',
      value: function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);
          var _config = typeof config === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            data[config]();
          }
        });
      }
    }, {
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
      get: function get() {
        return Default;
      }
    }, {
      key: 'NAME',
      get: function get() {
        return NAME;
      }
    }, {
      key: 'DATA_KEY',
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: 'Event',
      get: function get() {
        return Event;
      }
    }, {
      key: 'EVENT_KEY',
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: 'DefaultType',
      get: function get() {
        return DefaultType;
      }
    }]);

    return Tooltip;
  })();

  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
})(jQuery);

exports['default'] = Tooltip;
module.exports = exports['default'];

},{"./util":11}],11:[function(require,module,exports){
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Util = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var transition = false;

  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType;
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments);
        }
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var _name in TransitionEndEvent) {
      if (el.style[_name] !== undefined) {
        return { end: TransitionEndEvent[_name] };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;

    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });

    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);

    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();

    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID: function getUID(prefix) {
      do {
        prefix += ~ ~(Math.random() * 1000000);
      } while (document.getElementById(prefix));
      return prefix;
    },

    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector) {
        selector = element.getAttribute('href') || '';
        selector = /^#[a-z]/i.test(selector) ? selector : null;
      }

      return selector;
    },

    reflow: function reflow(element) {
      new Function('bs', 'return bs')(element.offsetHeight);
    },

    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },

    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },

    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = undefined;

          if (value && isElement(value)) {
            valueType = 'element';
          } else {
            valueType = toType(value);
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
          }
        }
      }
    }
  };

  setTransitionEndSupport();

  return Util;
})(jQuery);

exports['default'] = Util;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Person = (function () {
    function Person(first, last) {
        _classCallCheck(this, Person);

        this.first = first;
        this.last = last;
    }

    _createClass(Person, [{
        key: 'firstName',
        get: function get() {
            return this.first.titleize();
        }
    }, {
        key: 'lastName',
        get: function get() {
            return this.last.titleize();
        }
    }, {
        key: 'fullName',
        get: function get() {
            return this.firstName + ' ' + this.lastName;
        }
    }]);

    return Person;
})();

exports.Person = Person;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwiL1VzZXJzL2FmYXVyL0RvY3VtZW50cy9TY3JhdGNoL0VTNlRFU1RTL0VTNi1Cb290c3RyYXA0L3NyYy9ib290c3RyYXAvQ2Fyb3VzZWwuanMiLCIvVXNlcnMvYWZhdXIvRG9jdW1lbnRzL1NjcmF0Y2gvRVM2VEVTVFMvRVM2LUJvb3RzdHJhcDQvc3JjL2Jvb3RzdHJhcC9hbGVydC5qcyIsIi9Vc2Vycy9hZmF1ci9Eb2N1bWVudHMvU2NyYXRjaC9FUzZURVNUUy9FUzYtQm9vdHN0cmFwNC9zcmMvYm9vdHN0cmFwL2J1dHRvbi5qcyIsIi9Vc2Vycy9hZmF1ci9Eb2N1bWVudHMvU2NyYXRjaC9FUzZURVNUUy9FUzYtQm9vdHN0cmFwNC9zcmMvYm9vdHN0cmFwL2NvbGxhcHNlLmpzIiwiL1VzZXJzL2FmYXVyL0RvY3VtZW50cy9TY3JhdGNoL0VTNlRFU1RTL0VTNi1Cb290c3RyYXA0L3NyYy9ib290c3RyYXAvZHJvcGRvd24uanMiLCIvVXNlcnMvYWZhdXIvRG9jdW1lbnRzL1NjcmF0Y2gvRVM2VEVTVFMvRVM2LUJvb3RzdHJhcDQvc3JjL2Jvb3RzdHJhcC9tb2RhbC5qcyIsIi9Vc2Vycy9hZmF1ci9Eb2N1bWVudHMvU2NyYXRjaC9FUzZURVNUUy9FUzYtQm9vdHN0cmFwNC9zcmMvYm9vdHN0cmFwL3BvcG92ZXIuanMiLCIvVXNlcnMvYWZhdXIvRG9jdW1lbnRzL1NjcmF0Y2gvRVM2VEVTVFMvRVM2LUJvb3RzdHJhcDQvc3JjL2Jvb3RzdHJhcC9zY3JvbGxzcHkuanMiLCIvVXNlcnMvYWZhdXIvRG9jdW1lbnRzL1NjcmF0Y2gvRVM2VEVTVFMvRVM2LUJvb3RzdHJhcDQvc3JjL2Jvb3RzdHJhcC90b29sdGlwLmpzIiwiL1VzZXJzL2FmYXVyL0RvY3VtZW50cy9TY3JhdGNoL0VTNlRFU1RTL0VTNi1Cb290c3RyYXA0L3NyYy9ib290c3RyYXAvdXRpbC5qcyIsIi9Vc2Vycy9hZmF1ci9Eb2N1bWVudHMvU2NyYXRjaC9FUzZURVNUUy9FUzYtQm9vdHN0cmFwNC9zcmMvbW9kZWwvUGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztvQkNwRWlCLFFBQVE7Ozs7Ozs7Ozs7O0FBVXpCLElBQU0sUUFBUSxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUs7Ozs7Ozs7O0FBU3ZCLE1BQU0sSUFBSSxHQUFrQixVQUFVLENBQUE7QUFDdEMsTUFBTSxPQUFPLEdBQWUsT0FBTyxDQUFBO0FBQ25DLE1BQU0sUUFBUSxHQUFjLGFBQWEsQ0FBQTtBQUN6QyxNQUFNLFNBQVMsU0FBaUIsUUFBUSxBQUFFLENBQUE7QUFDMUMsTUFBTSxZQUFZLEdBQVUsV0FBVyxDQUFBO0FBQ3ZDLE1BQU0sa0JBQWtCLEdBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QyxNQUFNLG1CQUFtQixHQUFHLEdBQUcsQ0FBQTs7QUFFL0IsTUFBTSxPQUFPLEdBQUc7QUFDZCxZQUFRLEVBQUcsSUFBSTtBQUNmLFlBQVEsRUFBRyxJQUFJO0FBQ2YsU0FBSyxFQUFNLEtBQUs7QUFDaEIsU0FBSyxF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QkFBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtXQUMxQjs7QUFFRCxjQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQzlDLGtCQUFNLElBQUksS0FBSyxDQUNiLEFBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSx3QkFDbkIsUUFBUSx5QkFBb0IsU0FBUyxRQUFJLDRCQUM5QixhQUFhLFFBQUksQ0FBQyxDQUFBO1dBQzNDO1NBQ0Y7T0FDRjtLQUNGO0dBQ0YsQ0FBQTs7QUFFRCx5QkFBdUIsRUFBRSxDQUFBOztBQUV6QixTQUFPLElBQUksQ0FBQTtDQUVaLENBQUEsQ0FBRSxNQUFNLENBQUMsQ0FBQTs7cUJBRUssSUFBSTs7Ozs7Ozs7Ozs7Ozs7SUMvSmIsTUFBTTtBQUNDLGFBRFAsTUFBTSxDQUNFLEtBQUssRUFBRSxJQUFJLEVBQUU7OEJBRHJCLE1BQU07O0FBRU4sWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDcEI7O2lCQUpHLE1BQU07O2FBTUcsZUFBRztBQUNaLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEM7OzthQUVXLGVBQUc7QUFDWCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9COzs7YUFFVyxlQUFHO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMvQzs7O1dBaEJHLE1BQU07OztRQWtCSixNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vLyBBZGQgb3duIFN0cmluZyBtZXRob2QgZm9yIHVwcGVyY2FzaW5nXG4vLyB0aGUgZmlyc3QgY2hhciBvZiBlYWNoIHdvcmQgaW4gYSBzdHJpbmcuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9tb2RlbFBlcnNvbiA9IHJlcXVpcmUoJy4vbW9kZWwvUGVyc29uJyk7XG5cbnZhciBfYm9vdHN0cmFwQWxlcnQgPSByZXF1aXJlKCcuL2Jvb3RzdHJhcC9hbGVydCcpO1xuXG52YXIgX2Jvb3RzdHJhcEJ1dHRvbiA9IHJlcXVpcmUoJy4vYm9vdHN0cmFwL2J1dHRvbicpO1xuXG52YXIgX2Jvb3RzdHJhcENhcm91c2VsID0gcmVxdWlyZSgnLi9ib290c3RyYXAvQ2Fyb3VzZWwnKTtcblxudmFyIF9ib290c3RyYXBDb2xsYXBzZSA9IHJlcXVpcmUoJy4vYm9vdHN0cmFwL2NvbGxhcHNlJyk7XG5cbnZhciBfYm9vdHN0cmFwRHJvcGRvd24gPSByZXF1aXJlKCcuL2Jvb3RzdHJhcC9kcm9wZG93bicpO1xuXG52YXIgX2Jvb3RzdHJhcE1vZGFsID0gcmVxdWlyZSgnLi9ib290c3RyYXAvbW9kYWwnKTtcblxudmFyIF9ib290c3RyYXBQb3BvdmVyID0gcmVxdWlyZSgnLi9ib290c3RyYXAvcG9wb3ZlcicpO1xuXG52YXIgX2Jvb3RzdHJhcFNjcm9sbHNweSA9IHJlcXVpcmUoJy4vYm9vdHN0cmFwL3Njcm9sbHNweScpO1xuXG52YXIgX2Jvb3RzdHJhcFRvb2x0aXAgPSByZXF1aXJlKCcuL2Jvb3RzdHJhcC90b29sdGlwJyk7XG5cbmlmICghU3RyaW5nLnByb3RvdHlwZS50aXRsZWl6ZSkge1xuICBTdHJpbmcucHJvdG90eXBlLnRpdGxlaXplID0gZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgZmluYWxXb3JkcyA9IFtdO1xuICAgIHZhciB3b3JkcyA9IFN0cmluZyh0aGlzKS5zcGxpdChcIiBcIik7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB3b3Jkc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIHdvcmQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICB2YXIgZmlyc3RDaGFyID0gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgZmluYWxXb3Jkcy5wdXNoKGZpcnN0Q2hhciArIHdvcmQuc3Vic3RyKDEpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbmFsV29yZHMuam9pbihcIiBcIik7XG4gIH07XG59XG5cbmdsb2JhbC5hcHAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0b20gPSBuZXcgX21vZGVsUGVyc29uLlBlcnNvbigndG9tJywgJ2pvbmVzJyk7XG4gIGNvbnNvbGUubG9nKHRvbS5maXJzdE5hbWUpO1xuICBjb25zb2xlLmxvZyh0b20ubGFzdE5hbWUpO1xuICBjb25zb2xlLmxvZyh0b20uZnVsbE5hbWUpO1xufTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OWhabUYxY2k5RWIyTjFiV1Z1ZEhNdlUyTnlZWFJqYUM5RlV6WlVSVk5VVXk5RlV6WXRRbTl2ZEhOMGNtRndOQzl6Y21NdllYQndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096SkNRV1Z4UWl4blFrRkJaMEk3T3poQ1FWTnFRaXh0UWtGQmJVSTdPeXRDUVVOc1FpeHZRa0ZCYjBJN08ybERRVU5zUWl4elFrRkJjMEk3TzJsRFFVTjBRaXh6UWtGQmMwSTdPMmxEUVVOMFFpeHpRa0ZCYzBJN096aENRVU42UWl4dFFrRkJiVUk3TzJkRFFVTnFRaXh4UWtGQmNVSTdPMnREUVVOdVFpeDFRa0ZCZFVJN08yZERRVU42UWl4eFFrRkJjVUk3TzBGQk9VSXpReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkRPVUlzVVVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1dVRkJWenRCUVVOeVF5eG5Ra0ZCV1N4RFFVRkRPMEZCUTJJc1VVRkJTU3hWUVVGVkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzQkNMRkZCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03T3pzN096dEJRVU53UXl3eVFrRkJhVUlzUzBGQlN5dzRTRUZCUlR0WlFVRm1MRWxCUVVrN08wRkJRMWdzV1VGQlNTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTNReXhyUWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMDlCUXpkRE96czdPenM3T3pzN096czdPenM3TzBGQlEwUXNWMEZCVHl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBkQlF6ZENMRU5CUVVNN1EwRkRTRHM3UVVGSlJDeE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRmxCUVZrN1FVRkRka0lzVFVGQlNTeEhRVUZITEVkQlFVY3NkMEpCUVZjc1MwRkJTeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlEzSkRMRk5CUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMEZCUXpOQ0xGTkJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRekZDTEZOQlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBOQlF6TkNMRU5CUVVNaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVGa1pDQnZkMjRnVTNSeWFXNW5JRzFsZEdodlpDQm1iM0lnZFhCd1pYSmpZWE5wYm1kY2JpOHZJSFJvWlNCbWFYSnpkQ0JqYUdGeUlHOW1JR1ZoWTJnZ2QyOXlaQ0JwYmlCaElITjBjbWx1Wnk1Y2JtbG1JQ2doVTNSeWFXNW5MbkJ5YjNSdmRIbHdaUzUwYVhSc1pXbDZaU2tnZTF4dUlDQlRkSEpwYm1jdWNISnZkRzkwZVhCbExuUnBkR3hsYVhwbElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdKM1Z6WlNCemRISnBZM1FuTzF4dUlDQWdJSFpoY2lCbWFXNWhiRmR2Y21SeklEMGdXMTA3WEc0Z0lDQWdiR1YwSUhkdmNtUnpJRDBnVTNSeWFXNW5LSFJvYVhNcExuTndiR2wwS0Z3aUlGd2lLVHRjYmlBZ0lDQm1iM0lnS0d4bGRDQjNiM0prSUc5bUlIZHZjbVJ6S1NCN1hHNGdJQ0FnSUNCc1pYUWdabWx5YzNSRGFHRnlJRDBnZDI5eVpDNWphR0Z5UVhRb01Da3VkRzlWY0hCbGNrTmhjMlVvS1R0Y2JpQWdJQ0FnSUdacGJtRnNWMjl5WkhNdWNIVnphQ2htYVhKemRFTm9ZWElnS3lCM2IzSmtMbk4xWW5OMGNpZ3hLU2s3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCbWFXNWhiRmR2Y21SekxtcHZhVzRvWENJZ1hDSXBPMXh1SUNCOU8xeHVmVnh1WEc1cGJYQnZjblFnZTFCbGNuTnZibjBnWm5KdmJTQW5MaTl0YjJSbGJDOVFaWEp6YjI0bk8xeHVYRzVuYkc5aVlXd3VZWEJ3SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCMllYSWdkRzl0SUQwZ2JtVjNJRkJsY25OdmJpZ25kRzl0Snl3Z0oycHZibVZ6SnlrN1hHNGdJR052Ym5OdmJHVXViRzluS0hSdmJTNW1hWEp6ZEU1aGJXVXBPMXh1SUNCamIyNXpiMnhsTG14dlp5aDBiMjB1YkdGemRFNWhiV1VwTzF4dUlDQmpiMjV6YjJ4bExteHZaeWgwYjIwdVpuVnNiRTVoYldVcE8xeHVmVHRjYmx4dWFXMXdiM0owSUh0QmJHVnlkSDBnWm5KdmJTQW5MaTlpYjI5MGMzUnlZWEF2WVd4bGNuUW5PMXh1YVcxd2IzSjBJSHRDZFhSMGIyNTlJR1p5YjIwZ0p5NHZZbTl2ZEhOMGNtRndMMkoxZEhSdmJpYzdYRzVwYlhCdmNuUWdlME5oY205MWMyVnNmU0JtY205dElDY3VMMkp2YjNSemRISmhjQzlEWVhKdmRYTmxiQ2M3WEc1cGJYQnZjblFnZTBOdmJHeGhjSE5sZlNCbWNtOXRJQ2N1TDJKdmIzUnpkSEpoY0M5amIyeHNZWEJ6WlNjN1hHNXBiWEJ2Y25RZ2UwUnliM0JrYjNkdWZTQm1jbTl0SUNjdUwySnZiM1J6ZEhKaGNDOWtjbTl3Wkc5M2JpYzdYRzVwYlhCdmNuUWdlMDF2WkdGc2ZTQm1jbTl0SUNjdUwySnZiM1J6ZEhKaGNDOXRiMlJoYkNjN1hHNXBiWEJ2Y25RZ2UxQnZjRzkyWlhKOUlHWnliMjBnSnk0dlltOXZkSE4wY21Gd0wzQnZjRzkyWlhJbk8xeHVhVzF3YjNKMElIdFRZM0p2Ykd4emNIbDlJR1p5YjIwZ0p5NHZZbTl2ZEhOMGNtRndMM05qY205c2JITndlU2M3WEc1cGJYQnZjblFnZTFSdmIyeDBhWEI5SUdaeWIyMGdKeTR2WW05dmRITjBjbUZ3TDNSdmIyeDBhWEFuTzF4dUlsMTkiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQ2Fyb3VzZWwgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2Nhcm91c2VsJ1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmNhcm91c2VsJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSA2MDBcblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGludGVydmFsIDogNTAwMCxcbiAgICBrZXlib2FyZCA6IHRydWUsXG4gICAgc2xpZGUgICAgOiBmYWxzZSxcbiAgICBwYXVzZSAgICA6ICdob3ZlcicsXG4gICAgd3JhcCAgICAgOiB0cnVlXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBpbnRlcnZhbCA6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAgICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgICBzbGlkZSAgICA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBwYXVzZSAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICB3cmFwICAgICA6ICdib29sZWFuJ1xuICB9XG5cbiAgY29uc3QgRGlyZWN0aW9uID0ge1xuICAgIE5FWFQgICAgIDogJ25leHQnLFxuICAgIFBSRVZJT1VTIDogJ3ByZXYnXG4gIH1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBTTElERSAgICAgICAgICA6IGBzbGlkZSR7RVZFTlRfS0VZfWAsXG4gICAgU0xJRCAgICAgICAgICAgOiBgc2xpZCR7RVZFTlRfS0VZfWAsXG4gICAgS0VZRE9XTiAgICAgICAgOiBga2V5ZG93biR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VFTlRFUiAgICAgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VMRUFWRSAgICAgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWAsXG4gICAgTE9BRF9EQVRBX0FQSSAgOiBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ0FST1VTRUwgOiAnY2Fyb3VzZWwnLFxuICAgIEFDVElWRSAgIDogJ2FjdGl2ZScsXG4gICAgU0xJREUgICAgOiAnc2xpZGUnLFxuICAgIFJJR0hUICAgIDogJ3JpZ2h0JyxcbiAgICBMRUZUICAgICA6ICdsZWZ0JyxcbiAgICBJVEVNICAgICA6ICdjYXJvdXNlbC1pdGVtJ1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgQUNUSVZFICAgICAgOiAnLmFjdGl2ZScsXG4gICAgQUNUSVZFX0lURU0gOiAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJyxcbiAgICBJVEVNICAgICAgICA6ICcuY2Fyb3VzZWwtaXRlbScsXG4gICAgTkVYVF9QUkVWICAgOiAnLm5leHQsIC5wcmV2JyxcbiAgICBJTkRJQ0FUT1JTICA6ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycycsXG4gICAgREFUQV9TTElERSAgOiAnW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b10nLFxuICAgIERBVEFfUklERSAgIDogJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBDYXJvdXNlbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2l0ZW1zICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faW50ZXJ2YWwgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ICAgICA9IG51bGxcblxuICAgICAgdGhpcy5faXNQYXVzZWQgICAgICAgICAgPSBmYWxzZVxuICAgICAgdGhpcy5faXNTbGlkaW5nICAgICAgICAgPSBmYWxzZVxuXG4gICAgICB0aGlzLl9jb25maWcgICAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICA9ICQoZWxlbWVudClbMF1cbiAgICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5maW5kKFNlbGVjdG9yLklORElDQVRPUlMpWzBdXG5cbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRcbiAgICB9XG5cblxuICAgIC8vIHB1YmxpY1xuXG4gICAgbmV4dCgpIHtcbiAgICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5ORVhUKVxuICAgICAgfVxuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0aGlzLl9zbGlkZShEaXJlY3Rpb24uUFJFVklPVVMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmZpbmQoU2VsZWN0b3IuTkVYVF9QUkVWKVswXSAmJlxuICAgICAgICBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuXG4gICAgY3ljbGUoZXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgJC5wcm94eSh0aGlzLm5leHQsIHRoaXMpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvKGluZGV4KSB7XG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gJCh0aGlzLl9lbGVtZW50KS5maW5kKFNlbGVjdG9yLkFDVElWRV9JVEVNKVswXVxuXG4gICAgICBsZXQgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgICAgaWYgKGluZGV4ID4gKHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEpIHx8IGluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIHRoaXMuY3ljbGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGRpcmVjdGlvbiA9IGluZGV4ID4gYWN0aXZlSW5kZXggP1xuICAgICAgICBEaXJlY3Rpb24uTkVYVCA6XG4gICAgICAgIERpcmVjdGlvbi5QUkVWSU9VU1xuXG4gICAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24sIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgICB0aGlzLl9pdGVtcyAgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pbnRlcnZhbCAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2lzUGF1c2VkICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNTbGlkaW5nICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9hY3RpdmVFbGVtZW50ICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5vbihFdmVudC5LRVlET1dOLCAkLnByb3h5KHRoaXMuX2tleWRvd24sIHRoaXMpKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInICYmXG4gICAgICAgICEoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLm9uKEV2ZW50Lk1PVVNFRU5URVIsICQucHJveHkodGhpcy5wYXVzZSwgdGhpcykpXG4gICAgICAgICAgLm9uKEV2ZW50Lk1PVVNFTEVBVkUsICQucHJveHkodGhpcy5jeWNsZSwgdGhpcykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2tleWRvd24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgIGNhc2UgMzc6IHRoaXMucHJldigpOyBicmVha1xuICAgICAgICBjYXNlIDM5OiB0aGlzLm5leHQoKTsgYnJlYWtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9pdGVtcyA9ICQubWFrZUFycmF5KCQoZWxlbWVudCkucGFyZW50KCkuZmluZChTZWxlY3Rvci5JVEVNKSlcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGxldCBpc05leHREaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUXG4gICAgICBsZXQgaXNQcmV2RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFVklPVVNcbiAgICAgIGxldCBhY3RpdmVJbmRleCAgICAgPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICAgIGxldCBsYXN0SXRlbUluZGV4ICAgPSAodGhpcy5faXRlbXMubGVuZ3RoIC0gMSlcbiAgICAgIGxldCBpc0dvaW5nVG9XcmFwICAgPSAoaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc05leHREaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IGxhc3RJdGVtSW5kZXgpXG5cbiAgICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgICAgfVxuXG4gICAgICBsZXQgZGVsdGEgICAgID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFVklPVVMgPyAtMSA6IDFcbiAgICAgIGxldCBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLl9pdGVtcy5sZW5ndGhcblxuICAgICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTEgP1xuICAgICAgICB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6IHRoaXMuX2l0ZW1zW2l0ZW1JbmRleF1cbiAgICB9XG5cblxuICAgIF90cmlnZ2VyU2xpZGVFdmVudChyZWxhdGVkVGFyZ2V0LCBkaXJlY3Rpb25hbENsYXNzbmFtZSkge1xuICAgICAgbGV0IHNsaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNMSURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uYWxDbGFzc25hbWVcbiAgICAgIH0pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkZUV2ZW50KVxuXG4gICAgICByZXR1cm4gc2xpZGVFdmVudFxuICAgIH1cblxuICAgIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgICAkKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuICAgICAgICAgIC5maW5kKFNlbGVjdG9yLkFDVElWRSlcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgICBsZXQgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW1xuICAgICAgICAgIHRoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KVxuICAgICAgICBdXG5cbiAgICAgICAgaWYgKG5leHRJbmRpY2F0b3IpIHtcbiAgICAgICAgICAkKG5leHRJbmRpY2F0b3IpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfc2xpZGUoZGlyZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICBsZXQgYWN0aXZlRWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuZmluZChTZWxlY3Rvci5BQ1RJVkVfSVRFTSlbMF1cbiAgICAgIGxldCBuZXh0RWxlbWVudCAgID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmXG4gICAgICAgIHRoaXMuX2dldEl0ZW1CeURpcmVjdGlvbihkaXJlY3Rpb24sIGFjdGl2ZUVsZW1lbnQpXG5cbiAgICAgIGxldCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgICBsZXQgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUID9cbiAgICAgICAgQ2xhc3NOYW1lLkxFRlQgOlxuICAgICAgICBDbGFzc05hbWUuUklHSFRcblxuICAgICAgaWYgKG5leHRFbGVtZW50ICYmICQobmV4dEVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgIGlmIChzbGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAgIC8vIHNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuXG4gICAgICBsZXQgc2xpZEV2ZW50ID0gJC5FdmVudChFdmVudC5TTElELCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbmFsQ2xhc3NOYW1lXG4gICAgICB9KVxuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TTElERSkpIHtcblxuICAgICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb24pXG5cbiAgICAgICAgVXRpbC5yZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgICAgJChhY3RpdmVFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgICAgJChhY3RpdmVFbGVtZW50KVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgJChuZXh0RWxlbWVudClcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoZGlyZWN0aW9uKVxuXG4gICAgICAgICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoZGlyZWN0aW9uKVxuICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCksIDApXG5cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudClcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgJC5leHRlbmQoX2NvbmZpZywgY29uZmlnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBkYXRhLnRvKGNvbmZpZylcblxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbikge1xuICAgICAgICAgIGRhdGFbYWN0aW9uXSgpXG5cbiAgICAgICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsKSB7XG4gICAgICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICAgICAgZGF0YS5jeWNsZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhdGljIF9kYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdXG5cbiAgICAgIGlmICghdGFyZ2V0IHx8ICEkKHRhcmdldCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNBUk9VU0VMKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGNvbmZpZyAgICAgPSAkLmV4dGVuZCh7fSwgJCh0YXJnZXQpLmRhdGEoKSwgJCh0aGlzKS5kYXRhKCkpXG4gICAgICBsZXQgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJylcblxuICAgICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnKVxuXG4gICAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgICAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSkudG8oc2xpZGVJbmRleClcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9TTElERSwgQ2Fyb3VzZWwuX2RhdGFBcGlDbGlja0hhbmRsZXIpXG5cbiAgJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksICgpID0+IHtcbiAgICAkKFNlbGVjdG9yLkRBVEFfUklERSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgJGNhcm91c2VsID0gJCh0aGlzKVxuICAgICAgQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRjYXJvdXNlbCwgJGNhcm91c2VsLmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJvdXNlbFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIENhcm91c2VsXG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMCk6IGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBBbGVydCA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnYWxlcnQnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYWxlcnQnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgQ0xPU0UgICAgICAgICAgOiBgY2xvc2Uke0VWRU5UX0tFWX1gLFxuICAgIENMT1NFRCAgICAgICAgIDogYGNsb3NlZCR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQUxFUlQgOiAnYWxlcnQnLFxuICAgIEZBREUgIDogJ2ZhZGUnLFxuICAgIElOICAgIDogJ2luJ1xuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNsYXNzIEFsZXJ0IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICBjbG9zZShlbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGxldCByb290RWxlbWVudCA9IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpXG4gICAgICBsZXQgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgICAgaWYgKGN1c3RvbUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgICAgbGV0IHBhcmVudCAgID0gZmFsc2VcblxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHBhcmVudCA9ICQoc2VsZWN0b3IpWzBdXG4gICAgICB9XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHBhcmVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChgLiR7Q2xhc3NOYW1lLkFMRVJUfWApWzBdXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJlbnRcbiAgICB9XG5cbiAgICBfdHJpZ2dlckNsb3NlRXZlbnQoZWxlbWVudCkge1xuICAgICAgbGV0IGNsb3NlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNMT1NFKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICAgIHJldHVybiBjbG9zZUV2ZW50XG4gICAgfVxuXG4gICAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgIGlmICghVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB8fFxuICAgICAgICAgICEkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgJChlbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICQucHJveHkodGhpcy5fZGVzdHJveUVsZW1lbnQsIHRoaXMsIGVsZW1lbnQpKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICB9XG5cbiAgICBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KVxuICAgICAgICAuZGV0YWNoKClcbiAgICAgICAgLnRyaWdnZXIoRXZlbnQuQ0xPU0VEKVxuICAgICAgICAucmVtb3ZlKClcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICRlbGVtZW50ID0gJCh0aGlzKVxuICAgICAgICBsZXQgZGF0YSAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBfaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oXG4gICAgRXZlbnQuQ0xJQ0tfREFUQV9BUEksXG4gICAgU2VsZWN0b3IuRElTTUlTUyxcbiAgICBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSlcbiAgKVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIEFsZXJ0XG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBCdXR0b24gPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2J1dHRvbidcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjAuMCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5idXR0b24nXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQUNUSVZFIDogJ2FjdGl2ZScsXG4gICAgQlVUVE9OIDogJ2J0bicsXG4gICAgRk9DVVMgIDogJ2ZvY3VzJ1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgREFUQV9UT0dHTEVfQ0FSUk9UIDogJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLFxuICAgIERBVEFfVE9HR0xFICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyxcbiAgICBJTlBVVCAgICAgICAgICAgICAgOiAnaW5wdXQnLFxuICAgIEFDVElWRSAgICAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgICBCVVRUT04gICAgICAgICAgICAgOiAnLmJ0bidcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIENMSUNLX0RBVEFfQVBJICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICAgIEZPQ1VTX0JMVVJfREFUQV9BUEkgOiBgZm9jdXMke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgYmx1ciR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBCdXR0b24ge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGxldCB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlXG4gICAgICBsZXQgcm9vdEVsZW1lbnQgICAgICAgID0gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KFxuICAgICAgICBTZWxlY3Rvci5EQVRBX1RPR0dMRVxuICAgICAgKVswXVxuXG4gICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGlucHV0ID0gJCh0aGlzLl9lbGVtZW50KS5maW5kKFNlbGVjdG9yLklOUFVUKVswXVxuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCAmJlxuICAgICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2VFdmVudCA9IGZhbHNlXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBhY3RpdmVFbGVtZW50ID0gJChyb290RWxlbWVudCkuZmluZChTZWxlY3Rvci5BQ1RJVkUpWzBdXG5cbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcignY2hhbmdlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLFxuICAgICAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBCdXR0b24odGhpcylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0XG5cbiAgICAgIGlmICghJChidXR0b24pLmhhc0NsYXNzKENsYXNzTmFtZS5CVVRUT04pKSB7XG4gICAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yLkJVVFRPTilcbiAgICAgIH1cblxuICAgICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKVxuICAgIH0pXG4gICAgLm9uKEV2ZW50LkZPQ1VTX0JMVVJfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IuQlVUVE9OKVswXVxuICAgICAgJChidXR0b24pLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5GT0NVUywgL15mb2N1cyhpbik/JC8udGVzdChldmVudC50eXBlKSlcbiAgICB9KVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBCdXR0b24uX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQnV0dG9uXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBCdXR0b24uX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIEJ1dHRvblxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IENvbGxhcHNlID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdjb2xsYXBzZSdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjAuMCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gNjAwXG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICB0b2dnbGUgOiB0cnVlLFxuICAgIHBhcmVudCA6ICcnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICB0b2dnbGUgOiAnYm9vbGVhbicsXG4gICAgcGFyZW50IDogJ3N0cmluZydcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIElOICAgICAgICAgOiAnaW4nLFxuICAgIENPTExBUFNFICAgOiAnY29sbGFwc2UnLFxuICAgIENPTExBUFNJTkcgOiAnY29sbGFwc2luZycsXG4gICAgQ09MTEFQU0VEICA6ICdjb2xsYXBzZWQnXG4gIH1cblxuICBjb25zdCBEaW1lbnNpb24gPSB7XG4gICAgV0lEVEggIDogJ3dpZHRoJyxcbiAgICBIRUlHSFQgOiAnaGVpZ2h0J1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgQUNUSVZFUyAgICAgOiAnLnBhbmVsID4gLmluLCAucGFuZWwgPiAuY29sbGFwc2luZycsXG4gICAgREFUQV9UT0dHTEUgOiAnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgQ29sbGFwc2Uge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gZWxlbWVudFxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9ICQubWFrZUFycmF5KCQoXG4gICAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIyR7ZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMke2VsZW1lbnQuaWR9XCJdYFxuICAgICAgKSlcblxuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuSU4pKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLklOKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGFjdGl2ZXNcbiAgICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICAgIGFjdGl2ZXMgPSAkLm1ha2VBcnJheSgkKFNlbGVjdG9yLkFDVElWRVMpKVxuICAgICAgICBpZiAoIWFjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgYWN0aXZlcyA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVylcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLCAnaGlkZScpXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgICAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVksIG51bGwpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICAgIGxldCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LlNIT1dOKVxuICAgICAgfVxuXG4gICAgICBpZiAoIVV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICAgIGxldCBzY3JvbGxTaXplICAgICAgICAgICA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgICAhJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuSU4pKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBkaW1lbnNpb24gICAgICAgPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuICAgICAgbGV0IG9mZnNldERpbWVuc2lvbiA9IGRpbWVuc2lvbiA9PT0gRGltZW5zaW9uLldJRFRIID9cbiAgICAgICAgJ29mZnNldFdpZHRoJyA6ICdvZmZzZXRIZWlnaHQnXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbb2Zmc2V0RGltZW5zaW9uXX1weGBcblxuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgICBsZXQgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgICBpZiAoIVV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICB9XG5cbiAgICBzZXRUcmFuc2l0aW9uaW5nKGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fcGFyZW50ICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpXG4gICAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBjb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICBfZ2V0RGltZW5zaW9uKCkge1xuICAgICAgbGV0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpXG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gICAgfVxuXG4gICAgX2dldFBhcmVudCgpIHtcbiAgICAgIGxldCBwYXJlbnQgICA9ICQodGhpcy5fY29uZmlnLnBhcmVudClbMF1cbiAgICAgIGxldCBzZWxlY3RvciA9XG4gICAgICAgIGBbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIiR7dGhpcy5fY29uZmlnLnBhcmVudH1cIl1gXG5cbiAgICAgICQocGFyZW50KS5maW5kKHNlbGVjdG9yKS5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhcbiAgICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgICAgW2VsZW1lbnRdXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwYXJlbnRcbiAgICB9XG5cbiAgICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLklOKVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcblxuICAgICAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICQodHJpZ2dlckFycmF5KVxuICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgICAgcmV0dXJuIHNlbGVjdG9yID8gJChzZWxlY3RvcilbMF0gOiBudWxsXG4gICAgfVxuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICAgIGxldCBkYXRhICAgID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSAkLmV4dGVuZChcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBEZWZhdWx0LFxuICAgICAgICAgICR0aGlzLmRhdGEoKSxcbiAgICAgICAgICB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcbiAgICAgICAgKVxuXG4gICAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHRhcmdldCA9IENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGxldCBkYXRhICAgPSAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSlcbiAgICBsZXQgY29uZmlnID0gZGF0YSA/ICd0b2dnbGUnIDogJCh0aGlzKS5kYXRhKClcblxuICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZylcbiAgfSlcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2VcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBDb2xsYXBzZVxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgRHJvcGRvd24gPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICDCoCAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gICAgSElEREVOICDCoCAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgIMKgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgIMKgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0sgICDCoCAgICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICAgIEtFWURPV05fREFUQV9BUEkgOiBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBCQUNLRFJPUCA6ICdkcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgRElTQUJMRUQgOiAnZGlzYWJsZWQnLFxuICAgIE9QRU4gICAgIDogJ29wZW4nXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBCQUNLRFJPUCAgICAgIDogJy5kcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgREFUQV9UT0dHTEUgICA6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gICAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gICAgUk9MRV9NRU5VICAgICA6ICdbcm9sZT1cIm1lbnVcIl0nLFxuICAgIFJPTEVfTElTVEJPWCAgOiAnW3JvbGU9XCJsaXN0Ym94XCJdJyxcbiAgICBOQVZCQVJfTkFWICAgIDogJy5uYXZiYXItbmF2JyxcbiAgICBWSVNJQkxFX0lURU1TIDogJ1tyb2xlPVwibWVudVwiXSBsaTpub3QoLmRpc2FibGVkKSBhLCAnXG4gICAgICAgICAgICAgICAgICArICdbcm9sZT1cImxpc3Rib3hcIl0gbGk6bm90KC5kaXNhYmxlZCkgYSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGxldCBwYXJlbnQgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgICAgbGV0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5PUEVOKVxuXG4gICAgICBEcm9wZG93bi5fY2xlYXJNZW51cygpXG5cbiAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAgKCEkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGgpKSB7XG5cbiAgICAgICAgLy8gaWYgbW9iaWxlIHdlIHVzZSBhIGJhY2tkcm9wIGJlY2F1c2UgY2xpY2sgZXZlbnRzIGRvbid0IGRlbGVnYXRlXG4gICAgICAgIGxldCBkcm9wZG93biAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTmFtZSA9IENsYXNzTmFtZS5CQUNLRFJPUFxuICAgICAgICAkKGRyb3Bkb3duKS5pbnNlcnRCZWZvcmUodGhpcylcbiAgICAgICAgJChkcm9wZG93bikub24oJ2NsaWNrJywgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gICAgICB9XG5cbiAgICAgIGxldCByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0IDogdGhpcyB9XG4gICAgICBsZXQgc2hvd0V2ZW50ICAgICA9ICQuRXZlbnQoRXZlbnQuU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZvY3VzKClcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuXG4gICAgICAkKHBhcmVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAkKHBhcmVudCkudHJpZ2dlcigkLkV2ZW50KEV2ZW50LlNIT1dOLCByZWxhdGVkVGFyZ2V0KSlcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgfVxuXG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLLCB0aGlzLnRvZ2dsZSlcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgKGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcykpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddLmNhbGwodGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC53aGljaCA9PT0gMykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGJhY2tkcm9wID0gJChTZWxlY3Rvci5CQUNLRFJPUClbMF1cbiAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJhY2tkcm9wKVxuICAgICAgfVxuXG4gICAgICBsZXQgdG9nZ2xlcyA9ICQubWFrZUFycmF5KCQoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZ2dsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHBhcmVudCAgICAgICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodG9nZ2xlc1tpXSlcbiAgICAgICAgbGV0IHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQgOiB0b2dnbGVzW2ldIH1cblxuICAgICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTikpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSAmJlxuICAgICAgICAgICAoJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgICAgJChwYXJlbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKVxuICAgICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnRcbiAgICAgIGxldCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcGFyZW50ID0gJChzZWxlY3RvcilbMF1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgICAgaWYgKCEvKDM4fDQwfDI3fDMyKS8udGVzdChldmVudC53aGljaCkgfHxcbiAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBwYXJlbnQgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgICAgbGV0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5PUEVOKVxuXG4gICAgICBpZiAoKCFpc0FjdGl2ZSAmJiBldmVudC53aGljaCAhPT0gMjcpIHx8XG4gICAgICAgICAgIChpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gMjcpKSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAyNykge1xuICAgICAgICAgIGxldCB0b2dnbGUgPSAkKHBhcmVudCkuZmluZChTZWxlY3Rvci5EQVRBX1RPR0dMRSlbMF1cbiAgICAgICAgICAkKHRvZ2dsZSkudHJpZ2dlcignZm9jdXMnKVxuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbGljaycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsZXQgaXRlbXMgPSAkLm1ha2VBcnJheSgkKFNlbGVjdG9yLlZJU0lCTEVfSVRFTVMpKVxuXG4gICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS5vZmZzZXRXaWR0aCB8fCBpdGVtLm9mZnNldEhlaWdodFxuICAgICAgfSlcblxuICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDM4ICYmIGluZGV4ID4gMCkgeyAvLyB1cFxuICAgICAgICBpbmRleC0tXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gNDAgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7IC8vIGRvd25cbiAgICAgICAgaW5kZXgrK1xuICAgICAgfVxuXG4gICAgICBpZiAoIX5pbmRleCkge1xuICAgICAgICBpbmRleCA9IDBcbiAgICAgIH1cblxuICAgICAgaXRlbXNbaW5kZXhdLmZvY3VzKClcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJChkb2N1bWVudClcbiAgICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsICBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAgIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5ST0xFX01FTlUsICAgIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gICAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLlJPTEVfTElTVEJPWCwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLl9jbGVhck1lbnVzKVxuICAgIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIERyb3Bkb3duLnByb3RvdHlwZS50b2dnbGUpXG4gICAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5GT1JNX0NISUxELCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gRHJvcGRvd25cblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1vZGFsID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgICAgICA9ICdtb2RhbCdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgICAgICA9ICc0LjAuMCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgICAgICA9ICdicy5tb2RhbCdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgICAgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OICAgICAgICAgID0gMzAwXG4gIGNvbnN0IEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGJhY2tkcm9wIDogdHJ1ZSxcbiAgICBrZXlib2FyZCA6IHRydWUsXG4gICAgZm9jdXMgICAgOiB0cnVlLFxuICAgIHNob3cgICAgIDogdHJ1ZVxuICB9XG5cbiAgY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gICAgYmFja2Ryb3AgOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAga2V5Ym9hcmQgOiAnYm9vbGVhbicsXG4gICAgZm9jdXMgICAgOiAnYm9vbGVhbicsXG4gICAgc2hvdyAgICAgOiAnYm9vbGVhbidcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIEhJREUgICDCoCAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gwqAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgwqAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gICAgU0hPV04gIMKgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBGT0NVU0lOICAgICAgICAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkUgICAgICAgICAgICA6IGByZXNpemUke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RJU01JU1MgICAgIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIEtFWURPV05fRElTTUlTUyAgIDogYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VVUF9ESVNNSVNTICAgOiBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgICBNT1VTRURPV05fRElTTUlTUyA6IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgU0NST0xMQkFSX01FQVNVUkVSIDogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgICBCQUNLRFJPUCAgICAgICAgICAgOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgIE9QRU4gICAgICAgICAgICAgICA6ICdtb2RhbC1vcGVuJyxcbiAgICBGQURFICAgICAgICAgICAgICAgOiAnZmFkZScsXG4gICAgSU4gICAgICAgICAgICAgICAgIDogJ2luJ1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgRElBTE9HICAgICAgICAgICAgIDogJy5tb2RhbC1kaWFsb2cnLFxuICAgIERBVEFfVE9HR0xFICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gICAgREFUQV9ESVNNSVNTICAgICAgIDogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gICAgRklYRURfQ09OVEVOVCAgICAgIDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJ1xuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNsYXNzIE1vZGFsIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gZWxlbWVudFxuICAgICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9ICQoZWxlbWVudCkuZmluZChTZWxlY3Rvci5ESUFMT0cpWzBdXG4gICAgICB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IGZhbHNlXG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gZmFsc2VcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZyA9IDBcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoICAgICAgPSAwXG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0XG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuXG4gICAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBsZXQgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTilcblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKFxuICAgICAgICBFdmVudC5DTElDS19ESVNNSVNTLFxuICAgICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAgICQucHJveHkodGhpcy5oaWRlLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQuTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRXZlbnQuTU9VU0VVUF9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGF0Ll9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcChcbiAgICAgICAgJC5wcm94eSh0aGlzLl9zaG93RWxlbWVudCwgdGhpcywgcmVsYXRlZFRhcmdldClcbiAgICAgIClcbiAgICB9XG5cbiAgICBoaWRlKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBsZXQgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcblxuICAgICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTilcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG4gICAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSkge1xuXG4gICAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICQucHJveHkodGhpcy5faGlkZU1vZGFsLCB0aGlzKSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hpZGVNb2RhbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgICAgJCh3aW5kb3cpLm9mZihFVkVOVF9LRVkpXG4gICAgICAkKGRvY3VtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkub2ZmKEVWRU5UX0tFWSlcblxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2lzU2hvd24gICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gbnVsbFxuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IG51bGxcbiAgICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSBudWxsXG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICBsZXQgdHJhbnNpdGlvbiA9IFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSkge1xuICAgICAgICAvLyBkb24ndCBtb3ZlIG1vZGFscyBkb20gcG9zaXRpb25cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICAgIH1cblxuICAgICAgbGV0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG5cbiAgICAgIGxldCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgJCh0aGlzLl9kaWFsb2cpXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCB0cmFuc2l0aW9uQ29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uQ29tcGxldGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgICAkKGRvY3VtZW50KVxuICAgICAgICAub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgICAub24oRXZlbnQuRk9DVVNJTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgICghJCh0aGlzLl9lbGVtZW50KS5oYXMoZXZlbnQudGFyZ2V0KS5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDI3KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgJC5wcm94eSh0aGlzLl9oYW5kbGVVcGRhdGUsIHRoaXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTilcbiAgICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsYmFyKClcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICAgIGxldCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkgP1xuICAgICAgICBDbGFzc05hbWUuRkFERSA6ICcnXG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICBsZXQgZG9BbmltYXRlID0gVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiBhbmltYXRlXG5cbiAgICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUuQkFDS0RST1BcblxuICAgICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKGFuaW1hdGUpXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0tfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChkb0FuaW1hdGUpIHtcbiAgICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENsYXNzTmFtZS5JTilcblxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvQW5pbWF0ZSkge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaylcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcblxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgICAgbGV0IGNhbGxiYWNrUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAgICAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpKSB7XG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBfaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICB9XG5cbiAgICBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgbGV0IGlzTW9kYWxPdmVyZmxvd2luZyA9XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHh+YFxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gICAgfVxuXG4gICAgX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgICAgbGV0IGZ1bGxXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICBpZiAoIWZ1bGxXaW5kb3dXaWR0aCkgeyAvLyB3b3JrYXJvdW5kIGZvciBtaXNzaW5nIHdpbmRvdy5pbm5lcldpZHRoIGluIElFOFxuICAgICAgICBsZXQgZG9jdW1lbnRFbGVtZW50UmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBmdWxsV2luZG93V2lkdGggPVxuICAgICAgICAgIGRvY3VtZW50RWxlbWVudFJlY3QucmlnaHQgLSBNYXRoLmFicyhkb2N1bWVudEVsZW1lbnRSZWN0LmxlZnQpXG4gICAgICB9XG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBmdWxsV2luZG93V2lkdGhcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgIH1cblxuICAgIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgICBsZXQgYm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgICAgJChTZWxlY3Rvci5GSVhFRF9DT05URU5UKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLFxuICAgICAgICAxMFxuICAgICAgKVxuXG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgfHwgJydcblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID1cbiAgICAgICAgICBgJHtib2R5UGFkZGluZyArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZ1xuICAgIH1cblxuICAgIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICAgIGxldCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KVxuICAgICAgbGV0IHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSAkLmV4dGVuZChcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBNb2RhbC5EZWZhdWx0LFxuICAgICAgICAgICQodGhpcykuZGF0YSgpLFxuICAgICAgICAgIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuICAgICAgICApXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuXG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldFxuICAgIGxldCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXVxuICAgIH1cblxuICAgIGxldCBjb25maWcgPSAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSkgP1xuICAgICAgJ3RvZ2dsZScgOiAkLmV4dGVuZCh7fSwgJCh0YXJnZXQpLmRhdGEoKSwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICBpZiAodGhpcy50YWdOYW1lID09PSAnQScpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBsZXQgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQuU0hPVywgKHNob3dFdmVudCkgPT4ge1xuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sICgpID0+IHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKVxuICB9KVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIE1vZGFsXG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsImltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMCk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFBvcG92ZXIgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ3BvcG92ZXInXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMucG9wb3ZlcidcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRGVmYXVsdCA9ICQuZXh0ZW5kKHt9LCBUb29sdGlwLkRlZmF1bHQsIHtcbiAgICBwbGFjZW1lbnQgOiAncmlnaHQnLFxuICAgIHRyaWdnZXIgICA6ICdjbGljaycsXG4gICAgY29udGVudCAgIDogJycsXG4gICAgdGVtcGxhdGUgIDogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nXG4gICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+J1xuICAgICAgICAgICAgICArICc8aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz4nXG4gICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nXG4gIH0pXG5cbiAgY29uc3QgRGVmYXVsdFR5cGUgPSAkLmV4dGVuZCh7fSwgVG9vbHRpcC5EZWZhdWx0VHlwZSwge1xuICAgIGNvbnRlbnQgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbiAgfSlcblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgRkFERSA6ICdmYWRlJyxcbiAgICBJTiAgOiAnaW4nXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBUSVRMRSAgIDogJy5wb3BvdmVyLXRpdGxlJyxcbiAgICBDT05URU5UIDogJy5wb3BvdmVyLWNvbnRlbnQnLFxuICAgIEFSUk9XICAgOiAnLnBvcG92ZXItYXJyb3cnXG4gIH1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBISURFICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICAgIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICAgIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICAgIEZPQ1VTSU4gICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gICAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VFTlRFUiA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgICBNT1VTRUxFQVZFIDogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgICAgcmV0dXJuIE5BTUVcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgICAgcmV0dXJuIERBVEFfS0VZXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICAgIHJldHVybiBFdmVudFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgICAgcmV0dXJuIEVWRU5UX0tFWVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgICB9XG5cblxuICAgIC8vIG92ZXJyaWRlc1xuXG4gICAgaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgfVxuXG4gICAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICAgIHJldHVybiAodGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXSlcbiAgICB9XG5cbiAgICBzZXRDb250ZW50KCkge1xuICAgICAgbGV0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuXG4gICAgICAvLyB3ZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTZWxlY3Rvci5USVRMRSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLkNPTlRFTlQpLCB0aGlzLl9nZXRDb250ZW50KCkpXG5cbiAgICAgICR0aXBcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLklOKVxuXG4gICAgICB0aGlzLmNsZWFudXBUZXRoZXIoKVxuICAgIH1cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpXG4gICAgICAgIHx8ICh0eXBlb2YgdGhpcy5jb25maWcuY29udGVudCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbnRlbnQuY2FsbCh0aGlzLmVsZW1lbnQpIDpcbiAgICAgICAgICAgICAgdGhpcy5jb25maWcuY29udGVudClcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rlc3Ryb3l8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgX2NvbmZpZylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFBvcG92ZXJcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIFBvcG92ZXJcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFNjcm9sbFNweSA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdzY3JvbGxzcHknXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjAuMCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnNjcm9sbHNweSdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgb2Zmc2V0IDogMTAsXG4gICAgbWV0aG9kIDogJ2F1dG8nLFxuICAgIHRhcmdldCA6ICcnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBvZmZzZXQgOiAnbnVtYmVyJyxcbiAgICBtZXRob2QgOiAnc3RyaW5nJyxcbiAgICB0YXJnZXQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIEFDVElWQVRFICAgICAgOiBgYWN0aXZhdGUke0VWRU5UX0tFWX1gLFxuICAgIFNDUk9MTCAgICAgICAgOiBgc2Nyb2xsJHtFVkVOVF9LRVl9YCxcbiAgICBMT0FEX0RBVEFfQVBJIDogYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgRFJPUERPV05fSVRFTSA6ICdkcm9wZG93bi1pdGVtJyxcbiAgICBEUk9QRE9XTl9NRU5VIDogJ2Ryb3Bkb3duLW1lbnUnLFxuICAgIE5BVl9MSU5LICAgICAgOiAnbmF2LWxpbmsnLFxuICAgIE5BViAgICAgICAgICAgOiAnbmF2JyxcbiAgICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZSdcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERBVEFfU1BZICAgICAgICA6ICdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nLFxuICAgIEFDVElWRSAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgICBMSVNUX0lURU0gICAgICAgOiAnLmxpc3QtaXRlbScsXG4gICAgTEkgICAgICAgICAgICAgIDogJ2xpJyxcbiAgICBMSV9EUk9QRE9XTiAgICAgOiAnbGkuZHJvcGRvd24nLFxuICAgIE5BVl9MSU5LUyAgICAgICA6ICcubmF2LWxpbmsnLFxuICAgIERST1BET1dOICAgICAgICA6ICcuZHJvcGRvd24nLFxuICAgIERST1BET1dOX0lURU1TICA6ICcuZHJvcGRvd24taXRlbScsXG4gICAgRFJPUERPV05fVE9HR0xFIDogJy5kcm9wZG93bi10b2dnbGUnXG4gIH1cblxuICBjb25zdCBPZmZzZXRNZXRob2QgPSB7XG4gICAgT0ZGU0VUICAgOiAnb2Zmc2V0JyxcbiAgICBQT1NJVElPTiA6ICdwb3NpdGlvbidcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBTY3JvbGxTcHkge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogZWxlbWVudFxuICAgICAgdGhpcy5fY29uZmlnICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLl9zZWxlY3RvciAgICAgID0gYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTZWxlY3Rvci5OQVZfTElOS1N9LGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKyBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLkRST1BET1dOX0lURU1TfWBcbiAgICAgIHRoaXMuX29mZnNldHMgICAgICAgPSBbXVxuICAgICAgdGhpcy5fdGFyZ2V0cyAgICAgICA9IFtdXG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IDBcblxuICAgICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vbihFdmVudC5TQ1JPTEwsICQucHJveHkodGhpcy5fcHJvY2VzcywgdGhpcykpXG5cbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICB0aGlzLl9wcm9jZXNzKClcbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRcbiAgICB9XG5cblxuICAgIC8vIHB1YmxpY1xuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgIGxldCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCAhPT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgP1xuICAgICAgICBPZmZzZXRNZXRob2QuUE9TSVRJT04gOiBPZmZzZXRNZXRob2QuT0ZGU0VUXG5cbiAgICAgIGxldCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgP1xuICAgICAgICBhdXRvTWV0aG9kIDogdGhpcy5fY29uZmlnLm1ldGhvZFxuXG4gICAgICBsZXQgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gT2Zmc2V0TWV0aG9kLlBPU0lUSU9OID9cbiAgICAgICAgdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOiAwXG5cbiAgICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG5cbiAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICAgIGxldCB0YXJnZXRzID0gJC5tYWtlQXJyYXkoJCh0aGlzLl9zZWxlY3RvcikpXG5cbiAgICAgIHRhcmdldHNcbiAgICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldCB0YXJnZXRcbiAgICAgICAgICBsZXQgdGFyZ2V0U2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICAgICAgIGlmICh0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgICAgICAgdGFyZ2V0ID0gJCh0YXJnZXRTZWxlY3RvcilbMF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGFyZ2V0ICYmICh0YXJnZXQub2Zmc2V0V2lkdGggfHwgdGFyZ2V0Lm9mZnNldEhlaWdodCkpIHtcbiAgICAgICAgICAgIC8vIHRvZG8gKGZhdCk6IHJlbW92ZSBza2V0Y2ggcmVsaWFuY2Ugb24galF1ZXJ5IHBvc2l0aW9uL29mZnNldFxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJCh0YXJnZXQpW29mZnNldE1ldGhvZF0oKS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgID0+IGl0ZW0pXG4gICAgICAgIC5zb3J0KChhLCBiKSAgICA9PiBhWzBdIC0gYlswXSlcbiAgICAgICAgLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9zZWxlY3RvciAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ICA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCBpZCA9ICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnKVxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgaWQgPSBVdGlsLmdldFVJRChOQU1FKVxuICAgICAgICAgICQoY29uZmlnLnRhcmdldCkuYXR0cignaWQnLCBpZClcbiAgICAgICAgfVxuICAgICAgICBjb25maWcudGFyZ2V0ID0gYCMke2lkfWBcbiAgICAgIH1cblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFkgOiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuICAgIH1cblxuICAgIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICApXG4gICAgfVxuXG4gICAgX3Byb2Nlc3MoKSB7XG4gICAgICBsZXQgc2Nyb2xsVG9wICAgID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICAgIGxldCBtYXhTY3JvbGwgICAgPSB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgICAgICsgc2Nyb2xsSGVpZ2h0XG4gICAgICAgIC0gdGhpcy5fc2Nyb2xsRWxlbWVudC5vZmZzZXRIZWlnaHRcblxuICAgICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXVxuICAgICAgICAgICAgJiYgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV1cbiAgICAgICAgICAgICYmICh0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgICB0aGlzLl9jbGVhcigpXG5cbiAgICAgIGxldCBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3Iuc3BsaXQoJywnKVxuICAgICAgcXVlcmllcyAgICAgPSBxdWVyaWVzLm1hcCgoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3NlbGVjdG9yfVtkYXRhLXRhcmdldD1cIiR7dGFyZ2V0fVwiXSxgICtcbiAgICAgICAgICAgICAgIGAke3NlbGVjdG9yfVtocmVmPVwiJHt0YXJnZXR9XCJdYFxuICAgICAgfSlcblxuICAgICAgbGV0ICRsaW5rID0gJChxdWVyaWVzLmpvaW4oJywnKSlcblxuICAgICAgaWYgKCRsaW5rLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgICAkbGluay5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKS5maW5kKFNlbGVjdG9yLkRST1BET1dOX1RPR0dMRSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRvZG8gKGZhdCkgdGhpcyBpcyBraW5kYSBzdXPigKZcbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgYWRkIGFjdGl2ZXMgdG8gdGVzdGVkIG5hdi1saW5rc1xuICAgICAgICAkbGluay5wYXJlbnRzKFNlbGVjdG9yLkxJKS5maW5kKFNlbGVjdG9yLk5BVl9MSU5LUykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS50cmlnZ2VyKEV2ZW50LkFDVElWQVRFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBfY2xlYXIoKSB7XG4gICAgICAkKHRoaXMuX3NlbGVjdG9yKS5maWx0ZXIoU2VsZWN0b3IuQUNUSVZFKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgfHwgbnVsbFxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAgIGxldCBzY3JvbGxTcHlzID0gJC5tYWtlQXJyYXkoJChTZWxlY3Rvci5EQVRBX1NQWSkpXG5cbiAgICBmb3IgKGxldCBpID0gc2Nyb2xsU3B5cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGxldCAkc3B5ID0gJChzY3JvbGxTcHlzW2ldKVxuICAgICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSlcbiAgICB9XG4gIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTY3JvbGxTcHlcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gU2Nyb2xsU3B5XG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb29sdGlwID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICd0b29sdGlwJ1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLnRvb2x0aXAnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwXG4gIGNvbnN0IENMQVNTX1BSRUZJWCAgICAgICAgPSAnYnMtdGV0aGVyJ1xuXG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgYW5pbWF0aW9uICAgOiB0cnVlLFxuICAgIHRlbXBsYXRlICAgIDogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICAgIHRyaWdnZXIgICAgIDogJ2hvdmVyIGZvY3VzJyxcbiAgICB0aXRsZSAgICAgICA6ICcnLFxuICAgIGRlbGF5ICAgICAgIDogMCxcbiAgICBodG1sICAgICAgICA6IGZhbHNlLFxuICAgIHNlbGVjdG9yICAgIDogZmFsc2UsXG4gICAgcGxhY2VtZW50ICAgOiAndG9wJyxcbiAgICBvZmZzZXQgICAgICA6ICcwIDAnLFxuICAgIGNvbnN0cmFpbnRzIDogW11cbiAgfVxuXG4gIGNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAgIGFuaW1hdGlvbiAgIDogJ2Jvb2xlYW4nLFxuICAgIHRlbXBsYXRlICAgIDogJ3N0cmluZycsXG4gICAgdGl0bGUgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlciAgICAgOiAnc3RyaW5nJyxcbiAgICBkZWxheSAgICAgICA6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWwgICAgICAgIDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHBsYWNlbWVudCAgIDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQgICAgICA6ICdzdHJpbmcnLFxuICAgIGNvbnN0cmFpbnRzIDogJ2FycmF5J1xuICB9XG5cbiAgY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgICBUT1AgICAgOiAnYm90dG9tIGNlbnRlcicsXG4gICAgUklHSFQgIDogJ21pZGRsZSBsZWZ0JyxcbiAgICBCT1RUT00gOiAndG9wIGNlbnRlcicsXG4gICAgTEVGVCAgIDogJ21pZGRsZSByaWdodCdcbiAgfVxuXG4gIGNvbnN0IEhvdmVyU3RhdGUgPSB7XG4gICAgSU4gIDogJ2luJyxcbiAgICBPVVQgOiAnb3V0J1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICAgIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICAgIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEZBREUgOiAnZmFkZScsXG4gICAgSU4gICA6ICdpbidcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIFRPT0xUSVAgICAgICAgOiAnLnRvb2x0aXAnLFxuICAgIFRPT0xUSVBfSU5ORVIgOiAnLnRvb2x0aXAtaW5uZXInXG4gIH1cblxuICBjb25zdCBUZXRoZXJDbGFzcyA9IHtcbiAgICBlbGVtZW50IDogZmFsc2UsXG4gICAgZW5hYmxlZCA6IGZhbHNlXG4gIH1cblxuICBjb25zdCBUcmlnZ2VyID0ge1xuICAgIEhPVkVSICA6ICdob3ZlcicsXG4gICAgRk9DVVMgIDogJ2ZvY3VzJyxcbiAgICBDTElDSyAgOiAnY2xpY2snLFxuICAgIE1BTlVBTCA6ICdtYW51YWwnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgVG9vbHRpcCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcblxuICAgICAgLy8gcHJpdmF0ZVxuICAgICAgdGhpcy5faXNFbmFibGVkICAgICAgPSB0cnVlXG4gICAgICB0aGlzLl90aW1lb3V0ICAgICAgICA9IDBcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgID0gJydcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgID0ge31cbiAgICAgIHRoaXMuX3RldGhlciAgICAgICAgID0gbnVsbFxuXG4gICAgICAvLyBwcm90ZWN0ZWRcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICAgIHRoaXMuY29uZmlnICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgICB0aGlzLnRpcCAgICAgPSBudWxsXG5cbiAgICAgIHRoaXMuX3NldExpc3RlbmVycygpXG5cbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgICByZXR1cm4gTkFNRVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgICByZXR1cm4gREFUQV9LRVlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgICAgcmV0dXJuIEV2ZW50XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgICByZXR1cm4gRVZFTlRfS0VZXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICBlbmFibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBsZXQgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICAgICAgbGV0IGNvbnRleHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICAgIClcbiAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLklOKSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICAgdGhpcy5jbGVhbnVwVGV0aGVyKClcblxuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAgICQodGhpcy50aXApLnJlbW92ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fdGltZW91dCAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgID0gbnVsbFxuICAgICAgdGhpcy5fdGV0aGVyICAgICAgICAgPSBudWxsXG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMuY29uZmlnICA9IG51bGxcbiAgICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgbGV0IHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuXG4gICAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgICBsZXQgaXNJblRoZURvbSA9ICQuY29udGFpbnMoXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgIHRoaXMuZWxlbWVudFxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpcCAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgICAgbGV0IHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgICAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGxhY2VtZW50ICA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KSA6XG4gICAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcblxuICAgICAgICAkKHRpcClcbiAgICAgICAgICAuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG5cbiAgICAgICAgdGhpcy5fdGV0aGVyID0gbmV3IFRldGhlcih7XG4gICAgICAgICAgYXR0YWNobWVudCxcbiAgICAgICAgICBlbGVtZW50ICAgICA6IHRpcCxcbiAgICAgICAgICB0YXJnZXQgICAgICA6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICBjbGFzc2VzICAgICA6IFRldGhlckNsYXNzLFxuICAgICAgICAgIGNsYXNzUHJlZml4IDogQ0xBU1NfUFJFRklYLFxuICAgICAgICAgIG9mZnNldCAgICAgIDogdGhpcy5jb25maWcub2Zmc2V0LFxuICAgICAgICAgIGNvbnN0cmFpbnRzIDogdGhpcy5jb25maWcuY29uc3RyYWludHNcbiAgICAgICAgfSlcblxuICAgICAgICBVdGlsLnJlZmxvdyh0aXApXG4gICAgICAgIHRoaXMuX3RldGhlci5wb3NpdGlvbigpXG5cbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5JTilcblxuICAgICAgICBsZXQgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgbGV0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICA9IG51bGxcblxuICAgICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pXG5cbiAgICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAgICQodGhpcy50aXApXG4gICAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRvb2x0aXAuX1RSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgbGV0IHRpcCAgICAgICA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgICBsZXQgaGlkZUV2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgICBsZXQgY29tcGxldGUgID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSG92ZXJTdGF0ZS5JTiAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcbiAgICAgICAgdGhpcy5jbGVhbnVwVGV0aGVyKClcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLklOKVxuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAgKCQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkpIHtcblxuICAgICAgICAkKHRpcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICAgIH1cblxuXG4gICAgLy8gcHJvdGVjdGVkXG5cbiAgICBpc1dpdGhDb250ZW50KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKVxuICAgIH1cblxuICAgIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gKHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF0pXG4gICAgfVxuXG4gICAgc2V0Q29udGVudCgpIHtcbiAgICAgIGxldCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcblxuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuVE9PTFRJUF9JTk5FUiksIHRoaXMuZ2V0VGl0bGUoKSlcblxuICAgICAgJHRpcFxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuSU4pXG5cbiAgICAgIHRoaXMuY2xlYW51cFRldGhlcigpXG4gICAgfVxuXG4gICAgc2V0RWxlbWVudENvbnRlbnQoJGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICAgIGxldCBodG1sID0gdGhpcy5jb25maWcuaHRtbFxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnb2JqZWN0JyAmJiAoY29udGVudC5ub2RlVHlwZSB8fCBjb250ZW50LmpxdWVyeSkpIHtcbiAgICAgICAgLy8gY29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICAgIGlmIChodG1sKSB7XG4gICAgICAgICAgaWYgKCEkKGNvbnRlbnQpLnBhcmVudCgpLmlzKCRlbGVtZW50KSkge1xuICAgICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKS5hcHBlbmQoY29udGVudClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnRbaHRtbCA/ICdodG1sJyA6ICd0ZXh0J10oY29udGVudClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIGxldCB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgICBpZiAoIXRpdGxlKSB7XG4gICAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICB0aGlzLmNvbmZpZy50aXRsZS5jYWxsKHRoaXMuZWxlbWVudCkgOlxuICAgICAgICAgIHRoaXMuY29uZmlnLnRpdGxlXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZVxuICAgIH1cblxuICAgIGNsZWFudXBUZXRoZXIoKSB7XG4gICAgICBpZiAodGhpcy5fdGV0aGVyKSB7XG4gICAgICAgIHRoaXMuX3RldGhlci5kZXN0cm95KClcblxuICAgICAgICAvLyBjbGVhbiB1cCBhZnRlciB0ZXRoZXIncyBqdW5rIGNsYXNzZXNcbiAgICAgICAgLy8gcmVtb3ZlIGFmdGVyIHRoZXkgZml4IGlzc3VlXG4gICAgICAgIC8vIChodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC90ZXRoZXIvaXNzdWVzLzM2KVxuICAgICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3ModGhpcy5fcmVtb3ZlVGV0aGVyQ2xhc3NlcylcbiAgICAgICAgJCh0aGlzLnRpcCkucmVtb3ZlQ2xhc3ModGhpcy5fcmVtb3ZlVGV0aGVyQ2xhc3NlcylcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gICAgfVxuXG4gICAgX3NldExpc3RlbmVycygpIHtcbiAgICAgIGxldCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKFxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgJC5wcm94eSh0aGlzLnRvZ2dsZSwgdGhpcylcbiAgICAgICAgICApXG5cbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICAgIGxldCBldmVudEluICA9IHRyaWdnZXIgPT09IFRyaWdnZXIuSE9WRVIgP1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDpcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTlxuICAgICAgICAgIGxldCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRyaWdnZXIuSE9WRVIgP1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDpcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICAgICQodGhpcy5lbGVtZW50KVxuICAgICAgICAgICAgLm9uKFxuICAgICAgICAgICAgICBldmVudEluLFxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAgICAgJC5wcm94eSh0aGlzLl9lbnRlciwgdGhpcylcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5vbihcbiAgICAgICAgICAgICAgZXZlbnRPdXQsXG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgICAkLnByb3h5KHRoaXMuX2xlYXZlLCB0aGlzKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSAkLmV4dGVuZCh7fSwgdGhpcy5jb25maWcsIHtcbiAgICAgICAgICB0cmlnZ2VyICA6ICdtYW51YWwnLFxuICAgICAgICAgIHNlbGVjdG9yIDogJydcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVtb3ZlVGV0aGVyQ2xhc3NlcyhpLCBjc3MpIHtcbiAgICAgIHJldHVybiAoKGNzcy5iYXNlVmFsIHx8IGNzcykubWF0Y2goXG4gICAgICAgIG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfS1cXFxcUytgLCAnZycpKSB8fCBbXVxuICAgICAgKS5qb2luKCcgJylcbiAgICB9XG5cbiAgICBfZml4VGl0bGUoKSB7XG4gICAgICBsZXQgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHxcbiAgICAgICAgICh0aXRsZVR5cGUgIT09ICdzdHJpbmcnKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkYXRhLW9yaWdpbmFsLXRpdGxlJyxcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICAgIGxldCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgXSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5JTikgfHxcbiAgICAgICAgIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLklOKSkge1xuICAgICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5JTlxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLklOXG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuSU4pIHtcbiAgICAgICAgICBjb250ZXh0LnNob3coKVxuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KVxuICAgIH1cblxuICAgIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgICAgbGV0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG5cbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICApXG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgXSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5PVVRcblxuICAgICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKVxuICAgIH1cblxuICAgIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgICAgZm9yIChsZXQgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5kYXRhKCksXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKVxuXG4gICAgICBpZiAoY29uZmlnLmRlbGF5ICYmIHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgICBzaG93IDogY29uZmlnLmRlbGF5LFxuICAgICAgICAgIGhpZGUgOiBjb25maWcuZGVsYXlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgICAgTkFNRSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICBsZXQgY29uZmlnID0ge31cblxuICAgICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmNvbmZpZykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5jb25maWdba2V5XSkge1xuICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgbGV0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/XG4gICAgICAgICAgY29uZmlnIDogbnVsbFxuXG4gICAgICAgIGlmICghZGF0YSAmJiAvZGVzdHJveXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb29sdGlwXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBUb29sdGlwXG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjApOiB1dGlsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBVdGlsID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBsZXQgdHJhbnNpdGlvbiA9IGZhbHNlXG5cbiAgY29uc3QgVHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICAgIFdlYmtpdFRyYW5zaXRpb24gOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbiAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBPVHJhbnNpdGlvbiAgICAgIDogJ29UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kJyxcbiAgICB0cmFuc2l0aW9uICAgICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gIH1cblxuICAvLyBzaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICByZXR1cm4gKHt9KS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16QS1aXSspLylbMV0udG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJpbmRUeXBlOiB0cmFuc2l0aW9uLmVuZCxcbiAgICAgIGRlbGVnYXRlVHlwZTogdHJhbnNpdGlvbi5lbmQsXG4gICAgICBoYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kVGVzdCgpIHtcbiAgICBpZiAod2luZG93LlFVbml0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib290c3RyYXAnKVxuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBUcmFuc2l0aW9uRW5kRXZlbnQpIHtcbiAgICAgIGlmIChlbC5zdHlsZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7IGVuZDogVHJhbnNpdGlvbkVuZEV2ZW50W25hbWVdIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZFRlc3QoKVxuXG4gICAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuXG4gICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBsZXQgVXRpbCA9IHtcblxuICAgIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcblxuICAgIGdldFVJRChwcmVmaXgpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKVxuICAgICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcbiAgICAgIHJldHVybiBwcmVmaXhcbiAgICB9LFxuXG4gICAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJ1xuICAgICAgICBzZWxlY3RvciA9IC9eI1thLXpdL2kudGVzdChzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGVjdG9yXG4gICAgfSxcblxuICAgIHJlZmxvdyhlbGVtZW50KSB7XG4gICAgICBuZXcgRnVuY3Rpb24oJ2JzJywgJ3JldHVybiBicycpKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KVxuICAgIH0sXG5cbiAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIodHJhbnNpdGlvbi5lbmQpXG4gICAgfSxcblxuICAgIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRyYW5zaXRpb24pXG4gICAgfSxcblxuICAgIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgICBpZiAoY29uZmlnVHlwZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgbGV0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgICBsZXQgdmFsdWUgICAgICAgICA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgICBsZXQgdmFsdWVUeXBlXG5cbiAgICAgICAgICBpZiAodmFsdWUgJiYgaXNFbGVtZW50KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gJ2VsZW1lbnQnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IHRvVHlwZSh2YWx1ZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xuICAgICAgICAgICAgICBgT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYCArXG4gICAgICAgICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KClcblxuICByZXR1cm4gVXRpbFxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxcbiIsImNsYXNzIFBlcnNvbiB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0LCBsYXN0KSB7XG4gICAgICB0aGlzLmZpcnN0ID0gZmlyc3Q7XG4gICAgICB0aGlzLmxhc3QgPSBsYXN0O1xuICB9XG5cbiAgZ2V0IGZpcnN0TmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpcnN0LnRpdGxlaXplKCk7XG4gIH1cblxuICBnZXQgbGFzdE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0LnRpdGxlaXplKCk7XG4gIH1cblxuICBnZXQgZnVsbE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lO1xuICB9XG59XG5leHBvcnQge1BlcnNvbn1cbiJdfQ==

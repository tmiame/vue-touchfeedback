'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {

  var vueTouchFeedback = {};

  var STATE_HOVER = 'is-touch';
  var STATE_CLICK = 'is-click';

  var CONFIG = {
    isIE: window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1,
    isTouch: typeof document.ontouchstart !== 'undefined',
    isPointer: typeof window.navigator.pointerEnabled !== 'undefined',
    isMSPoniter: typeof window.navigator.msPointerEnabled !== 'undefined',
    touch: {
      enter: 'touchstart',
      leave: 'touchend',
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    },
    pointer: {
      enter: 'pointerenter',
      leave: 'pointerleave',
      start: 'pointerdown',
      move: 'pointermove',
      end: 'pointerup'
    },
    msPointer: {
      enter: 'MSPointerOver',
      leave: 'MSPointerOut',
      start: 'MSPointerDown',
      move: 'MSPointerMove',
      end: 'MSPointerUp'
    },
    mouse: {
      enter: 'mouseenter',
      leave: 'mouseleave',
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    }
  };

  var POINTER_EVENT = {
    enter: CONFIG.isTouch ? CONFIG.touch.enter : CONFIG.isPointer ? CONFIG.pointer.enter : CONFIG.isMSPointer ? CONFIG.msPointer.enter : CONFIG.mouse.enter,
    leave: CONFIG.isTouch ? CONFIG.touch.leave : CONFIG.isPointer ? CONFIG.pointer.leave : CONFIG.isMSPointer ? CONFIG.msPointer.leave : CONFIG.mouse.leave,
    start: CONFIG.isTouch ? CONFIG.touch.start : CONFIG.isPointer ? CONFIG.pointer.start : CONFIG.isMSPointer ? CONFIG.msPointer.start : CONFIG.mouse.start,
    move: CONFIG.isTouch ? CONFIG.touch.move : CONFIG.isPointer ? CONFIG.pointer.move : CONFIG.isMSPointer ? CONFIG.msPointer.move : CONFIG.mouse.move,
    end: CONFIG.isTouch ? CONFIG.touch.end : CONFIG.isPointer ? CONFIG.pointer.end : CONFIG.isMSPointer ? CONFIG.msPointer.end : CONFIG.mouse.end
  };

  var TOUCH_EVENT = {
    TAP: false,

    touchAddClass: function touchAddClass(el) {
      return function (ev) {
        return el.classList.add(STATE_HOVER);
      };
    },
    tapedTouchStart: function tapedTouchStart(el) {
      var _this = this;

      return function (ev) {
        return _this.TAP = true;
      };
    },
    tapedTouchMove: function tapedTouchMove(el) {
      var _this2 = this;

      return function (ev) {
        if (_this2.TAP) _this2.TAP = false;
      };
    },
    tapedTouchEnd: function tapedTouchEnd(el) {
      var _this3 = this;

      return function (ev) {
        if (!_this3.TAP) {
          return;
        }
        el.classList.add(STATE_CLICK);
        setTimeout(function () {
          el.classList.remove(STATE_CLICK);
        }, 100);
      };
    },
    tapedTouchEndAnimation: function tapedTouchEndAnimation(el) {
      var _this4 = this;

      return function (ev) {
        if (!_this4.TAP) {
          return;
        }
        el.classList.add(STATE_CLICK);
      };
    },
    removeHover: function removeHover(el) {
      return function (ev) {
        return el.classList.remove(STATE_HOVER);
      };
    },
    removeClick: function removeClick(el) {
      return function (ev) {
        return el.classList.remove(STATE_CLICK);
      };
    },
    removeAll: function removeAll(el) {
      return function (ev) {
        if (el.classList.contains(STATE_HOVER)) {
          el.classList.remove(STATE_HOVER);
        }
        if (el.classList.contains(STATE_CLICK)) {
          el.classList.remove(STATE_CLICK);
        }
      };
    }
  };

  vueTouchFeedback.install = function (Vue) {
    Vue.directive('touchfeedback', {
      bind: function bind(el, binding) {
        if (binding.arg && binding.arg !== 'animation') {
          console.warn('[vue-touchfeedback] arg name error');
        }

        if (binding.arg === 'animation') {
          if (binding.modifiers.hover) {
            el.addEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false);
            el.addEventListener('webkitAnimationEnd', TOUCH_EVENT.removeHover(el), false);
            el.addEventListener('MSAnimationEnd', TOUCH_EVENT.removeHover(el), false);
            el.addEventListener('oanimationend', TOUCH_EVENT.removeHover(el), false);
            el.addEventListener('animationend', TOUCH_EVENT.removeHover(el), false);
          }
          if (binding.modifiers.click) {
            el.addEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false);
            el.addEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false);
            el.addEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEndAnimation(el), false);
            el.addEventListener('webkitAnimationEnd', TOUCH_EVENT.removeClick(el), false);
            el.addEventListener('MSAnimationEnd', TOUCH_EVENT.removeClick(el), false);
            el.addEventListener('oanimationend', TOUCH_EVENT.removeClick(el), false);
            el.addEventListener('animationend', TOUCH_EVENT.removeClick(el), false);
          }
        } else {
          el.addEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false);
          el.addEventListener(POINTER_EVENT.leave, TOUCH_EVENT.removeHover(el), false);

          el.addEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false);
          el.addEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false);
          el.addEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEnd(el), false);
        }
      },
      unbind: function unbind(el, binding) {
        if (binding.arg === 'animation') {
          if (binding.modifiers.hover) {
            el.removeEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false);
            el.removeEventListener('webkitAnimationEnd', TOUCH_EVENT.removeHover(el), false);
            el.removeEventListener('MSAnimationEnd', TOUCH_EVENT.removeHover(el), false);
            el.removeEventListener('oanimationend', TOUCH_EVENT.removeHover(el), false);
            el.removeEventListener('animationend', TOUCH_EVENT.removeHover(el), false);
          }
          if (binding.modifiers.click) {
            el.removeEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false);
            el.removeEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false);
            el.removeEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEndAnimation(el), false);
            el.removeEventListener('webkitAnimationEnd', TOUCH_EVENT.removeClick(el), false);
            el.removeEventListener('MSAnimationEnd', TOUCH_EVENT.removeClick(el), false);
            el.removeEventListener('oanimationend', TOUCH_EVENT.removeClick(el), false);
            el.removeEventListener('animationend', TOUCH_EVENT.removeClick(el), false);
          }
        } else {
          el.removeEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false);
          el.removeEventListener(POINTER_EVENT.leave, TOUCH_EVENT.removeHover(el), false);

          el.removeEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false);
          el.removeEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false);
          el.removeEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEnd(el), false);
        }
      }
    });
  };

  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object') {
    module.exports = vueTouchFeedback;
  } else if (typeof define == 'function' && define.amd) {
    define([], function () {
      return vueTouchFeedback;
    });
  } else if (window.Vue) {
    window.VueTouchFeedback = vueTouchFeedback;
    Vue.use(vueTouchFeedback);
  }
})();

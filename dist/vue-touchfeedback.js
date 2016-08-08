'use strict';

;(function () {

  var vueTouchFeedback = {};
  var STATE_HOVER = 'is-touch';
  var STATE_CLICK = 'is-click';

  /*
   * 初期設定 config
   */
  var conf = {
    isIE: window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1,
    isTouch: typeof document.ontouchstart !== 'undefined',
    isPointer: typeof window.navigator.pointerEnabled !== 'undefined',
    isMSPoniter: typeof window.navigator.msPointerEnabled !== 'undefined',
    // touch
    touch: {
      enter: 'touchstart',
      leave: 'touchend',
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    },
    // pointer
    pointer: {
      enter: 'pointerenter',
      leave: 'pointerleave',
      start: 'pointerdown',
      move: 'pointermove',
      end: 'pointerup'
    },
    // pointer
    msPointer: {
      enter: 'MSPointerOver',
      leave: 'MSPointerOut',
      start: 'MSPointerDown',
      move: 'MSPointerMove',
      end: 'MSPointerUp'
    },
    // mouse
    mouse: {
      enter: 'mouseenter',
      leave: 'mouseleave',
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    }
  };

  var eventPointer = {
    enter: conf.isTouch ? conf.touch.enter : conf.isPointer ? conf.pointer.enter : conf.isMSPointer ? conf.msPointer.enter : conf.mouse.enter,
    leave: conf.isTouch ? conf.touch.leave : conf.isPointer ? conf.pointer.leave : conf.isMSPointer ? conf.msPointer.leave : conf.mouse.leave,
    start: conf.isTouch ? conf.touch.start : conf.isPointer ? conf.pointer.start : conf.isMSPointer ? conf.msPointer.start : conf.mouse.start,
    move: conf.isTouch ? conf.touch.move : conf.isPointer ? conf.pointer.move : conf.isMSPointer ? conf.msPointer.move : conf.mouse.move,
    end: conf.isTouch ? conf.touch.end : conf.isPointer ? conf.pointer.end : conf.isMSPointer ? conf.msPointer.end : conf.mouse.end
  };

  vueTouchFeedback.install = function (Vue) {
    Vue.directive('touchfeedback', {
      priority: Vue.directive('on').priority,
      TAP: false,

      /**
       * タップ時に発火するイベント
       */
      touchAddClass: function touchAddClass(e) {
        this.classList.add(STATE_HOVER);
      },


      /**
       * タップイベントに対応していないデバイスで
       * クリック時に発火するイベント
       */
      tapedTouchStart: function tapedTouchStart(e) {
        this.TAP = true;
      },
      tapedTouchMove: function tapedTouchMove(e) {
        if (this.TAP) this.TAP = false;
      },
      tapedTouchEnd: function tapedTouchEnd(e) {
        var _this = this;

        if (!this.TAP) {
          return;
        }
        this.classList.add(STATE_CLICK);
        setTimeout(function () {
          _this.classList.remove(STATE_CLICK);
        }, 100);
      },
      tapedTouchEndAnimation: function tapedTouchEndAnimation(e) {
        if (!this.TAP) {
          return;
        }
        this.classList.add(STATE_CLICK);
      },


      // remove
      removeHover: function removeHover() {
        this.classList.remove(STATE_HOVER);
      },
      removeClick: function removeClick() {
        this.classList.remove(STATE_CLICK);
      },
      removeAll: function removeAll() {
        if (this.el.classList.contains(STATE_HOVER)) {
          this.el.classList.remove(STATE_HOVER);
        }
        if (this.el.classList.contains(STATE_CLICK)) {
          this.el.classList.remove(STATE_CLICK);
        }
      },
      bind: function bind() {
        if (this.arg && this.arg !== 'animation') {
          console.warn('[vue-touchfeedback] arg error');
        }

        if (this.arg === 'animation') {
          if (this.modifiers.hover) {
            this.el.addEventListener(eventPointer.enter, this.touchAddClass, false);
            this.el.addEventListener('webkitAnimationEnd', this.removeHover, false);
            this.el.addEventListener('MSAnimationEnd', this.removeHover, false);
            this.el.addEventListener('oanimationend', this.removeHover, false);
            this.el.addEventListener('animationend', this.removeHover, false);
          }
          if (this.modifiers.click) {
            this.el.addEventListener(eventPointer.start, this.tapedTouchStart, false);
            this.el.addEventListener(eventPointer.move, this.tapedTouchMove, false);
            this.el.addEventListener(eventPointer.end, this.tapedTouchEndAnimation, false);
            this.el.addEventListener('webkitAnimationEnd', this.removeClick, false);
            this.el.addEventListener('MSAnimationEnd', this.removeClick, false);
            this.el.addEventListener('oanimationend', this.removeClick, false);
            this.el.addEventListener('animationend', this.removeClick, false);
          }
        } else {
          // Hover
          this.el.addEventListener(eventPointer.enter, this.touchAddClass, false);
          this.el.addEventListener(eventPointer.leave, this.removeHover, false);
          // Click
          this.el.addEventListener(eventPointer.start, this.tapedTouchStart, false);
          this.el.addEventListener(eventPointer.move, this.tapedTouchMove, false);
          this.el.addEventListener(eventPointer.end, this.tapedTouchEnd, false);
        }
      },
      unbind: function unbind() {
        this.removeAll();
        if (this.arg === 'animation') {
          if (this.modifiers.hover) {
            this.el.removeEventListener(eventPointer.enter, this.touchAddClass, false);
            this.el.removeEventListener('webkitAnimationEnd', this.removeHover, false);
            this.el.removeEventListener('MSAnimationEnd', this.removeHover, false);
            this.el.removeEventListener('oanimationend', this.removeHover, false);
            this.el.removeEventListener('animationend', this.removeHover, false);
          }
          if (this.modifiers.click) {
            this.el.removeEventListener(eventPointer.start, this.tapedTouchStart, false);
            this.el.removeEventListener(eventPointer.move, this.tapedTouchMove, false);
            this.el.removeEventListener(eventPointer.end, this.tapedTouchEndAnimation, false);
            this.el.removeEventListener('webkitAnimationEnd', this.removeClick, false);
            this.el.removeEventListener('MSAnimationEnd', this.removeClick, false);
            this.el.removeEventListener('oanimationend', this.removeClick, false);
            this.el.removeEventListener('animationend', this.removeClick, false);
          }
        } else {
          // Hover
          this.el.removeEventListener(eventPointer.enter, this.touchAddClass, false);
          this.el.removeEventListener(eventPointer.leave, this.removeHover, false);
          // Click
          this.el.removeEventListener(eventPointer.start, this.tapedTouchStart, false);
          this.el.removeEventListener(eventPointer.move, this.tapedTouchMove, false);
          this.el.removeEventListener(eventPointer.end, this.tapedTouchEnd, false);
        }
      }
    });
  };

  module.exports = vueTouchFeedback;
})();

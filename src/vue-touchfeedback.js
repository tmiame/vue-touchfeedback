/*!
 * vue-touchfeedback.js
 * (c) 2016 tmiame
 * Released under the MIT License.
 */
;(function () {

  const vueTouchFeedback = {}

  const STATE_HOVER = 'is-touch'
  const STATE_CLICK = 'is-click'

  const CONFIG = {
    isIE: (window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1),
    isTouch: (typeof document.ontouchstart !== 'undefined'),
    isPointer: (typeof window.navigator.pointerEnabled !== 'undefined'),
    isMSPoniter: (typeof window.navigator.msPointerEnabled !== 'undefined'),
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
  }

  const POINTER_EVENT = {
    enter: (CONFIG.isTouch) ? CONFIG.touch.enter : (CONFIG.isPointer) ? CONFIG.pointer.enter : (CONFIG.isMSPointer) ? CONFIG.msPointer.enter : CONFIG.mouse.enter,
    leave: (CONFIG.isTouch) ? CONFIG.touch.leave : (CONFIG.isPointer) ? CONFIG.pointer.leave : (CONFIG.isMSPointer) ? CONFIG.msPointer.leave : CONFIG.mouse.leave,
    start: (CONFIG.isTouch) ? CONFIG.touch.start : (CONFIG.isPointer) ? CONFIG.pointer.start : (CONFIG.isMSPointer) ? CONFIG.msPointer.start : CONFIG.mouse.start,
    move: (CONFIG.isTouch) ? CONFIG.touch.move : (CONFIG.isPointer) ? CONFIG.pointer.move : (CONFIG.isMSPointer) ? CONFIG.msPointer.move : CONFIG.mouse.move,
    end: (CONFIG.isTouch) ? CONFIG.touch.end : (CONFIG.isPointer) ? CONFIG.pointer.end : (CONFIG.isMSPointer) ? CONFIG.msPointer.end : CONFIG.mouse.end
  }

  const TOUCH_EVENT = {
    TAP: false,

    touchAddClass(el) {
      return (ev) => el.classList.add(STATE_HOVER)
    },

    tapedTouchStart(el) {
      return (ev) => this.TAP = true
    },
    tapedTouchMove(el) {
      return (ev) => {
        if (this.TAP) this.TAP = false
      }
    },
    tapedTouchEnd(el) {
      return (ev) => {
        if (!this.TAP) {
          return
        }
        el.classList.add(STATE_CLICK)
        setTimeout(() => {
          el.classList.remove(STATE_CLICK)
        }, 100)
      }
    },
    tapedTouchEndAnimation(el) {
      return (ev) => {
        if (!this.TAP) {
          return
        }
        el.classList.add(STATE_CLICK)
      }
    },

    // remove
    removeHover(el) {
      return (ev) => el.classList.remove(STATE_HOVER)
    },
    removeClick(el) {
      return (ev) => el.classList.remove(STATE_CLICK)
    },
    removeAll(el) {
      return (ev) => {
        if (el.classList.contains(STATE_HOVER)) {
          el.classList.remove(STATE_HOVER)
        }
        if (el.classList.contains(STATE_CLICK)) {
          el.classList.remove(STATE_CLICK)
        }
      }
    }
  }


  vueTouchFeedback.install = (Vue) => {
    Vue.directive('touchfeedback', {
      bind(el, binding) {
        if ((binding.arg && binding.arg !== 'animation')) {
          console.warn('[vue-touchfeedback] arg name error')
        }

        if (binding.arg === 'animation') {
          if (binding.modifiers.hover) {
            el.addEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false)
            el.addEventListener('webkitAnimationEnd', TOUCH_EVENT.removeHover(el), false)
            el.addEventListener('MSAnimationEnd', TOUCH_EVENT.removeHover(el), false)
            el.addEventListener('oanimationend', TOUCH_EVENT.removeHover(el), false)
            el.addEventListener('animationend', TOUCH_EVENT.removeHover(el), false)
          }
          if (binding.modifiers.click) {
            el.addEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false)
            el.addEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false)
            el.addEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEndAnimation(el), false)
            el.addEventListener('webkitAnimationEnd', TOUCH_EVENT.removeClick(el), false)
            el.addEventListener('MSAnimationEnd', TOUCH_EVENT.removeClick(el), false)
            el.addEventListener('oanimationend', TOUCH_EVENT.removeClick(el), false)
            el.addEventListener('animationend', TOUCH_EVENT.removeClick(el), false)
          }
        } else {
          // Hover
          el.addEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false)
          el.addEventListener(POINTER_EVENT.leave, TOUCH_EVENT.removeHover(el), false)
          // Click
          el.addEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false)
          el.addEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false)
          el.addEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEnd(el), false)
        }
      },

      unbind(el, binding) {
        // this.removeAll()
        if (binding.arg === 'animation') {
          if (binding.modifiers.hover) {
            el.removeEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false)
            el.removeEventListener('webkitAnimationEnd', TOUCH_EVENT.removeHover(el), false)
            el.removeEventListener('MSAnimationEnd', TOUCH_EVENT.removeHover(el), false)
            el.removeEventListener('oanimationend', TOUCH_EVENT.removeHover(el), false)
            el.removeEventListener('animationend', TOUCH_EVENT.removeHover(el), false)
          }
          if (binding.modifiers.click) {
            el.removeEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false)
            el.removeEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false)
            el.removeEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEndAnimation(el), false)
            el.removeEventListener('webkitAnimationEnd', TOUCH_EVENT.removeClick(el), false)
            el.removeEventListener('MSAnimationEnd', TOUCH_EVENT.removeClick(el), false)
            el.removeEventListener('oanimationend', TOUCH_EVENT.removeClick(el), false)
            el.removeEventListener('animationend', TOUCH_EVENT.removeClick(el), false)
          }
        } else {
          // Hover
          el.removeEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false)
          el.removeEventListener(POINTER_EVENT.leave, TOUCH_EVENT.removeHover(el), false)
          // Click
          el.removeEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false)
          el.removeEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false)
          el.removeEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEnd(el), false)
        }
      }
    })
  }

  if (typeof exports == 'object') {
    module.exports = vueTouchFeedback
  } else if (typeof define == 'function' && define.amd) {
    define([], function(){ return vueTouchFeedback })
  } else if (window.Vue) {
    window.VueTouchFeedback = vueTouchFeedback
    Vue.use(vueTouchFeedback)
  }

})()

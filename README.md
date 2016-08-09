# vue-touchfeedback

> Touch Feedback for Vue.js

## Demo

https://tmiame.github.io/vue-touchfeedback/example/index.html


## What?

# :point_right::iphone::computer::bangbang: Touch & Mouse & Pointer

___

### Basic

```html
<div v-touchfeedback></div>
```

__Touch the element__   
When the pointer enters the element. Element add `.is-touch` class
```html
<div class="is-touch" v-touchfeedback></div>
```

__Click the element__   
When the pointer click the element. Element add `.is-click` class
```html
<div class="is-touch is-click" v-touchfeedback></div>
```

__Away the element__   
When the pointer away from the element. Element remove `.is-touch` class
```html
<div class="is-click" v-touchfeedback></div>
```

__Remove after the click__  
Element remove `.is-click` class
```html
<div class="" v-touchfeedback></div>
```

__Style__   
```scss
div {
  background-color: white;
  &.is-touch {
    background-color: gray;
  }
  &.is-click {
    background-color: blue;
  }
}
```

__Live example on CodePen__   
https://codepen.io/tmiame/pen/yJQkvA

___

### Animation ~ hover

```html
<div v-touchfeedback:animation.hover></div>
```

__Style__   
```css
div {
  &.is-touch {
    background-color: red;
    animation: HOVER 1s linear;
  }
}
@keyframes HOVER {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
```

__Touch the element__   
When the pointer enters the element. Element add `.is-touch` class
```html
<div class="is-touch" v-touchfeedback></div>
```

__After the animation end__   
Element remove `.is-touch` class
```html
<div class="" v-touchfeedback></div>
```

__Live example on CodePen__   
https://codepen.io/tmiame/pen/BzGrbq

___

## Install

__npm__(https://www.npmjs.com/package/vue-touchfeedback)

```
npm install vue-touchfeedback
```

or   

[Download File](https://tmiame.github.io/vue-touchfeedback/dist/vue-touchfeedback.js)

```html
<script src="vue.js"></script>
<script src="vue-touchfeedback.js"></script>
```


## Usage

__CommonJS__

```js
var VueTouchFeedback = require('vue-touchfeedback')
Vue.use(VueTouchFeedback)
```

__Direct include__

You can also directly include it with a `<script>` tag when you have Vue already included globally. It will automatically install itself, and will add a global VueTouchFeedback.

## License

[MIT](http://opensource.org/licenses/MIT) © 2016 [tmiame](https://tmiame.com).

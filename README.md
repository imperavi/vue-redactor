# Redactor Vue.js Component

Vue-redactor helps [Redactor](https://imperavi.com/redactor/) to work as a Vue.js component. The Redactor Vue component is under MIT license. 
However, to use this component, you should purchase a Redactor license. 

Please see [the buying page](https://imperavi.com/redactor/buy/) and [License Agreement](https://imperavi.com/redactor/license/).

## Compatibility

- Vue.js 2.x

## Intialization

### One Way Binding

Import

```html
import '/your-redactor-dist-path/redactor.min.js';
import './vue-redactor.js';
```

Component

```html
<div id="app">
    <Redactor v-model="content" :config="configOptions"></Redactor>
    {{ content }}
</div>
```

App

```js
new Vue({
    el: '#app',
    data() {
        return {
            content: '<h1>Hello and welcome</h1>',
            configOptions: {}
        }
    }
});
```

### Two Way Binding

Import

```html
import '/your-redactor-dist-path/redactor.min.js';
import './vue-redactor.js';
```

Component

```html
<div id="app">
    <Redactor v-model="content" :config="configOptions"></Redactor>
    <textarea v-model="content"></textarea>
</div>
```

App

```js
new Vue({
    el: '#app',
    data() {
        return {
            content: '<h1>Hello and welcome</h1>',
            configOptions: {}
        }
    }
});
```

### Call with options

```js
new Vue({
    el: '#app',
    data() {
        return {
            content: '<h1>Hello and welcome</h1>',
            configOptions: {
                plugins: ['table']
            }
        }
    }
});
```

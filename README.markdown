Stand-alone, CommonJS compatible library to aid CSS operations.

Install
=======
From NPM:
```
$ npm install cssutils
```

Or, from Github:
```
$ curl https://github.com/azer/cssutils/raw/master/lib/cssutils.js -o cssutils.js
```

Usage
=====
On a CommonJS compliant environment (JSBuild, Browserify, RequireJS etc.)

```javascript
> var cssutils = require('cssutils');
> cssutils.prop(element, 'border-bottom-width');
2px
> cssutils.prop(element, 'border-bottom-width', '5px');
```

On a classic browser environment:

```html
<script src="cssutils.js"></script>
```
```javascript
> cssutils.toggleClass(element, 'foobar'); 
```

Available Methods
=================
* addClass
* apply
* getClass
* hasClass
* prop
* removeClass
* replaceClass
* setClass
* toggleClass

To Implement
============
* height
* offset
* position
* scrollLeft
* scrollTop
* size
* width

Development
===========
status: under development

todo:

  * Code tests
  * Document the API

$.fn.layout()
=============

A simple layout engine which can be used to build e.g. the UI of web and mobile apps.

Example
-------

JS:

```JavaScript
$(".managed-layout").layout()
```

HTML:

```html
<div class="managed-layout" layout="vertical">
    <div height="50px">
        Has a height of 50px
    </div>
    <div height="*" layout="horizontal">
        <div width="100px">This DIV is 100px wide</div>
        <div width="50%">
            This DIV has a width of 50% of the space which
            remains after consuming all absolutely (px) sized
            DIVs.
        </div>
        <div width="*">
            Takes up the remaining space.
        </div>
        <div width="10%">
        
        </div>
    </div>
</div>
```

Attributes
----------

### layout = `vertical` | `horizontal`

### width = `<NUM>px` | `<NUM>%` | `*`

### height = `<NUM>px` | `<NUM>%` | `*`

Configuration
-------------

### $.fn.layout.defaults.prefix

Sets a prefix for the attributes introduced by this plugin (`layout`, `width` and `height`).

FAQ
---

tbd.
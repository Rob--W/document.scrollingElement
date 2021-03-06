# `document.scrollingElement`

A polyfill for [`document.scrollingElement` as defined in the CSSOM specification](http://dev.w3.org/csswg/cssom-view/#dom-document-scrollingelement).

## Installation

In an HTML document:

```html
<script src="scrollingelement.js"></script>
```

It’s recommended to place this right before the closing `</body>` tag.

The polyfill can be used in `frameset` HTML documents (in that case, place the `<script>` in the `<head>`) or in XML documents as well.

## Browser support

The polyfill has been tested in the following browsers:

* Chrome
* Firefox 3.5+
* Internet Explorer 8+ (but [should work even in older versions](https://github.com/mathiasbynens/document.scrollingElement/issues/4))
* Opera 11.64+
* Safari 8+ (but [should work even in Safari 4](https://github.com/mathiasbynens/document.scrollingElement/issues/5))

## Acknowledgements

Thanks to [Diego Perini](https://github.com/dperini) ([@diegoperini](https://twitter.com/diegoperini)) for [his `getScrollingElement` implementation](https://gist.github.com/dperini/ac3d921d6a08f10fd10e), and for allowing me to re-use it as part of this polyfill.

Thanks to [Simon Pieters](https://simon.html5.org/) ([@zcorpan](https://twitter.com/zcorpan)) for reviewing the code.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

This project is available under the [MIT](https://mths.be/mit) license.

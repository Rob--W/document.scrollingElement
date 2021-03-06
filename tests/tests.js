(function(root) {
	'use strict';

	var frameDoc = document.getElementsByTagName('iframe')[0].contentDocument;
	var isStandardsMode = /^CSS1/.test(document.compatMode);
	var isQuirksMode = !isStandardsMode;
	// Note: we cannot *really* test standards mode, as WebKit & Blink violate the
	// spec and return `BODY` anyway, and our polyfill is supposed to mimic that.
	if (isStandardsMode) {
		test('In standards mode in a non-frameset document, the scrolling element is supposed to be `HTML`', function() {
			ok(
				/HTML|BODY/.test(document.scrollingElement.tagName),
				'In standards mode in a non-frameset document, the scrolling element is supposed to be `HTML`, but we’ll accept `BODY` too because that’s what WebKit/Blink use. Actual result: ' + document.scrollingElement.tagName
			);
		});
		test('In standards mode in a frameset document, the scrolling element is supposed to be `HTML`', function() {
			ok(
				frameDoc.scrollingElement === frameDoc.documentElement ||
				frameDoc.scrollingElement === null,
				'[flaky test; retry as needed] In standards mode in a frameset document, the scrolling element is supposed to be `HTML`, but we’ll accept `null` too because that’s what it should be in WebKit/Blink. Actual result: ' + frameDoc.scrollingElement
			);
		});
	}
	if (isQuirksMode) {
		test('In quirks mode in a non-frameset document, the scrolling element is `BODY`', function() {
			strictEqual(
				document.scrollingElement,
				document.body,
				'In quirks mode in a non-frameset document, the scrolling element is `BODY`'
			);
		});
		test('In quirks mode in a frameset document, the scrolling element is `null`', function() {
			strictEqual(
				frameDoc.scrollingElement,
				null,
				'[flaky test; retry as needed] In quirks mode in a frameset document, the scrolling element is `null`'
			);
		});
	}

}(this));

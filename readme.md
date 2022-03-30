# eleventy-plugin-html-validate

A simple plugin that runs on the `eleventy.after` event and validates all the HTML files that were built.

Use:

```js
// In your .eleventy.js
const 11tyHTMLValidate = require('eleventy-plugin-html-validate');

module.exports = function (eleventyConfig) {
  eleventyConfig.on('eleventy.after', 11tyHTMLValidate);
}
```

Powered by [html-validator](https://www.npmjs.com/package/html-validator).

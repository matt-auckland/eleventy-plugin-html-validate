# eleventy-plugin-html-validate

A simple plugin that runs on the `eleventy.after` event and validates all the HTML files that were built.

Use:

```js
// In your .eleventy.js
const eleventyHTMLValidate = require('eleventy-plugin-html-validate');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyHTMLValidate);
}
```

Powered by [html-validator](https://www.npmjs.com/package/html-validator).

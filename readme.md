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

Warning: I have no idea which versions of Eleventy this works on, when I figure it out I'll make a note here.

Powered by [html-validator](https://www.npmjs.com/package/html-validator).

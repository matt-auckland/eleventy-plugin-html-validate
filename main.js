const htmlValidator = require('html-validator')
const fs = require('fs');

module.exports = function registerValidator(eleventyConfig, config) {
  eleventyConfig.on('eleventy.after', validateHTMLFiles);
}

async function validateHTMLFiles(11tyOutput) {
  const htmlFilePaths = 11tyOutput.results.map(r => r.outputPath)
    .filter(path => path.includes(/.html$/));

  let everythingPassed = true;

  // load files ahead of time
  htmlFilePaths.forEach(async filePath => {
    if (fs.existsSync(filePath)) {
      const options = {
        format: 'text',
        data: fs.readFileSync(filePath, 'utf8')
      }

      try {
        const result = await htmlValidator(options)
        const pass = result.includes("The document validates according to the specified schema(s).")

        if (!pass) {
          everythingPassed = false;
          console.log(filePath + ' ❌');
          console.log(result)
        }
      } catch (error) {
        console.log(filePath)
        console.error(error)
      }
    }
  });

  if (everythingPassed) {
    console.log('All your HTML passed validation! 🎉');
  }
}

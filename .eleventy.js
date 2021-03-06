const htmlValidator = require('html-validator')
const fs = require('fs');

function log(message, isError) {
  const logLabel = "11ty-plugin-html-validator: ";

  if (isError) {
    console.error(logLabel + message);
  } else {
    console.log(logLabel + message);
  }
}

async function validateHTMLFiles(buildOutput) {
  const htmlFilePaths = buildOutput.results.map(r => r.outputPath)
    .filter(path => path.match(/.html$/));

  let everythingPassed = true;

  htmlFilePaths.forEach(async (filePath, i) => {
    if (fs.existsSync(filePath)) {
      try {
        const options = {
          format: 'text',
          data: fs.readFileSync(filePath, 'utf8')
        }

        const result = await htmlValidator(options)
        const pass = result.includes("The document validates according to the specified schema(s).")

        if (!pass) {
          everythingPassed = false;
          log(filePath + ' ❌', true);
          log(result);
        }
      } catch (error) {
        log(error, true);
      }
    }
    if (htmlFilePaths.length - 1 === i && everythingPassed) {
      log('All your HTML passed validation! 🎉');
    }
  });
}

module.exports = function (eleventyConfig, config) {
  eleventyConfig.on('eleventy.after', validateHTMLFiles);
}

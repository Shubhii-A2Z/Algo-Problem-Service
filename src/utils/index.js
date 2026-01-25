const errorHandler = require("./errorHandler");
const sanitizeMarkdown = require("./markdown.sanitizer");

module.exports={
    markdownSanitizer: sanitizeMarkdown,
    errorHandler: errorHandler
};
const marked=require('marked');
const sanitizeHtml=require('sanitize-html');
const TurndownService=require('turndown');

function sanitizeMarkdown(markdownContent){
    const turndownService=new TurndownService();

    // 1. convert markdown to html
    const convertedHtml=marked.parse(markdownContent);

    // 2. sanitize html
    const sanitized_Html=sanitizeHtml(convertedHtml,{
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
    });

    // 3. convert the sanitized_html back to markdown
    const sanitized_markdown=turndownService.turndown(sanitized_Html);

    return sanitized_markdown;
}

module.exports=sanitizeMarkdown;
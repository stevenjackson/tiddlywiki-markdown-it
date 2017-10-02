/*\
title: $:/plugins/stevenjackson/markdown-it/wrapper.js
type: application/javascript
module-type: parser

Wraps up the markdown-it parser for use in TiddlyWiki5

\*/
(function(){
  /*jslint node: true, browser: true */
  /*global $tw: false */
  "use strict";

  const markdown = require("$:/plugins/stevenjackson/markdown-it/markdown-it.min.js");
  const MarkdownParser = function(type, text, options) {
    const withOptions = {
      breaks: true,
      linkify: true
    };
    const parser = markdown(withOptions);
    const html = parser.render(text);
    const element = {
      type: "raw",
      html: html
    };
    this.tree = [element];
  };

  exports["text/x-markdown"] = MarkdownParser;
})();


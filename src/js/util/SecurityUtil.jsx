//-----------------------------------------------------------------------------------------------
//	date:		2015/11/11
//	
//	author: yonglu.xie
//	
//	description: SecurityUtil
//-----------------------------------------------------------------------------------------------
var SecurityUtil = {

	HTML_ENTITY_MAP: {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#x27;',
		'/': '&#x2F;'
	},
	
	// OSWASP Guidlines: &, <, >, ", ' plus forward slash.
	HTML_CHARACTERS_EXPRESSION: /[&"'<>\/]/gm,
	escapeHTML: function(text) {
	  return text && text.replace(this.HTML_CHARACTERS_EXPRESSION, function (c) {
	    return SecurityUtil.HTML_ENTITY_MAP[c] || c;
	  });
	},
	
	OPPOSITE_HTML_ENTITY_MAP: {
	  "&amp;": "&",
	  "&lt;": "<",
	  "&gt;": ">",
	  "&quot;": "\"",
	  "&#x27;": "'",
	  "&#x2F;": "/"
	},
	OPPOSITE_HTML_CHARACTERS_EXPRESSION: /&(?:amp|lt|gt|quot|#39);/g,
	unescapeHTML: function(string){
	  return string.replace(this.OPPOSITE_HTML_CHARACTERS_EXPRESSION, function (c){
		  return SecurityUtil.OPPOSITE_HTML_ENTITY_MAP[c] || c;
		});
	},
	
	// OSWASP Guidlines: escape all non alphanumeric characters in ASCII space.
	HTML_ATTRIBUTE_CHARACTERS_EXPRESSION: /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]/gm,
	escapeHTMLAttribute: function(text) {
	  return text && text.replace(this.HTML_ATTRIBUTE_CHARACTERS_EXPRESSION, function (c) {
	    return SecurityUtil.HTML_ENTITY_MAP[c] || "&#x" + ('00' + c.charCodeAt(0).toString(16)).slice(-2) + ";";
	  });
	},
	
	// OSWASP Guidlines: escape all non alphanumeric characters in ASCII space.
	// Also include line breaks (for literal).
	JAVASCRIPT_CHARACTERS_EXPRESSION: /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm,
	encodeJavaScriptIdentifier: function(text) {
	  return text && text.replace(this.JAVASCRIPT_CHARACTERS_EXPRESSION, function (c) {
	    return "\\u" + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
	  });
	},
	
	encodeJavaScriptString: function(text) {
	  return text && '"' + this.encodeJavaScriptIdentifier(text) + '"';
	},
	
	// This is not great, but it is useful.
	JSON_STRING_LITERAL_EXPRESSION: /"(?:\\.|[^"])*"/gm,
	encodeJavaScriptData: function(object) {
	  return JSON.stringify(object).replace(this.JSON_STRING_LITERAL_EXPRESSION, function (string) {
	    return SecurityUtil.encodeJavaScriptString(JSON.parse(string));
	  });
	},
	
	// OSWASP Guidlines: escape all non alphanumeric characters in ASCII space.
	CSS_CHARACTERS_EXPRESSION: /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]/gm,
	encodeCSSIdentifier: function(text) {
	  return text && text.replace(this.CSS_CHARACTERS_EXPRESSION, function (c) {
	    return "\\" + ('000000' + c.charCodeAt(0).toString(16)).slice(-6);
	  });
	},
	
	encodeCSSString: function(text) {
	  return text && '"' +this.encodeCSSIdentifier(text) + '"';
	}
	
}

module.exports = SecurityUtil;


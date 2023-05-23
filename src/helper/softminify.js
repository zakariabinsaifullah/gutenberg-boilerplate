// softMinifyCssStrings is for minifying the css
export const softMinifyCssStrings = (cssString = ' ') =>
	cssString
		.replace(/\s+/g, ' ')
		.replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');

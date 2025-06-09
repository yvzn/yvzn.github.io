/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {

	// -- Folder structure --
	eleventyConfig.addPassthroughCopy({ './public/': '.' });

	eleventyConfig.addWatchTarget('./styles.css');

	// -- Custom filters and shortcodes --
	eleventyConfig.addFilter("stripMarkup", stripMarkup);
}

function stripMarkup(content) {
	if (typeof content !== "string") return content;
	if (content.length < 1) return content;

	let result = content;
	// Remove HTML tags
	result = result.replace(/<[^>]+>/g, "");
	// Replace markdown links with plain text
	result = result.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
	// Replace markdown formatting (bold, italic, etc.) with plain text
 	result = result.replace(/([\*_]{1,2})(.*?)\1/g, "$2"); // Bold
	// Remove line breaks
	result = result.replace(/(\r\n|\n|\r)/gm, " ");
	// Remove extra spaces
	result = result.replace(/\s+/g, " ");
	result = result.trim();

	return result;
}

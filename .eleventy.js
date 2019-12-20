module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection('blog', collection =>
  collection.getFilteredByGlob('*/blog/*.md')
      .sort((a, b) => a.data.display_order - b.data.display_order)
  );


  eleventyConfig.addCollection("articles", collection =>
    collection.getFilteredByGlob("*/articles/*.md")
    .sort((a, b) => a.data.display_order - b.data.display_order)
  );

  eleventyConfig.addPassthroughCopy('assets');

  return {
    dir: {
      input: "src",
      includes: "_layouts",
      output: "./_site",
    },
    passthroughFileCopy: true
  };
}

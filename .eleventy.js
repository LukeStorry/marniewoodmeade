module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("navbar_links", collection => {
    return collection.getAll()
      .filter(page => page.data.in_navbar)
      .sort((a, b) => a.data.in_navbar - b.data.in_navbar)
  });

  eleventyConfig.addCollection('blog', collection =>
    collection.getFilteredByGlob('*/blog/*.md')
    .sort((a, b) => (b.data.display_order || 0) - (a.data.display_order || 0))
  );

  eleventyConfig.addCollection("articles", collection =>
    collection.getFilteredByGlob("*/articles/*.md")
    .sort((a, b) => (b.data.display_order || 0) - (a.data.display_order || 0))
  );

  // 
  // eleventyConfig.addCollection("gallery", collection =>
  //   collection.getFilteredByGlob("*/articles/*.md")
  //   .sort((a, b) => (b.data.display_order || 0) - (a.data.display_order || 0))
  // );

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

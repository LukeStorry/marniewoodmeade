var nestedAccordion = require("nested-accordion");
var authenticLearningDataFile = require("./assets/authenticlearningdata.json");

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("navbar_links", (collection) => {
    return collection
      .getAll()
      .filter((page) => page.data.in_navbar)
      .sort((a, b) => a.data.in_navbar - b.data.in_navbar);
  });

  eleventyConfig.addCollection("blog", (collection) =>
    collection
      .getFilteredByGlob("*/blog/*.md")
      .sort((a, b) => (new Date(b.data.date) > new Date(a.data.date) ? 1 : -1))
  );

  eleventyConfig.addCollection("articles", (collection) =>
    collection
      .getFilteredByGlob("*/articles/*.md")
      .sort((a, b) => (new Date(b.data.date) > new Date(a.data.date) ? 1 : -1))
  );

  eleventyConfig.addShortcode("authentic_learning_accordion", () => {
    var data = JSON.parse(authenticLearningDataFile.data);
    data.forEach((location) => delete location.text); // remove gps coordinates
    return nestedAccordion.create(data);
  });

  eleventyConfig.addShortcode(
    "accordion_styles",
    () =>
      `<style>
   ${nestedAccordion.styles()}
   </style>
   `
  );

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "src",
      includes: "_layouts",
      output: "./_site",
    },

    passthroughFileCopy: true,
  };
};

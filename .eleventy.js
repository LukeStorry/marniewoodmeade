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
      .sort((a, b) => (b.data.date > a.data.date ? 1 : -1))
      .sort((a, b) => (b.data.display_order || 0) - (a.data.display_order || 0))
  );

  eleventyConfig.addCollection("articles", (collection) => {
    const articles = collection
      .getFilteredByGlob("*/articles/*.md")
      .sort((a, b) => (b.data.date > a.data.date ? 1 : -1))
      .sort(
        (a, b) => (b.data.display_order || 0) - (a.data.display_order || 0)
      );

    console.log(
      articles.map((a) => ({
        title: a.data.title,
        order: a.data.display_order,
      }))
    );

    return articles;
  });

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

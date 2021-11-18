module.exports = {
    css: {
      loaderOptions: {
        sass: {
            additionalData: `
            @import "@/scss/mixins.scss";
            @import "@/scss/variables.scss";
          `
        },
      },
    },
  }
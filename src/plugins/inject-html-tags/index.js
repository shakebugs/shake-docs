module.exports = function (context, options) {
    return {
      name: 'inject-html-tags',
      injectHtmlTags() {
        return {
          headTags: [
            process.env.APP_CONFIG_ENV != 'production' ?
                {
                    tagName: 'meta',
                    attributes: {
                        name: 'robots',
                        content: 'noindex, nofollow'
                    },
                } : ''
            ],
          preBodyTags: [],
          postBodyTags: [],
        };
      },
    };
  };
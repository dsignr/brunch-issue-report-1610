// See http://brunch.io for documentation.
module.exports = {
    files: {
      javascripts: {
        joinTo: {
          'js/app.js': [/app\/js\/vendor/, /app\/js/],
        },
        order: {
          before: ['app/js/vendor/jquery-*.min.js']
        }
      },
      stylesheets: {
        joinTo: {
          'css/app.css': /app\/css/
        }
      }
    },
    paths: {
      public: '',
      watched: ['app/js', 'app/css']
    },
    npm: {
      enabled: false
    },
    modules: {
      wrapper: false,
      definition: false
    },
    sourceMaps: false
};

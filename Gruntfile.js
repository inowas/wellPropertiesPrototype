module.exports = function (grunt) {
  //Initializing the configuration object
  grunt.initConfig({
    // Task configuration
    less: {
      development: {
        options: {
          compress: true, //minifying the result
        },
        files: {
          //compiling main.less into style.css
          "./dist/css/style.min.css": "./less/main.less"
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      all: {
        src: ['./bower_components/jquery/dist/jquery.js', './bower_components/bootstrap/dist/js/bootstrap.js', './js/tooltip.js'],
        dest: './dist/js/main.js'
      }
    },
    uglify: {
      options: {
        mangle: false // Use if you want the names of your functions and variables unchanged
      },
      all: {
        files: {
          './dist/js/main.min.js': './dist/js/main.js'
        }
      }
    },
    copy: {
      main: {
        expand: true,
        src: './bower_components/bootstrap/dist/fonts/*',
        dest: './dist/fonts/',
        flatten: true
      }
    },
    watch: {
      js: {
        //watched files
        files: ['./js/*.js'],
        //tasks to run
        tasks: ['concat:all', 'uglify:all'],
        options: {
          livereload: true
        }
      },
      less: {
        //watched files
        files: ['./less/*.less'],
        //tasks to run
        tasks: ['less'],
        options: {
          livereload: true
        }
      }
    }
  });
  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Task definition
  grunt.registerTask('default', ['watch']);
};

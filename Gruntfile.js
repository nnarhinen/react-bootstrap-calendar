module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      all: {
        files: ['index.js', 'components/*.js', 'node_modules/*/package.json'],
        tasks: ['exec:make']
      }
    },
    exec: {
      make: {
        command: 'make'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
}

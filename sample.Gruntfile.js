/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    less: {
	  production: {
	    options: {
	      paths: ["assets/css"]
	    },
	    files: {
	      "assets/style.css": "style.less"
	    }
	  }
	},
    watch: {
	    files: 'style.less',
	    tasks: ['less:production']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['less']);

};

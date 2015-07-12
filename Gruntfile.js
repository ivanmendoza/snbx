/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
	// Metadata.
	pkg: grunt.file.readJSON('package.json'),
	banner: 
		'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
		' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
	// Javascript minification.
	concat: {
	  	options: {
	    	banner: '<%= banner %>',
			stripBanners: true
	  	},
	  	snbx: {
	    	src: ['scripts/*.js'],
			dest: 'dist/<%= pkg.name.toLowerCase() %>.js'
	  	},
	  	snbxwjquery: {
	    	src: ['bower_components/jquery/dist/jquery.js', 'scripts/*.js'],
			dest: 'dist/<%= pkg.name.toLowerCase() %>-jquery.js'
	  	},
	  	iecompat: {
	    	src: ['bower_components/html5shiv/dist/html5shiv.js', 'bower_components/respond/dist/respond.src.js'],
			dest: 'dist/ie-compat.js'
	  	}
	},
	uglify: {
		options: {
			banner: '<%= banner %>'
		},
		snbx: {
			src: '<%= concat.snbx.dest %>',
			dest: 'dist/<%= pkg.name.toLowerCase() %>.min.js'
		},
		snbxwjquery: {
			src: '<%= concat.snbxwjquery.dest %>',
			dest: 'dist/<%= pkg.name.toLowerCase() %>-jquery.min.js'
		},
		iecompat: {
			src: '<%= concat.iecompat.dest %>',
			dest: 'dist/ie-compat.min.js'
		}
	},
	// Dev tasks.
    changelog: {
		sample: {
			options: {
				fileHeader: '# Changelog',
				partials: {
		          features: '{{#each features}}{{> feature}}{{/each}}',
		          feature: '[NEW] {{this}}\n',
		          fixes: '{{#each fixes}}{{> fix}}{{/each}}',
		          fix: '[FIX] {{this}}\n'
		        }
			}
		}
	},
	bump: {
    	options: {
			files: 				['package.json','bower.json'],
			updateConfigs: 		[],
			commit: 			true,
			commitMessage: 		'Release v%VERSION%',
			commitFiles: 		['-a'],
			createTag: 			true,
			tagName: 			'v%VERSION%',
			tagMessage: 		'Version %VERSION%',
			push: 				false,
			pushTo: 			'origin',
			gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
			globalReplace: 		false,
			prereleaseName: 	false,
			regExp: 			false
		}
	},
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-changelog');

  // Default task.
  grunt.registerTask('minify', ['concat', 'uglify']);
  grunt.registerTask('default', ['minify']);


};

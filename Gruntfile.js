/*
 *
 * http://gruntjs.com/
 *
 * Copyright (c) 2014 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["css"]
				},
				files: {
					"assets/css/simplegrid.css": ["assets/less/simplegrid.less"],
				}
			}
		},
		watch: {
			files: ['assets/less/*.less','assets/less/**/*.less'],
			tasks: ["less"]
		}
	});

	grunt.registerTask('default', ['less','watch']);
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
}

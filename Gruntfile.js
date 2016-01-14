/**
 * Created by sunil.jhamnani on 1/13/16.
 */
module.exports = function(grunt){
    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        sitespeedio: {
            default: {
                options: {

                    urls: ['www.macys.com'],
                    html: true,
                    deepth: 0,
                    browser: 'chrome',
                    connection: 'cable',
                    no: 1,
                    resultBaseDir: 'bin/performance/',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sitespeedio');
    grunt.registerTask("default",['sitespeedio']);
};
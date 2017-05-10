/**
 * Created by Administrator on 2016/10/8.
 */
/*
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /!*uglify: {
            options: {
                banner: '/!*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *!/\n'
            },
            build: {
                src: 'public/stylesheets/banner.css',
                dest: 'build/banner.min.css'
            }
        }*!/
        cssmin: {

            css: {

                src:'public/stylesheets/banner.css',

                dest:'build/banner.min.css'
            }

        }
    });

    // 加载包含 "uglify" 任务的插件。
    /!*grunt.loadNpmTasks('grunt-contrib-uglify');*!/

    // 默认被执行的任务列表。
   /!* grunt.registerTask('default', ['uglify']);*!/
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-css');

    // 默认任务

    grunt.registerTask('default', ['concat','cssmin']);
};*/
module.exports =function(grunt) {

    // 配置

    grunt.initConfig({

        pkg : grunt.file.readJSON('package.json'),

     /*   : {

            css : {

                src: ['src/asset/!*.css'],

                dest:'dest/asset/all.css'

            }

        },*/

        cssmin: {

            css: {

                src:'public/stylesheets/touchTouch.css',

                dest:'build/touchTouch.min.css'

            }

        }

    });

    // 载入concat和css插件，分别对于合并和压缩

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-css');

    // 默认任务

    grunt.registerTask('default','cssmin');

};
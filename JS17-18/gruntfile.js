module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // объединение всех файлов с расширением js
        src: ['src/js/*.js'],
        dest: 'dist/js/script.min.js'
      }
    },
    uglify: {
        dist: {
        src: ['dist/js/script.min.js'],
        dest: 'dist/js/script.min.js'
      }
    },
    cssmin: {
            with_banner: {
                options: {
                    banner: '/* this is minified CSS */'
                },

                files: {
                  // до двоеточия - файл назначения минификации, после - из каких файлов его делать
                    'dist/css/style.min.css' : ['src/css/*.css']                }
            }
        }
    
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  // это задача по умолчанию после запуска в консоли команды grunt, здесь мы регистрируем все наши модули
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
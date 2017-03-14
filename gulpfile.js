var gulp = require('gulp');

require('@recipher/gulp')(gulp, { test: { coverage: 0 }});

gulp.task('default', [ 'test' ]);

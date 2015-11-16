var gulp              = require('gulp')
  , $                 = require('gulp-load-plugins')({ camelize: true })
  , config            = require('../gulpconfig').scripts
  , enabled            = require('../gulpconfig').enabled
  , writeToManifest   = require('./manifest').writeToManifest
  , manifest = require('../gulpconfig').manifest.manifest
  , lazypipe          = require('lazypipe')
  , merge             = require('merge-stream')
  , browserSync      = require("browser-sync").get('My server')
;

var jsTasks = function(filename) {
  return lazypipe()
    .pipe(function() {
      return $.if(enabled.maps, $.sourcemaps.init());
    })
    .pipe($.concat, filename)
    .pipe($.uglify,config.uglify)
    .pipe(function() {
      return $.if(enabled.rev, $.rev());
    })
    .pipe(function() {
      return $.if(enabled.maps, $.sourcemaps.write('.',config.sourceMap));
    })();
};

gulp.task('scripts', ['jshint'], function() {
  var merged = merge();
  manifest.forEachDependency('js', function(dep) {
    merged.add(
      gulp.src(dep.globs, {base: config.base})
        .pipe(jsTasks(dep.name))
    );
  });
  return merged
    .pipe(writeToManifest(config.manifestDir));
});

gulp.task('jshint', function() {
  return gulp.src(config.otherHint.concat(config.project))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(enabled.failJSHint, $.jshint.reporter('fail')));
});

gulp.task('watch-scripts', function() {
  gulp.watch([config.src + '/**/*'], ['jshint', 'scripts']);
});
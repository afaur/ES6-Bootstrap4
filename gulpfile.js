var gulp        = require('gulp');
var fs          = require('fs');

var sourcemaps  = require('gulp-sourcemaps');

var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var watchify    = require('watchify');
var babelify    = require('babelify');
var sass        = require('gulp-sass');
var gcopy       = require('gulp-copy');

var _           = require('lodash');
var rimraf      = require('rimraf');

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var config = {
  DOCROOT:      './public',
  INDEX:        './src/index.html',
  JS: {
    entryFile:  './src/js/app.js',
    outputDir:  './public/js/',
    outputFile: 'app.js'
  },
  CSS: {
    entryFile:  './src/css/**/*.scss',
    outputDir:  './public/css/',
  }
};

// clean the output directory
gulp.task('clean', function(callback){
    rimraf(
      config.DOCROOT,
      callback
    );
});

var bundler;
function getBundlerJS() {
  if (!bundler) {
    bundler = watchify(
      browserify(
        config.JS.entryFile,
        _.extend(
          { debug: true },
          watchify.args
        )
      )
    );
  }
  return bundler;
};

function compileStyle() {
  gulp.src(config.CSS.entryFile)
    .pipe(
      sass().on('error', sass.logError)
    )
    .pipe(
      gulp.dest(config.CSS.outputDir)
    );
}

function copyIndexFile() {
  gulp.src(config.INDEX)
    .pipe(
      gcopy(
        config.DOCROOT + "/",
        {prefix: 1}
      )
    ); 
}

// es6 js compiliation
function bundleJS() {
  return getBundlerJS()
    .transform(babelify.configure({
      optional: ["es7.asyncFunctions"]
    }))
    .bundle()
    .on('error', function(err) { console.log('Error: ' + err.message); })
    .pipe(
      source(config.JS.outputFile)
    )
    .pipe(
      gulp.dest(config.JS.outputDir)
    )
    .pipe(
      reload({ stream: true })
    );
}

// sass compiliation
gulp.task('sass', function () {
  compileStyle();
});

// return the status of the bundle operation
gulp.task('build-persistent', ['clean'], function() {
  var status = bundleJS();
  compileStyle();
  copyIndexFile();
  return status;
});

// a build triggers build-persistent
gulp.task('build', ['build-persistent'], function() {
  process.exit(0);
});

// a watch triggers a build persistent then watches
gulp.task('watch', ['build-persistent'], function() {

  // tell the browser to refresh after we update
  // files inside the public directory
  browserSync({
    server: {
      baseDir: config.DOCROOT
    }
  });

  // watch our bundle for changes (js)
  getBundler().on('update', function() {
    gulp.start('build-persistent')
  });

  // watch sass folder for changes then rebuild
  gulp.watch('./src/css/**/*.scss', ['sass']);

});

// start the webserver and set browser
// clients to refresh when public changes
gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: config.DOCROOT
    }
  });
});

var concat = require('gulp-concat');
    // sources = ['app/app-module.js', 'app/router/router.js', 'app/const/types-const.js', 'app/const/keys-const.js', 'app/pages/main/backend-service.js',
    // 'app/pages/main/main-page-service.js', 'app/pages/main/main-page-controller.js', 'app/pages/details/details-page-controller.js', 'app/pages/details/details-page-service.js',
    // 'app/pages/favorites/favorites-page-controller.js'];


gulp.task('scripts', function() {
    return gulp.src(['app/app-module.js', 'app/router/router.js', 'app/const/types-const.js', 'app/const/keys-const.js', 'app/pages/main/backend-service.js',
        'app/pages/main/main-page-service.js', 'app/pages/main/main-page-controller.js', 'app/pages/details/details-page-controller.js', 'app/pages/details/details-page-service.js',
        'app/pages/favorites/favorites-page-controller.js'])
        .pipe(concat('sources.js'))
        .pipe(gulp.dest('./dist/'));
});

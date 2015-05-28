exports.config =  {
  tests: {
    public:'./public/test/**/*.js',
    server:'./server/test/**/*.js',
    karma:'./karma.conf.js'
  },
  styles: {
    sass: './sass/**/*.scss',
    css: './css'
  },
  js: {
    server: 'server/js/**/*.js',
    client: 'public/**/*.js'
  },
  build: 'public/build',
  port: 3000,
  templates: './client/app/js/views/**/*.html',
  app: './client/app'
};

exports.banner = [
  '/*! ',
    '<%= package.name %> ',
    'v<%= package.version %> | ',
    '(c) ' + new Date().getFullYear() + ' <%= package.author %> |',
    ' <%= package.homepage %>',
  ' */',
  '\n'
].join('');


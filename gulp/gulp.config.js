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
  port: 3000
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


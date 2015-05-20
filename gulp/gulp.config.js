exports.config =  {
  tests: {
    public:'path/to/public/tests/',
    server:'/path/to/server/tests'
  },
  styles: {
    sass: './sass/**/*.scss',
    css: './css'
  },
  js: {
    server: 'server/**/*.js',
    client: 'public/**/*.js'
  }
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


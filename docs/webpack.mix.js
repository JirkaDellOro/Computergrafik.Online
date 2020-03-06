let mix = require('laravel-mix');
let fs = require('fs');

mix .options({
        processCssUrls: false,
    })
    .sass('assets/src/styles/main.sass', 'assets/dist/css/')
    .sourceMaps()
    .setPublicPath('./');

mix .js('assets/src/scripts/main.js', 'assets/dist/js/main.js')
    .copyDirectory('assets/src/fonts', 'assets/dist/fonts')
    .copyDirectory('assets/src/images', 'assets/dist/images')
    .setPublicPath('./');


/* Recursive Directory Stuff */

let getFiles = function(dir) {
  let files = [];

  fs.readdirSync(dir).forEach(file => {
    if (fs.statSync(`${dir}/${file}`).isFile()) {
      files.push(`${dir}/${file}`);
    } else if (fs.statSync(`${dir}/${file}`).isDirectory()) {
      files = files.concat(getFiles(`${dir}/${file}`));
    }
  });

  return files;
};

let recJs = function(src, dest) {
  getFiles(src).forEach(file => {
    mix.js(src + file.substr(src.length), dest + file.substr(src.length));
  });
};

let recCombine = function(src, dest) {
  let files = [];
  getFiles(src).forEach(file => {
    files.push(src + file.substr(src.length));
  });

  mix.js(files, dest);
};

// recJs('assets/src/scripts/pages/', 'assets/dist/js/pages/');
// recCombine("assets/src/scripts/pages/", "assets/dist/js/pages.js");
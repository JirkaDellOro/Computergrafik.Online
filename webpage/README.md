# Install dependencies

```
npm install
npm install --only=dev
```

# Setup Laravel Mix to your needs

### Normal behaviour:
- Images: Copy from `assets/src/images` to `assets/dist/images`
- Fonts: Copy from `assets/src/fonts` to `assets/dist/fonts`
- JS: Compile `assets/src/scripts/main.js`
- JS: Merge to single file `assets/src/pages/*.js`
- CSS: Compile Sass `assets/src/styles/main.sass`

### More Configuration
See `webpack.mix.js` file OR [https://laravel.com/docs/5.5/mix](https://laravel.com/docs/5.5/mix)


### iframe Youtube Styling 
https://stackoverflow.com/questions/6960406/add-css-to-iframe?lq=1
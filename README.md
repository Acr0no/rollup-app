# rollup-app
A simple rollup application ready to be coded

For installing node dependencies

```
$ npm install

```
For installing image minificator (imagemin)

```
$ npm preinstall

```


The application use scss which will be compile from assets/scss/main.scss to build/css/style.min.css from . This also happens for JS, which will be compiled from assets/js/main.js to build/js/ main.min.js.

Bootstrap 5 is included from node with partial _theme.scss. For customize the landing page, just edit the _theme.scss

For development version. Every changes will be watched in real time on localhost (js, scss and html).

```
$ npm run dev

```
For production version

```
$ npm run build

```
The production version will also minimize all the images inside /img folder.

import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg"
import imageminPngquant from "imagemin-pngquant"


(async() => {
    const files = await imagemin(["./img/**/*.{jpeg,jpg,png}"], {
        destination: "./img",
        plugins: [
            imageminMozjpeg({ quality: 80 }),
            imageminPngquant({ quality: [0.6, 0.8] }),
        ],
    });

    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
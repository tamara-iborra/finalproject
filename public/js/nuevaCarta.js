
// <script>
// document.addEventListener("DOMContentLoaded", () => {

//   document.getElementById("btn-save").addEventListener("click", printImage);

//   function printImage() {
//     const nodo = document.getElementById("wrapper-eve");

//     htmlToImage.toPng(nodo)
//       .then(url => {
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = "captura.png";
//         link.click();
//       })
//       .catch(err => console.error(err));
//   }
// });
// </script>

const output = document.querySelector(".output");


document.getElementById("blue").addEventListener("click", () => {
     document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg,rgba(225, 245, 240, 1) 0%, rgba(207, 209, 255, 1) 100%)";
});

document.getElementById("pink").addEventListener("click", () => {
    document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg,rgba(255, 230, 240, 1) 0%, rgba(254, 234, 199, 1) 100%)";
});

document.getElementById("yellow").addEventListener("click", () => {
    document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg, rgba(255, 255, 199, 1) 0%, rgba(228, 240, 213, 1) 100%)";
});

document.getElementById("green").addEventListener("click", () => {
    document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg,rgba(224, 246, 218, 1) 0%, rgba(219, 221, 225, 1) 100%)";
});

document.getElementById("white").addEventListener("click", () => {
    document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg,rgba(249, 244, 238, 1) 0%, rgba(229, 237, 216, 1) 100%)";
});


let imgStickers1 = [
  "/images/stickers/sticker1_1.PNG",
  "/images/stickers/sticker1_2.PNG",
  "/images/stickers/sticker1_3.PNG"
];
var button1 = document.querySelector('#sticker-button1');

let imgStickers2 = [
   "/images/stickers/sticker2_1.PNG",
  "/images/stickers/sticker2_2.PNG",
  "/images/stickers/sticker2_3.PNG"
];
var button2 = document.querySelector('#sticker-button2');

let imgStickers3 = [
   "/images/stickers/sticker3_1.PNG",
  "/images/stickers/sticker3_2.PNG",
  "/images/stickers/sticker3_3.PNG"
];
var button3 = document.querySelector('#sticker-button3');

//button.onclick = function(){
 //var img = document.getElementById('sticker1');
 //img.src = imgStickers1[1];
//}

 let index = 0;

button1.onclick = function(){
 if (index >= imgStickers1.length) {
        index = 0;
    }
 console.log(index);
 document.getElementById("sticker1").src = imgStickers1[index];
index ++;
}

let index2 = 0;

button2.onclick = function(){
 if (index2 >= imgStickers2.length) {
        index2 = 0;
    }
 console.log(index2);
 document.getElementById("sticker2").src = imgStickers2[index2];
index2 ++;
}

let index3 = 0;

button3.onclick = function(){
 if (index3 >= imgStickers3.length) {
        index3 = 0;
    }
 console.log(index3);
 document.getElementById("sticker3").src = imgStickers3[index3];
index3 ++;
}


//button.onclick = function(){
 // var img = document.querySelector('img.sticker1');
// var img = document.getElementById('sticker2');
 //img.src ="christmas.jpg";
//}



const toolbarOptions = [
  // font options
  [{ font: [] }],

  //   header options
  [{ header: [1, 2, 3] }],

  // text utilities
  ["bold", "italic", "underline", "strike"],

  // text colors and bg colors
  [{ color: [] }, { background: [] }],

  // lists
  [{ list: "ordered" }, { list: "bullet" }],

  // block quotes and code blocks
 // ["blockquote", "code-block"],

  // alignment
  [{ align: [] }],
];

const quill = new Quill("#editor-container", {
  theme: "snow",
 //placeholder: 'Querido extraño...',
  modules: {
    toolbar: '#toolbar' 
  }, 

  
});

const limit = 650;

quill.on('text-change', function (delta, old, source) {
  if (quill.getLength() > limit) {
    quill.deleteText(limit, quill.getLength());
  }
});


//  editor.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
//   .then(function (dataUrl) {
//     var link = document.createElement('a');
//     link.download = 'my-image-name.jpeg';
//     link.href = dataUrl;
//     link.click();
//   });




// import * as htmlToImage from 'html-to-image';
// // or import individual functions:
// import { toPng, toJpeg, toBlob, toSvg, toPixelData } from 'html-to-image';

// // In your JS
// const node = document.getElementById('wrapper-eve');

// htmlToImage.toPng(node)
//   .then((dataUrl) => {
//     const img = new Image();
//     img.src = dataUrl;
//     document.body.appendChild(img);  // For example: add the image to DOM, or trigger a download
//   })
//   .catch((err) => {
//     console.error('Oops, something went wrong!', err);
//   });




// import * as htmlToImage from "html-to-image";

// document.getElementById("btn-save").addEventListener("click", () => {
//   console.log("hello");
//   const node = document.getElementById("wrapper-eve");

//   htmlToImage.toPng(node)
//     .then((dataUrl) => {
//       const link = document.createElement("a");
//       link.download = "my-image.png";
//       link.href = dataUrl;
//       link.click();
//     })
//     .catch((err) => console.error("Oops!", err));
// });
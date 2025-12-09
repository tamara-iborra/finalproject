
const output = document.querySelector(".output");


document.getElementById("blue").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.background = "linear-gradient(0deg,rgba(225, 245, 240, 1) 0%, rgba(207, 209, 255, 1) 100%)";
     document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg,rgba(225, 245, 240, 1) 0%, rgba(207, 209, 255, 1) 100%)";
});

document.getElementById("pink").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.background = "linear-gradient(0deg,rgba(255, 230, 240, 1) 0%, rgba(254, 234, 199, 1) 100%)";
    document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg,rgba(255, 230, 240, 1) 0%, rgba(254, 234, 199, 1) 100%)";
});

document.getElementById("yellow").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.background = "linear-gradient(0deg, rgba(255, 255, 199, 1) 0%, rgba(228, 240, 213, 1) 100%)";
    document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg, rgba(255, 255, 199, 1) 0%, rgba(228, 240, 213, 1) 100%)";
});

document.getElementById("green").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.background = "linear-gradient(0deg,rgba(224, 246, 218, 1) 0%, rgba(219, 221, 225, 1) 100%)";
    document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg,rgba(224, 246, 218, 1) 0%, rgba(219, 221, 225, 1) 100%)";
});

document.getElementById("white").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.background = "linear-gradient(0deg,rgba(249, 244, 238, 1) 0%, rgba(229, 237, 216, 1) 100%)";
    document.getElementById("wrapper-eve").style.background = "linear-gradient(0deg,rgba(249, 244, 238, 1) 0%, rgba(229, 237, 216, 1) 100%)";
});


let imgStickers1 = ["sticker1_1.PNG", "sticker1_2.PNG", "sticker1_3.PNG"];
var button1 = document.querySelector('#sticker-button1');

let imgStickers2 = ["sticker2_1.PNG", "sticker2_2.PNG", "sticker2_3.PNG"];
var button2 = document.querySelector('#sticker-button2');

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


 editor.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
  });


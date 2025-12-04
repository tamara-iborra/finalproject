
const output = document.querySelector(".output");


document.getElementById("blue").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.backgroundColor = "rgba(179, 251, 229, 1)";
});

document.getElementById("pink").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.backgroundColor = "rgba(255, 209, 225, 1)";
});

document.getElementById("yellow").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.backgroundColor = "rgba(251, 255, 176, 1)";
});

document.getElementById("green").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.backgroundColor = "rgba(213, 255, 209, 1)";
});

document.getElementById("purple").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.backgroundColor = "rgba(187, 169, 255, 1)";
});

document.getElementById("white").addEventListener("click", () => {
    document.getElementById("wrapper-quill").style.backgroundColor = "rgba(245, 245, 245, 1)";
});


let imgStickers1 = ["sticker1_1.PNG", "sticker1_2.PNG", "sticker1_3.PNG"];
var button = document.querySelector('#sticker-button1');

let imgStickers2 = ["sticker1_1.PNG", "sticker1_2.PNG", "sticker1_3.PNG"];
var button = document.querySelector('#sticker-button2');

//button.onclick = function(){
 //var img = document.getElementById('sticker1');
 //img.src = imgStickers1[1];
//}

 let index = 0;

button.onclick = function(){
 if (index >= imgStickers1.length) {
        index = 0;
    }
 console.log(index);
 document.getElementById("sticker1").src = imgStickers1[index];
index ++;
}

let index2 = 0;

button.onclick = function(){
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
  ["blockquote", "code-block"],

  // alignment
  [{ align: [] }],
];

const quill = new Quill("#editor-container", {
  theme: "snow",
  placeholder: 'Querido extraño...',
  modules: {
    toolbar: '#toolbar' 
  }, 

  
});



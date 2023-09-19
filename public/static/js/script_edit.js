class SimpleImage {
  static get toolbox() {
    return {
      title: 'Image',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
    };
  }

  constructor({data}){
    this.data = data;
  }

  render(){
    this.wrapper = document.createElement('div');
    const input = document.createElement('input');

    this.wrapper.classList.add('simple-image');
    this.wrapper.appendChild(input);

    input.placeholder = 'Paste an image URL...';
    input.value = this.data && this.data.url ? this.data.url : '';

    input.addEventListener('paste', (event) => {
      this._createImage(event.clipboardData.getData('text'));
    });

    return this.wrapper;
  }

  _createImage(url){
    const image = document.createElement('img');
    const caption = document.createElement('input');

    image.src = url;
    caption.placeholder = 'Caption...';

    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(image);
    this.wrapper.appendChild(caption);
  }

  save(blockContent){
    const input = blockContent.querySelector('input');

    return {
      url: input.value
    }
  }
}
// class SimpleTxt {
//     static gettoolbox(){
//     return {
//       title: 'Txt',
//       icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
//     };
//   }
//   render(){
//     return document.createElement('editorjs');
//   }
//   save(blockContent){
//     return {
//       text: blockContent.value
//     }
//   }
// }
//////////////
function savePage() {
  // Создаем ссылку на текущую страницу
  var pageURL = window.location.href;
  
  // Создаем элемент <a> с атрибутами для скачивания
  var downloadLink = document.createElement('a');
  downloadLink.href = pageURL;
  downloadLink.download = 'edited_page.html';
  
  // Кликаем по ссылке для скачивания
  downloadLink.click();
}
//////////////////////////////

try {

  var editor = new EditorJS({
    holderId : 'editorjs',
    placeholder: 'Можем написать историю!',
    autofocus: true,
      tools: {
        image: SimpleImage
      }
  });

  editor.isReady
    .then(() => {
      console.log("Editor.js is ready to work!");
    })
    .catch((reason) => {
      console.log(`Editor.js initialization failed because of ${reason}`);
    });

  const btn = document.getElementById("button_editor");
  const output = document.getElementById('output');

  btn.addEventListener("click", function () {
    editor.save().then((outputData) => {
       output.innerHTML = outputData.blocks[0].data.url; //JSON.stringify(outputData[0], null, 4);
        console.log('Article data: ', outputData)
        
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });

  });
} catch (reason) {
  console.log(`Editor.js initialization failed because of ${reason}`);
}


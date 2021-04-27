var editor = ace.edit("editor", {
    theme: "ace/theme/tomorrow_night_eighties",
    mode: "ace/mode/html",
    maxLines: 30,
    wrap: true,
    autoScrollEditorIntoView: true,
    fontSize: 20
});

var code = editor.getValue();
var btn = document.querySelector('input');
var txt = document.querySelector('p');
const folder = document.querySelector('.sa');

$('.run').click(function updateBtn() {
  if (editor.getValue().startsWith(' $ django-admin startproject')) {
    oneline = editor.getValue().split('\r')[0];
    projectname = oneline.split(' ')[4];
    editor.setValue(" $ django-admin startproject ");
    editor.insert(" $ django-admin startproject ");
    editor.insert(projectname);
    editor.insert("\r");
    var myTimer = setTimeout(function() {
      editor.insert("Something cool");
      editor.insert("\r");
      folder.classList.add('show');
    }, 3000);
    txt.textContent = '';
    
  } else {
    txt.textContent = '명령어를 확인해주세요.';
  }
});

$('.reset').click(function resetEditor() {
  editor.setValue(" $ \r");
});


(function(public){
    var wysiwyg = document.getElementById('wysiwyg');
    var editor = document.createElement('div');
    editor.setAttribute('contenteditable','true');
    var preview = document.createElement('div');
    preview.setAttribute('contenteditable','true');
    wysiwyg.appendChild(editor);
    wysiwyg.appendChild(preview);

    preview.addEventListener('keyup',function(e){
        console.log(e.target.textContent)
    });
    editor.addEventListener('input',function(e){
        preview.innerHTML = BBParser.BBParserToHtml(e.target.textContent)
    });
    editor.addEventListener('mouseup',function(e){
        //console.log(window.getSelection())
    })
})(window.BBwysiwyg = window.BBwysiwyg || {})

(function(){
    var bbParses = document.getElementsByClassName('bbParses');
    var wysiwyg = document.getElementById('wysiwyg');
    BBparser.BBtoHtml(bbParses)
    BBparser.BBtoHtml(wysiwyg)
    wysiwyg.addEventListener('keydown',function(e){
        console.log(wysiwyg.nodeValue)
    })
    wysiwyg.addEventListener('mouseup',function(e){
        console.log(window.getSelection())
    })
    document.addEventListener('DOMContentLoaded',function(){
            document.body.style.opacity = "1";
    })
  
})()
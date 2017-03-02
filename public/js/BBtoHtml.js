(function(public){
const regexMatch = {
    "url" : /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    "hexaColor" : /^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
    "email" : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    "size" : /^[1-6]$/,
    "text" : /[a-z0-9\s]*/i
}
const BBtoHtmlTags = [
    {
        "regex" : /</g,
        "replace" : function(){
            return "&lt;"
        }
    },
    {
        "regex" : />/g,
        "replace" : function(){
            return "&gt;"
        }
    },
    {
        "regex" : /\[\/?br\/?]/gi,
        "replace" : function(){
            return "<br>";
        }
    },
    {
        "regex" : /\[youtube\=([-_a-z0-9]*)]/gi,
        "replace" : function(res){
            return '<iframe class="youtube "type="text/html" width="640" height="360" src="http://www.youtube.com/embed/'
            + res[1] + '.?rel=0&showinfo=0" frameborder="0"></iframe>'
        }

    },
    {
        "regex" : /\[color=([a-f0-9]{6})\](.*)\[\/color]/ig,
        "replace" : function(res){
            return '<font color="' + res[1] + '"> '+ res[2] + '</font>';
        }
    },
    {
        "regex" : /\[font=([a-z0-9_\.\-\s])*\](.*)\[\/font]/ig,
        "replace" : function(res){
            return '<font face="' + res[1] + '"> '+ res[2] + '</font>';
        }
    },
    {
        "regex" : /\[left\](.*)\[\/left]/ig,
        "replace" : function(res){
            return '<div class="left_text"> '+ res[1] + '</div>';
        }
    },
    {
        "regex" : /\[right\](.*)\[\/right]/ig,
        "replace" : function(res){
            return '<div class="right_text"> '+ res[1] + '</div>';
        }
    },
    {
        "regex" : /\[center\](.*)\[\/center]/ig,
        "replace" : function(res){
            return '<div class="center_text"> '+ res[1] + '</div>';
        }
    },
    {
        "regex" : /\[p\](.*)\[\/p]/ig,
        "replace" : function(res){
            return '<p> '+ res[1] + '</p>';
        }
    },
    {
        "regex" : /\[h1\](.*)\[\/h1]/ig,
        "replace" : function(res){
            return '<h1> '+ res[1] + '</h1>';
        }
    },
    {
        "regex" : /\[h2\](.*)\[\/h2]/ig,
        "replace" : function(res){
            return '<h2> '+ res[1] + '</h2>';
        }
    },
    {
        "regex" : /\[h3\](.*)\[\/h3]/ig,
        "replace" : function(res){
            return '<h3> '+ res[1] + '</h3>';
        }
    },
    {
        "regex" : /\[h4\](.*)\[\/h4]/ig,
        "replace" : function(res){
            return '<h4> '+ res[1] + '</h4>';
        }
    },
    {
        "regex" : /\[h5\](.*)\[\/h5]/ig,
        "replace" : function(res){
            return '<h5> '+ res[1] + '</h5>';
        }
    },
    {
        "regex" : /\[h6\](.*)\[\/h6]/ig,
        "replace" : function(res){
            return '<h6> '+ res[1] + '</h6>';
        }
    },
]

function BBParser(txt){

    for(let i in BBtoHtmlTags){
        let exec;
        while((exec = BBtoHtmlTags[i].regex.exec(txt)) !== null){    
            txt = txt.replace(exec[0],BBtoHtmlTags[i].replace(exec));
        }
    }
    return txt
}
public.BBtoHtml = function(bbParses){
    if(bbParses.constructor.name == "HTMLCollection"){
        for(let i = 0; i< bbParses.length; i++){
            bbParses[i].innerHTML = BBParser(bbParses[i].textContent);
        }
    }else{
        bbParses.innerHTML = BBParser(bbParses.textContent);
    }
}
})(window.BBparser = window.BBparser || {})

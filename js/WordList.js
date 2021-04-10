var WordList=function(){
    var wordDict;
    var playFunction;
    var funcButtons;

    this.cl=function(){
        var e=event.srcElement;
        if (e.className.startsWith("boxed")){
            e=e.children[0];
        }
        if (e.id.startsWith('btn')){
            funcButtons(e.id.substr(3));
            return;
        }
        if (e.className=="title"){
            e=e.parentElement;
        }
        if (e.id.startsWith("pl")){
        //     playFunction(e.id.substr(2));
        // }
        // if (e.className=="table-cell"){
            var s=e.id.substr(2);
            var p=s.indexOf("_");
            if (p==-1)
                playFunction(e.id.substr(2));
            else
            playFunction(s.substr(0,p),s.substr(p+1));
        }
        if (e.className=="closed")
        {
            e.className="open";
        }
        else
            if (e.className=="open")
                e.className="closed";
}
    this.init=function(_wordDict,_playFunction,_funcButtons){
        wordDict=_wordDict;
        playFunction=_playFunction;
        funcButtons=_funcButtons;
		this.domElement = document.createElement( 'div' );
        this.domElement.style="position:fixed;top:0;left:0;right:0;height:0;z-index:0;width:180px";
        this.domElement.className="dg";
        document.body.appendChild( this.domElement );
        this.domElement.addEventListener("click",this.cl);
        this.redraw();
    }

    this.redraw=function(){
        var s="<ul>";
        s+="<li class=folder>" + 
                "<div class=dg><ul class=closed>" + 
                "<li class=title>App Settings</li>" + 
                '<li class="cr">Speed (coming soon)</li>'+
                '<li class="cr">Avatar (coming soon)</li>'+
            "</ul></div></li>";
        s+="<li class=folder>" + 
                "<div class=dg><ul class=closed>" + 
                "<li class=title>Add New Word" + 
                    "<div class='boxedL bcyan' title='Reset'><div id='btnReset'>R</div></div>" + 
                    "<div style='float:right;margin-right:4px;' class=play id='btnPlay' title='Play'></div>" + 
                "</li>" + 
                '<li class="cr"><div class="c" style="width:100%"><input type="text" value="word"></div></li>'+
                '<li class="cr"><div class="c" style="width:100%">' + 
                    "<button id='btnMove'>click to select body joint</button>"+
                '</li>' +
                "<li id=divSteps>" + this.drawSteps(0, "A", true) + "</li>" +
            "</ul></div></li>";

        for(let j=0;j<wordDict.length;j++){
            let word=wordDict[j];
            var p= this.drawSteps(word.p.length, j, false)
            s+="<li class=folder><div class=dg><ul class=closed><li class=title>" + word.t + "  <div style='float:right' class=play id='pl" + j + "'></div></li><li>" + p + "</li></ul></div></li>"
        }
        this.domElement.innerHTML=s + "</ul>";
    }
    this.drawSteps=function(nSteps, j, drawAdd){
        var p="";
        for(let i=0;i<nSteps;i++){
            p+="<div class='boxedR bwhite'><div id='pl" + j + "_" + i + "'>" + i + "</div></div>";
            //p+="<button id=pl" + j + "_" + i + " class=table-cell>" + i + "</button>";
        }
        if (drawAdd){
            //p+="<button id=btnAdd class=table-cell>+</button>";
            p+="<div class='boxedR bplus'><div id='btnAdd' title='Add pose'>+</div></div>";
            if (nSteps>0)
                p+="<div class='boxedR borange' style='margin-left:8px' title='Save'><div id='btnSave'>S</div></div>";
        }
        return p;
    }

    this.update=function(_wordDict){
        wordDict=_wordDict;
        this.redraw();
    }
    this.updateSteps=function(n){
        document.getElementById("divSteps").innerHTML=this.drawSteps(n,"A",true);
    }
}

export {WordList}
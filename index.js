let state = 0;

function statechange(val){
    const btn = document.getElementById("archieve");
    val==1?btn.style.backgroundColor="white":btn.style.backgroundColor="transparent";
}

function show(){
    const menu = document.getElementById("archive-content");
    if(state==0){
        menu.style.right="0%";
        state++;
    }
    else{
        menu.style.right="-28%";
        state--;
    }
        
}
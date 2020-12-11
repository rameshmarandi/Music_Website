
let divlength = document.querySelectorAll('.song').length;
console.log(divlength);

for(let i = 0; i <divlength; i++){
    let demo = document.querySelectorAll('.song')[i].addEventListener("click", playsong); 
    let demo1 = document.querySelectorAll('.song')[i].addEventListener("dblclick", stopsong);    
 
}

        let song1 = new Audio();
        song1.src = "music/m1.mp3";

        
        let song2 = new Audio();
        song2.src = "music/m2.mp3";
        
        let song3 = new Audio();
        song3.src = "music/m3.mp3";
        
        let song4 = new Audio();
        song4.src = "music/m4.mp3";
        
        let song5 = new Audio();
        song5.src = "music/m5.mp3";
       
       

function playsong(){

    const musiclist = this.innerHTML;

    switch(musiclist){
        case "a": {
            song1.play();
            break;
        }
        case "b": {
            song2.play();
            break;
        }
        case "c": {
            song3.play();
            break;
        }
        case "d": {
            song4.play();
            break;
        }
        case "e": {
            song5.play();
            break;
        }
        case "f": {
            song1.play();
            break;
        }
        case "g": {
            song2.play();
            break;
        }
        case "h": {
            song3.play();
            break;
        }
        case "i": {
            song4.play();
            break;
        }

        default: {
            console.log("Invalid input");
        }
    }
   
}
    //Stop Song

    function stopsong(){
        const musiclist = this.innerHTML;

    switch(musiclist){
        case "a": {
            song1.pause();
            break;
        }
        case "b": {
            song2.pause();
            break;
        }
        case "c": {
            song3.pause();
            break;
        }
        case "d": {
            song4.pause();
            break;
        }
        case "e": {
            song5.pause();
            break;
        }
        case "f": {
            song1.pause();
            break;
        }
        case "g": {
            song2.pause();
            break;
        }
        case "h": {
            song3.pause();
            break;
        }
        case "i": {
            song4.pause();
            break;
        }

        default: {
            console.log("Invalid input");
        }
    }

    }
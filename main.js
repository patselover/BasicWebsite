function initializeCanvas(){
    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        images = ['ic_library_music_black_24px.svg',
                  'ic_local_movies_black_24px.svg',
                  'ic_language_black_24px.svg'];
    canvas.addEventListener('click',buttonClick);
    canvas.setAttribute('id', 'menuCanvas');
    $('body').append(canvas);
    drawCanvas('menuCanvas',images);
}

function drawCanvas(canvasName, images){
    let canvas = $('#' + canvasName)[0],
        ctx = canvas.getContext('2d'),
        section = null;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    section = canvas.width / 3;
    for(let i = 0; i < images.length; ++i){
        let image = new Image(100,100);
        image.src = './assets/' + images[i];
        image.onload = function() {
            ctx.drawImage(image,(((i + 1) * section) - section/2) - image.width/2, canvas.height/2 - image.height/2, 100, 100);
        }
    }
}

function buttonClick(canvasName){
    let canvas = $('#menuCanvas')[0];
    if(event.pageX < canvas.width)
        console.log("hello");
}

function load(){
    initializeCanvas();
    window.addEventListener('resize',resize());
}

function resize(){
    let canvas = $('#menuCanvas')[0],
        ctx = canvas.getContext('2d'),
        images = ['ic_library_music_black_24px.svg',
        'ic_local_movies_black_24px.svg',
        'ic_language_black_24px.svg'];;
    canvas.height = document.innerHeight;
    canvas.width = document.innerWidth;
    ctx.clearRect(-2,-2,canvas.width + 4,canvas.height + 4);
    drawCanvas('menuCanvas',images);
}

load();

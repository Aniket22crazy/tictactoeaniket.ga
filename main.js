console.log("tic-tac-toe")
let music=new Audio("music.mp3")
let music2=new Audio("ting.mp3")
let music3=new Audio("gameover.mp3")
let turn ="X"
let gameover =false;
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}
// function to check win
const checkwin = () =>{
    let boxtext =document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,38,81,0],
        [3,4,5,38,253,0],
        [6,7,8,38,425,0],
        [0,3,6,-133,249,90],
        [1,4,7,39 ,249,90],
        [2,5,8,211,249,90],
        [0,4,8,36,249,45],
        [2,4,6,45,249,135]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText =boxtext[e[0]].innerText+ " Won";
            music3.play();
            document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.display ="flex"
            document.querySelector('.imgbox1').getElementsByTagName('img')[0].style.display ="none"
            document.querySelector('.line').style.transform =`translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.display ="block";
            document.querySelector('.imgbox3').getElementsByTagName('img')[0].style.display ="block"
            document.querySelector('.imgbox4').getElementsByTagName('img')[0].style.display ="block"
            document.querySelector('.imgbox5').getElementsByTagName('img')[0].style.display ="block"
            gameover= true;
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn=changeTurn();
            checkwin();
            music2.play();
            if (!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
        }
    }
}) 
});
btn.addEventListener('click',()=>{
    let boxtexts =document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
    });
    turn="X";
    gameover =false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.display ="none"
    document.querySelector('.imgbox3').getElementsByTagName('img')[0].style.display ="none"
    document.querySelector('.imgbox4').getElementsByTagName('img')[0].style.display ="none"
    document.querySelector('.imgbox5').getElementsByTagName('img')[0].style.display ="none"
    document.querySelector('.imgbox1').getElementsByTagName('img')[0].style.display ="flex"
    document.querySelector('.line').style.display ="none";
            
})
music.play()
var sound = document.getElementsByClassName('voice')[0];
sound.addEventListener('click', () => {
        if (document.querySelector('.unmute').getElementsByTagName('img')[0].style.display = "none") {
            document.querySelector('.mute').getElementsByTagName('img')[0].style.display = "none"
            document.querySelector('.unmute').getElementsByTagName('img')[0].style.display = "block"
            music.pause()
        }
        else
            {
                document.querySelector('.mute').getElementsByTagName('img')[0].style.display = "block"
                document.querySelector('.unmute').getElementsByTagName('img')[0].style.display = "none"
                music.play()
            }
    })


var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('night');
})

        
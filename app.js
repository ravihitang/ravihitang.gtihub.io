const sections=document.querySelectorAll('.section');
const sectBtns=document.querySelectorAll('.controls');
const sectbtn=document.querySelectorAll('.control');
const allsections=document.querySelectorAll('.main-content');


function Pagetransistions(){
    for(let i=0;i<sectbtn.length;i++){
        sectbtn[i].addEventListener('click'), () =>{
            let currentBtn=document.querySelectorAll('active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn'
        }
    }
}
Pagetransistions();
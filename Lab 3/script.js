//task1
function HelloName() {
    let Text = document.getElementById ( 'FirstText' ).value;
    document.getElementById('FirstText').value='Hello, ' + Text.toString();
}
//task2
function SwitchText(){
    let Text1=document.getElementById('FirstText').value;
    let Text2=document.getElementById('SecondText').value;
    document.getElementById('FirstText').value=Text2;
    document.getElementById('SecondText').value=Text1;
}
//task3
function PAndS()
{
    let A=parseInt(document.getElementById('FirstNum').value);
    let B=parseInt(document.getElementById('SecondNum').value);
    document.getElementById('Per').innerHTML='Периметр прямокутника';
    document.getElementById('Square').innerHTML='Площа прямокутника';
    let Perim=2*(A+B);
    document.getElementById('PerNum').innerHTML=Perim+' см';
    let S=A*B;
    document.getElementById('SquareNum').innerHTML=S+' см2';
}
//task4
function Speed(){
    let Time=parseFloat(document.getElementById('TimeMove').value);
    let Dist=parseFloat(document.getElementById('Dist').value);
    document.getElementById('TextSpeed').innerHTML='Швидкість руху';
    let Speed=(Dist/1000)/(Time/3600);
    document.getElementById('NumSpeed').innerHTML=Speed+' км/год';
}
//task5
function ColorSwitch()
{
    let HEX=document.getElementById('StartColor').value;
    document.getElementById('test').innerHTML=HEX;
    document.getElementById('BgColor').style.backgroundColor=HEX;
}
//task6
function ChangeIMG()
{
   let Select=document.getElementById('SelectId');
   let IMGRES=document.getElementById('Res');
   if(Select.selectedIndex==0)
   {
       IMGRES.src="img/new-york.jpg"
   }
   else if(Select.selectedIndex==1)
    {
        IMGRES.src="img/los-angeles.jpg"
    }
   else if(Select.selectedIndex==2)
   {
       IMGRES.src="img/chicago.jpg"
   }
}
//task7
function Build()
{
    let floor=parseInt(document.getElementById('Floor').value);
    let price=parseInt(document.getElementById('Price').value);
    if ( price<600000 && (document.getElementById('r3').checked  || (document.getElementById('r1').checked && floor>=2 && floor<=6)) )
    {
        document.getElementById('Res_7').innerHTML='Житло підходить';
    }
    else
        document.getElementById('Res_7').innerHTML = 'Житло не підходить';

}
function HiddeFunc()
{
    document.getElementById('Floor').style.visibility="hidden";
}
 function ShowFunc(){
     document.getElementById('Floor').style.visibility="visible";
 }
//task8
function  GenRandNum()
{
    let num=0;
    num=Math.floor(Math.random() * 1000);
    document.getElementById('RandNum').innerHTML= num;
}
//task9
function Show() {
    let button=document.getElementById('ResButton');
    let text=document.getElementById('Text_9');
    if(button.value=='Show')
    {
        button.value='Hide';
        text.textContent='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
    }
    else
    {
        button.value='Show';
        text.textContent='';
    }
}
//task10
let cheCk = document.querySelector ( 'input[name="ButChoose"]' ).value;
let texts = document.getElementById ( 'Text_10' );
function OpenHtml() {
    texts.textContent = 'HyperText Markup Language (HTML) is the basic scripting language used by web browsers to render pages on the world wide web. HyperText allows a user to click a link and be redirected to a new page referenced by that link.';
}
function  OpenCss() {
    texts.textContent = 'CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features';
}
function  OpenJs()
{
        texts.textContent = 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.';
}
//task11
function AddPro()
{
    if(document.getElementById('ProGresBar').value==100)
    {
        document.getElementById('ProGresBar').value=0;
    }
    document.getElementById('ProGresBar').style.backgroundColor="white";

    if(0<=document.getElementById('ProGresBar').value<30)
    {
        document.getElementById('ProGresBar').style.backgroundColor="red";

    }
    else if(30<=document.getElementById('ProGresBar').value<70) {
        document.getElementById ( 'ProGresBar' ).style.backgroundColor = "yellow";
    }
    document.getElementById('ProGresBar').value+=5;
}
//task12

function LikePlus()
{
    let s=document.getElementById('Like').innerHTML ;
     s=s+1;
     document.getElementById('Like').value=parseInt(s);
}

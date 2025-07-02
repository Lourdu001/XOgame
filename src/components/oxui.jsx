import { useEffect, useState } from 'react'
import '../App.css'
const Oxui = () => {
    const [dis123, setdis123] = useState(false);
    const [dis456, setdis456] = useState(false);
    const [dis789, setdis789] = useState(false);
    const [dis258, setdis258] = useState(false);
    const [dis159, setdis159] = useState(false);
    const [dis357, setdis357] = useState(false);
    const [dis147, setdis147] = useState(false);
    const [dis369, setdis369] = useState(false);
    const [windisplayofX, setwindisplayofX] = useState(null);
    const [windisplayofO, setwindisplayofO] = useState(null);
const winX = () =>{
    if(windisplayofX===null){
       return setwindisplayofX(1);
    }
    setwindisplayofX(windisplayofX+1);
}        
const winO = () =>{
     if(windisplayofO===null){
       return setwindisplayofO(1);
    }
    setwindisplayofO(windisplayofO+1);
}        
    
const [element1, setelement1] = useState(null);
const [element2, setelement2] = useState(null);
const [element3, setelement3] = useState(null);
const [element4, setelement4] = useState(null);
const [element5, setelement5] = useState(null);
const [element6, setelement6] = useState(null);
const [element7, setelement7] = useState(null);
const [element8, setelement8] = useState(null);
const [element9, setelement9] = useState(null);

const elementdefault = () =>{
setelement1(null);
setelement2(null);
setelement3(null);
setelement4(null);
setelement5(null);
setelement6(null);
setelement7(null);
setelement8(null);
setelement9(null);
setchange("X");
setdis123(false);
setdis456(false);
setdis789(false);
setdis258(false);
setdis159(false);
setdis147(false);
setdis357(false);
setdis369(false);
}

const [change, setchange] = useState("X");

useEffect(()=>{
    if(element1!==null){
    if(element1===element2&&element3===element2){
if(element1==="X"){
alert("X wins");
setdis123(true);
winX();
}else{
     alert("O wins");
    setdis123(true);
    winO();
}
    }
    if(element1===element5&&element5===element9){
if(element1==="X"){
    alert("X wins");
setdis159(true);
    winX();
}else{
     alert("O wins");
setdis159(true);
    winO();
}
    }
    if(element1===element4&&element4===element7){
        if(element1==="X"){
            alert("X wins");
setdis147(true);
            winX();
}else{
     alert("O wins");
setdis147(true);
    winO();
}
    }
}
if(element2!==null&&element2===element5&&element5===element8){
     if(element2==="X"){

        alert("X wins");
setdis258(true);
        winX();
}else{
     alert("O wins");
setdis258(true);
     winO();
}
}
if(element3!==null){
    if(element3===element6&&element6===element9){
        if(element3==="X"){

            alert("X wins");
setdis369(true);
            winX();
}else{
     alert("O wins");
setdis369(true);
    winO();
}
    }
    if(element3===element5&&element5===element7){
        if(element3==="X"){
            alert("X wins");
setdis357(true);
winX();
}else{
     alert("O wins");
setdis357(true);
     winO();
}
    }
}
if(element4!==null&&element4===element5&&element5===element6){
      if(element4==="X"){
        alert("X wins");
setdis456(true);
        winX();
}else{
     alert("O wins");
     setdis456(true);
    winO();
}
}

if(element7!==null&&element7===element8&&element8===element9){
      if(element7==="X"){
        alert("X wins");
setdis789(true);
        winX();
}else{
     alert("O wins");
setdis789(true);
     winO();
}
}
if(element1!==null&&element2!==null&&element3!==null&&element4!==null&&element5!==null&&element6!==null&&element7!==null&&element8!==null&&element9!==null){
    elementdefault();
    alert("Draw");
}
    
},[element1,element2,element3,element4,element5,element6,element7,element8,element9]);

return (
<div className='fullscreencss'>
<div className='xoselectioncontainer'>
<div className='xcontainer'>
    X
    <div className='windisplaycss'>{windisplayofX}</div>
</div>
<div className='ocontainer'>
    O
    <div className='windisplaycss'>{windisplayofO}</div>
</div>
</div>
<div className='xoboxcontainer'>

  {!dis147||<div className='line147'></div>}
  {!dis258||<div className='line258'></div>}
  {!dis369||<div className='line369'></div>}

<div className='row1container'>
     
<div className='xosingleboxcontainer' onClick={()=>{
    if(element1===null){
    setelement1(change);
    setchange(change==="X"?"O":"X");
    }
}}>
{element1}
</div>
     {!dis159||
<div className='line159'></div>}
{!dis357||
<div className='line357'></div>}

<div className='xosingleboxcontainer' onClick={()=>{
    if(element2===null){
    setelement2(change);
    setchange(change==="X"?"O":"X");
    }
}}>
{element2}
</div>
<div className='xosingleboxcontainer' onClick={()=>{
        if(element3===null){

    setelement3(change);
    setchange(change==="X"?"O":"X");
        }
}}>
{element3}
</div>{!dis123||
<div className='line'><hr></hr></div>}

</div>

<div className='row1container'>
<div className='xosingleboxcontainer'onClick={()=>{
        if(element4===null){

    setelement4(change);
    setchange(change==="X"?"O":"X");
        }
}}>
{element4}
</div>
<div className='xosingleboxcontainer' onClick={()=>{
        if(element5===null){

    setelement5(change);
    setchange(change==="X"?"O":"X");
        }
}}>
{element5}
</div>
<div className='xosingleboxcontainer' onClick={()=>{
        if(element6===null){

    setelement6(change);
    setchange(change==="X"?"O":"X");
        }
}}>
{element6}
</div>
{!dis456||
<div className='line456'><hr></hr></div>}
</div>

<div className='row1container'>
<div className='xosingleboxcontainer' onClick={()=>{
        if(element7===null){

    setelement7(change);
    setchange(change==="X"?"O":"X");
        }
}}>
{element7}
</div>
<div className='xosingleboxcontainer' onClick={()=>{
        if(element8===null){

    setelement8(change);
    setchange(change==="X"?"O":"X");
        }
}}>
{element8}
</div>
<div className='xosingleboxcontainer' onClick={()=>{
        if(element9===null){

    setelement9(change);
    setchange(change==="X"?"O":"X");
        }
}}>
    {element9}

</div>
{!dis789||
<div className='line789'><hr></hr></div>}
</div>
<div className='resetcontainer'>
<div className='restartcss' onClick={elementdefault}>Restart</div>
</div>
</div>
</div>

)
}

export default Oxui
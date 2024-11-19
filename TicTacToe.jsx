import React, { useState, useRef } from 'react'
import './style.css'

let a=["","","","","","","","",""];
const TicTacToe = () => {
    let x= useRef(null);

    let [c,setC] = useState(0);
    let [lock,setLock] = useState(false); 
    
    const dis = (e,n) => {
        if(lock || a[n]!==""){
            return 0;
        }
        if(c%2 === 0){
            e.target.innerHTML="X";
            a[n]='X';
            setC(++c);
        }
        else{
            e.target.innerHTML="O";
            a[n]='O';
            setC(++c);
        }
        check();
    }

    const check =()=>{
        if(a[0]===a[1] && a[1] === a[2] && a[2]!==""){
            won(a[0]);
        }
        if(a[3]===a[4] && a[4] === a[5] && a[5]!==""){
            won(a[3]);
        }if(a[8]===a[7] && a[7] === a[6] && a[6]!==""){
            won(a[6]);
        }if(a[0]===a[3] && a[3] === a[6] && a[6]!==""){
            won(a[0]);
        }if(a[4]===a[1] && a[1] === a[7] && a[7]!==""){
            won(a[1]);
        }
        if(a[2]===a[5] && a[8] === a[2] && a[2]!==""){
            won(a[2]);
        }
        if(a[0]===a[4] && a[0] === a[8] && a[0]!==""){
            won(a[0]);
        }
        if(a[6]===a[4] && a[4] === a[2] && a[2]!==""){
            won(a[2]);
        }
    }

    const won = (y) => {
        setLock(true);
        x.current.innerHTML="GAME OVER.....!<br> PLAYER "+y+" WON";

    }

    const clear = () => {
        a = ["", "", "", "", "", "", "", "", ""];
        setC(0);
        setLock(false);
        x.current.innerHTML = "Tic Tac Toe in <span>React</span>"; 

        document.querySelectorAll(".box").forEach((box) => {
            box.innerHTML = ""; 
        });
    }
    return(
        <div className='container'>
            <h1 className='title' ref={x}>Tic Tac Toe in <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="box" onClick={(e)=>{dis(e,0)}}></div>
                    <div className="box" onClick={(e)=>{dis(e,1)}}></div>
                    <div className="box" onClick={(e)=>{dis(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="box"onClick={(e)=>{dis(e,3)}}></div>
                    <div className="box"onClick={(e)=>{dis(e,4)}}></div>
                    <div className="box"onClick={(e)=>{dis(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="box" onClick={(e)=>{dis(e,6)}}></div>
                    <div className="box" onClick={(e)=>{dis(e,7)}}></div>
                    <div className="box" onClick={(e)=>{dis(e,8)}}></div>
                </div>
            </div>
            <button className='reset' onClick={(e)=>{clear()}}>Reset</button>
        </div>
    )
}

export default TicTacToe

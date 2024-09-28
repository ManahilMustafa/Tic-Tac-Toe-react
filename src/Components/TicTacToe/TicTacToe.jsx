import React, { useState, useRef } from 'react'; 
import './TicTacToe.css';
import circle_icon from '../Assests/circle.png';
import cross_icon from '../Assests/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [title, setTitle] = useState("Tic Tac Toe Game In React");

    const toggle = (e, num) => {
        if (lock) return;

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
        } else {
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
        }

        setCount(count + 1);
        checkWin();
    };

    const checkWin = () => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (data[a] && data[a] === data[b] && data[b] === data[c]) {
                won(data[a]);
                return;
            }
        }
    };

    const won = (winner) => {
        setLock(true);
        // Use JSX elements to display the message with the image
        setTitle(
            <span>
                Congratulations:{" "}
                <img
                    src={winner === "x" ? cross_icon : circle_icon}
                    alt={`${winner} Wins`}
                    style={{ width: "50px", height: "50px" }}
                />
            </span>
        );
    };


    return (
        <div className='container'>
            {/* Render title directly as JSX instead of a string */}
            <h1 className="title">{title}</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className="reset" onClick={() => window.location.reload()}>
                Reset
            </button>
        </div>
    );
};

export default TicTacToe;

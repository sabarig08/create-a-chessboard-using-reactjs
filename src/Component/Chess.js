import React from "react";
import './Chess.css'
function Chess(){
    return(
        <div>
            <h1>CHESSBOARD</h1>
            <table class="chess-board">
        <tbody>
            <tr>
                <td class="light">♜</td>
                <td class="dark">♞</td>
                <td class="light">♝</td>
                <td class="dark">♛</td>
                <td class="light">♚</td>
                <td class="dark">♝</td>
                <td class="light">♞</td>
                <td class="dark">♜</td>
            </tr>
            <tr>
                <td class="dark">♟</td>
                <td class="light">♟</td>
                <td class="dark">♟</td>
                <td class="light">♟</td>
                <td class="dark">♟</td>
                <td class="light">♟</td>
                <td class="dark">♟</td>
                <td class="light">♟</td>
            </tr>
            <tr>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
            </tr>
            <tr>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
            </tr>
            <tr>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
            </tr>
            <tr>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
                <td class="dark"></td>
                <td class="light"></td>
            </tr>
            <tr>
                <td class="light">♙</td>
                <td class="dark">♙</td>
                <td class="light">♙</td>
                <td class="dark">♙</td>
                <td class="light">♙</td>
                <td class="dark">♙</td>
                <td class="light">♙</td>
                <td class="dark">♙</td>
            </tr>
            <tr>
                <td class="dark">♖</td>
                <td class="light">♘</td>
                <td class="dark">♗</td>
                <td class="light">♕</td>
                <td class="dark">♔</td>
                <td class="light">♗</td>
                <td class="dark">♘</td>
                <td class="light">♖</td>
            </tr>
        </tbody>
    </table>
        </div>
    )
}
export default Chess;
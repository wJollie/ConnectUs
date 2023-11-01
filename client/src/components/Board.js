import React from "react";
import { useState, useEffect } from "react";
import { useChannelStateContext, useChatContext } from "stream-chat-react";
import { Patterns } from "./WinningPattern";
import Square from "./Square";
// Make the Board for the Game

function Board({ result, setResult }) {
  const [board, setBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [player, setPlayer] = useState("👀");
  const [turn, setTurn] = useState("👀");

  const { channel } = useChannelStateContext();
  const { client } = useChatContext();

  useEffect(() => {
    checkWin();
    checkIfTie();
  }, [board]);

  const chooseSquare = async (square) => {
    if (turn === player && board[square] === "") {
      setTurn(player === "👀" ? "👽" : "👀");

      await channel.sendEvent({
        type: "game-move",
        data: { square: square, player: player },
      });

      setBoard(
        board.map((val, idx) => {
          if (idx === square && val === "") {
            return player;
          }
          return val;
        })
      );
    }
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      alert("It's a Tie!");
      setResult({ winner: "None", state: "Tie" });
    }
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        alert("Winner", board[currPattern[0]]);
        setResult({ winner: board[currPattern[0]], state: "Won" });
      }
    });
  };

  channel.on((event) => {
    if (event.type === "game-move" && event.user.id !== client.userID) {
      const currentPlayer = event.data.player === "👀" ? "👽" : "👀";
      setPlayer(currentPlayer);
      setTurn(currentPlayer);
      setBoard(
        board.map((val, idx) => {
          if (idx === event.data.square && val === "") {
            return event.data.player;
          }
          return val;
        })
      );
    }
  });

  return (
    <div className="board">
      <div className="row">
        <Square
          chooseSquare={() => {
            chooseSquare(0);
          }}
          val={board[0]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(1);
          }}
          val={board[1]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(2);
          }}
          val={board[2]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(3);
          }}
          val={board[3]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(4);
          }}
          val={board[4]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(5);
          }}
          val={board[5]}
        />
      </div>
      <div className="row">
        <Square
          chooseSquare={() => {
            chooseSquare(6);
          }}
          val={board[6]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(7);
          }}
          val={board[7]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(8);
          }}
          val={board[8]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(9);
          }}
          val={board[9]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(10);
          }}
          val={board[10]}
        />
        <Square val={board[11]} />
      </div>
      <div className="row">
        <Square
          chooseSquare={() => {
            chooseSquare(12);
          }}
          val={board[12]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(13);
          }}
          val={board[13]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(14);
          }}
          val={board[14]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(15);
          }}
          val={board[15]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(16);
          }}
          val={board[16]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(17);
          }}
          val={board[17]}
        />
      </div>
      <div className="row">
        <Square
          chooseSquare={() => {
            chooseSquare(18);
          }}
          val={board[18]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(19);
          }}
          val={board[19]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(20);
          }}
          val={board[20]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(21);
          }}
          val={board[21]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(22);
          }}
          val={board[22]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(23);
          }}
          val={board[23]}
        />
      </div>
      <div className="row">
        <Square
          chooseSquare={() => {
            chooseSquare(24);
          }}
          val={board[24]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(25);
          }}
          val={board[25]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(26);
          }}
          val={board[26]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(27);
          }}
          val={board[27]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(28);
          }}
          val={board[28]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(29);
          }}
          val={board[29]}
        />
      </div>
      <div className="row">
        <Square
          chooseSquare={() => {
            chooseSquare(30);
          }}
          val={board[30]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(31);
          }}
          val={board[31]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(32);
          }}
          val={board[32]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(33);
          }}
          val={board[33]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(34);
          }}
          val={board[34]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(35);
          }}
          val={board[35]}
        />
      </div>
      <div className="row">
        <Square
          chooseSquare={() => {
            chooseSquare(36);
          }}
          val={board[36]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(37);
          }}
          val={board[37]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(38);
          }}
          val={board[38]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(39);
          }}
          val={board[39]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(40);
          }}
          val={board[40]}
        />
        <Square
          chooseSquare={() => {
            chooseSquare(41);
          }}
          val={board[41]}
        />
      </div>
    </div>
  );
}

export default Board;

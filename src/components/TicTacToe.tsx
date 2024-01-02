import { useState } from "react";

interface IBoard {
  position: number;
  value: string;
  active: boolean;
}

interface IWinningStreak {
  player: number;
  streak: number;
}

const TicTacToe = () => {
  const initialSetup = [
    { position: 0, value: "", active: false },
    { position: 1, value: "", active: false },
    { position: 2, value: "", active: false },
    { position: 3, value: "", active: false },
    { position: 4, value: "", active: false },
    { position: 5, value: "", active: false },
    { position: 6, value: "", active: false },
    { position: 7, value: "", active: false },
    { position: 8, value: "", active: false },
  ];

  const [board, setBoard] = useState<IBoard[]>(initialSetup);
  const [game, setGame] = useState(false);
  const [player, setPlayer] = useState(false);
  //   Handle this better.
  const [streak, setStreak] = useState<IWinningStreak[]>([
    { player: 1, streak: 0 },
    { player: 2, streak: 0 },
  ]);

  const checkWinCases = () => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 4, 7, 2, 5, 8, 0, 4, 8, 9, 4, 8];

    // Vardammt
  };

  const handler = (position: number) => {
    setGame(true);
    let symbol = "O";
    if (player) {
      symbol = "O";
    } else {
      symbol = "X";
    }
    setPlayer(!player);
    let updatedBoard: IBoard[] = board.map((box) =>
      box.position === position
        ? { ...box, value: (box.value = symbol), active: (box.active = true) }
        : box
    );
    setBoard(updatedBoard);
  };

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className=" min-w-96 bg-purple-300 p-3 flex flex-col shadow-xl rounded">
        <div className="ml-1 mb-2 border-b-2">
          <h1>
            {/* This seems like a mess... */}
            Wins: Player 1: {streak[0].streak} Player 2: {streak[1].streak}
          </h1>
        </div>
        <div className="min-w-full p-2 flex-1 flex items-center justify-evenly">
          <div className="min-w-full">
            <div className="grid grid-cols-3 ">
              {board.map((box) => (
                <button
                  key={box.position}
                  onClick={() => {
                    handler(box.position);
                  }}
                  className="max-h-12 min-h-12 text-center border-collapse border-2 border-red-800 m-0.5 rounded-sm hover:bg-sky-500"
                  disabled={box.active}
                >
                  {box.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;

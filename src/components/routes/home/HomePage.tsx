import React, { useEffect, useState } from 'react';
import * as settings from '../../../../settings';
import { Player } from '../../../components/Player';
import { Badge } from '../../../components/Badge';
import { randCharacter, getIcon as getCharacterIcon } from '../../../components/Character';
import { randStage, getIcon as getStageIcon} from '../../../components/Stage';

interface Result {
  stage: string
  winner: 0|1
  points: number
  p1Character: string
  p2Character: string
}

export default function HomePage() {
  const [player1Name, setPlayer1Name] = useState("")
  const [player1Character, setPlayer1Charcter] = useState("")
  const [player2Name, setPlayer2Name] = useState("")
  const [player2Character, setPlayer2Charcter] = useState("")
  const [stage, setStage] = useState("")
  const [results, setResults] = useState([])

  const shuffle = () => {
    // TODO animate shuffle
    setPlayer1Charcter(randCharacter());
    setPlayer2Charcter(randCharacter());
    setStage(randStage);
  }

  const onRecordWinner = (winner: 0|1, points: number) => {
    setResults(results.concat({
      stage, 
      winner,
      points,
      p1Character: player1Character,
      p2Character: player2Character,
    }));
    shuffle();
  }

  const resultPanel = () => {
    return <div className="flex flex-col items-center justify-center">
      <div className="title text-3xl p-2 mt-4">Game {results.length + 1}</div>
      <div className="flex flex-row w-full mb-8">
        <div className="p-4 w-[200px] flex flex-col grow basis-0 items-center justify-center">
          {stage &&
          <button className="title min-w-64 text-2xl bg-teal-500 hover:bg-teal-400 text-white 
            py-4 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded" onClick={() => onRecordWinner(0, 1)}>
          {player1Name}<br/> Wins!
          </button>}
          {stage &&
          <button className="title min-w-64 text-2xl bg-violet-500 hover:bg-violet-400 text-white 
            py-2 px-8 border-b-4 border-violet-700 hover:border-violet-500 rounded" onClick={() => onRecordWinner(0, 2)}>
            +2 
          </button>}
        </div>
        {getStageIcon(stage)}
        <div className="p-4 w-[200px] flex flex-col grow basis-0 items-center justify-center">
          {stage &&
          <button className="title min-w-64 text-2xl bg-teal-500 hover:bg-teal-400 text-white
            py-4 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded" onClick={() => onRecordWinner(1, 1)}>
            {player2Name}<br /> Wins!
          </button>}
          {stage &&
          <button className="title min-w-64 text-2xl bg-violet-500 hover:bg-violet-400 text-white 
            py-2 px-8 border-b-4 border-violet-700 hover:border-violet-500 rounded" onClick={() => onRecordWinner(1, 2)}>
            +2 
          </button>
          }
        </div>
      </div>
      {results.length > 0 && results.map((r: Result, i: number) => { 
        return <div className="flex flex-row items-center justify-center m-1" key={i}>
          {getStageIcon(r.stage, "h-14 w-14 m-4")}
          <Badge isWinner={r.winner === 0} character={r.p1Character} num={0} points={r.points} name={player1Name} />
          <span className="p-2 title text-xl">VS</span>
          <Badge isWinner={r.winner === 1} character={r.p2Character} num={1} points={r.points} name={player2Name} />
          </div>
      })}
    </div>
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="title uppercase text-5xl text-center text-white mb-8">
        {settings.title}
      </h1>
      <div className="p-4 text-gray-300 flex flex-col">
        <div className="flex items-center justify-center m-4">
          <button className="title text-2xl bg-teal-500 hover:bg-teal-400 text-white py-4 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded" onClick={shuffle}>
              Shuffle
          </button>
        </div>
        <div className="flex mb-4 items-center justify-center">
          <Player score={results.reduce((acc, r) => r.winner === 0 ? acc + r.points: acc, 0)}
            character={player1Character} onNameChange={(name: string) => setPlayer1Name(name)}/>
          <span className="title text-8xl">VS</span>
          <Player score={results.reduce((acc, r) => r.winner === 1 ? acc + r.points: acc, 0)}
            character={player2Character} onNameChange={(name: string) => setPlayer2Name(name)}/>
        </div>
        {player1Name && player2Name && resultPanel()}
      </div>
      <div className="mt-32 w-64 flex flex-col items-center justify-center">
        <div className="text-gray-300">Built by blorppppp</div>
        <span><a href="https://www.buymeacoffee.com/blorppppp" target="_blank" rel="noreferrer"
           className="text-gray-400 hover:text-indigo-700 mr-2 hover:underline">
          Buy me a coffee
      </a>☕</span>
      </div>
    </div>
  );
}

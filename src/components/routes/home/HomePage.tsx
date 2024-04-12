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
  p1Character: string // 1 teamed with 3
  p2Character: string // 2 teamed with 4
  p3Character: string
  p4Character: string
}

const TEAM_1_DEFAULT = "Team 1"
const TEAM_2_DEFAULT = "Team 2"
export default function HomePage() {
  const [team1Name, setTeam1Name] = useState(TEAM_1_DEFAULT)
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Name, setTeam2Name] = useState(TEAM_2_DEFAULT)
  const [team2Score, setTeam2Score] = useState(0)
  const [player1Character, setPlayer1Charcter] = useState("")
  const [player2Character, setPlayer2Charcter] = useState("")
  const [player3Character, setPlayer3Charcter] = useState("")
  const [player4Character, setPlayer4Charcter] = useState("")
  const [stage, setStage] = useState("")
  const [tandems, setTandems] = useState(false);
  const [results, setResults] = useState([])

  const shuffle = () => {
    // TODO animate shuffle
    setPlayer1Charcter(randCharacter());
    setPlayer2Charcter(randCharacter());
    if(tandems) {
      setPlayer3Charcter(randCharacter());
      setPlayer4Charcter(randCharacter());
    }
    setStage(randStage);
  }

  const onRecordWinner = (winner: 0|1, points: number) => {
    setResults(results.concat({
      stage, 
      winner,
      points,
      tandems,
      p1Character: player1Character,
      p2Character: player2Character,
      p3Character: player3Character,
      p4Character: player4Character,
    }))
    if(winner === 0) {
      setTeam1Score(team1Score + points)
    }
    if(winner === 1) {
      setTeam2Score(team2Score + points)
    }
    shuffle();
  }

  const changeName1 = (name: string) => {
    if(!name) {
      setTeam1Name(TEAM_1_DEFAULT)
      return
    }
    setTeam1Name(name)
  }

  const changeName2 = (name: string) => {
    if(!name) {
      setTeam2Name(TEAM_2_DEFAULT)
      return
    }
    setTeam2Name(name)
  }


  const resultPanel = () => {
    return <div className="flex flex-col items-center justify-center">
      <div className="title text-3xl p-2 mt-4">Game {results.length + 1}</div>
      <div className="flex flex-row w-full mb-8">
        <div className="p-4 w-[200px] flex flex-col grow basis-0 items-center justify-center">
          {stage &&
          <button className="title min-w-64 text-2xl bg-teal-500 hover:bg-teal-400 text-white 
            py-4 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded" onClick={() => onRecordWinner(0, 1)}>
          {team1Name}<br/> Wins!
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
            {team2Name}<br /> Wins!
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
          <Badge isWinner={r.winner === 0} character={r.p1Character} character2={r.p3Character} num={0} points={r.points} name={team1Name} tandems={tandems} />
          <span className="p-2 title text-xl">VS</span>
          <Badge isWinner={r.winner === 1} character={r.p2Character} character2={r.p4Character} num={1} points={r.points} name={team2Name} tandems={tandems} />
          </div>
      })}
    </div>
  }

  const toggleTandems = () => {
    setTandems(!tandems)
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="flex flex-col items-center justify-center title uppercase text-5xl text-center text-white mb-8">
        <div>Foco {tandems ? <span className="text-red-800 line-through">Randoms</span>: 'Randoms'}</div>
        {tandems && <div>Tandems</div>}
      <label className="relative inline-flex items-center cursor-pointer m-4">
        <input type="checkbox" checked={tandems} onChange={toggleTandems} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
      </label>
      </h1>
      <div className="p-4 text-gray-300 flex flex-col">
        <div className="flex items-center justify-center m-4">
          <button className="title text-2xl bg-teal-500 hover:bg-teal-400 text-white py-4 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded" onClick={shuffle}>
              Shuffle
          </button>
        </div>
        <div className="flex mb-4 items-center justify-center">
          <Player score={team1Score} onScoreChange={setTeam1Score} character={player1Character} character2={player3Character} onNameChange={changeName1} tandems={tandems} />
          <span className="title text-8xl">VS</span>
          <Player score={team2Score} onScoreChange={setTeam2Score} character={player2Character} character2={player4Character} onNameChange={changeName2} tandems={tandems} />
        </div>
        {team1Name && team2Name && resultPanel()}
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

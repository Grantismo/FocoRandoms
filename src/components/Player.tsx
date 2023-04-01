import { getIcon } from './Character';
import { useState } from 'react';

interface Props {
  score: number
  tandems: boolean
  character: string
  character2: string
  onNameChange: (string) => void
  onScoreChange: (number) => void
}

export function Player({
  score,
  character,
  character2,
  onNameChange,
  onScoreChange,
  tandems}: Props) {
  const [name, setName] = useState("")

  const onChange = (event) => {
    setName(event.target.value);
    onNameChange(event.target.value);
  }

  const scoreChange = (event) => {
    const val = parseInt(event.target.value);
    onScoreChange(val || 0)
  }

  const preventNonNumbers = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
        
  return <div className="flex flex-col items-center justify-center">
    {character && <input onKeyPress={preventNonNumbers} className="w-96 text-center title text-9xl bg-transparent focus:outline-none" onChange={scoreChange} value={score} />}
    <input className="text-5xl text-center appearance-none bg-transparent border-none
      w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none w-96"
      value={name} onChange={onChange} type="text" placeholder="player" aria-label="Player name" />
    <div className="h-20 w-20 m-4 flex flex-row items-center justify-center">
      {getIcon(character)}
      {tandems && getIcon(character2)}
    </div>
  </div>
}

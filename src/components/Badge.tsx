import CrownIcon from '../../images/crown.png';
import { getIcon } from './Character';

export const Badge = ({isWinner, character, name, num, points, tandems, character2}: {
  isWinner: boolean,
  character: string,
  character2: string,
  tandems: boolean,
  name: string,
  points: number,
  num: number}) => {
  const color = num ? "#f15959" : "#6565FE";

  const charIcon = () => {
    if(!tandems) {
      return getIcon(character, "absolute left-0 w-8 h-8 -ml-3")
    }
    return (<>
      {getIcon(character, "absolute left-0 top-0 w-8 h-8 -ml-3")}
      {getIcon(character2, "absolute left-0 top-8 w-8 h-8 -ml-3")}
    </>)
  }

  return (
    <div className="relative inline-flex items-center ml-3 bg-white text-xs font-medium p-1 min-w-32" style={{"background": color, "borderRadius": "100px"}}>
      {charIcon()}
      <div style={{"backgroundColor": "rgba(0, 0, 0, 0.4)", "padding": "12px 15px", "borderRadius": "100px"}} className="w-full whitespace-no-wrap text-lg text-white">
        {name}
      </div>
      {isWinner && (
        <div className="absolute -top-2 right-0">
          <img src={CrownIcon} height={32} width={32} />
        </div>
      )}
      {isWinner && points === 2 && (
        <div className="absolute -top-2 right-2">
          <img src={CrownIcon} height={32} width={32} />
        </div>
      )}
    </div>
  );
};

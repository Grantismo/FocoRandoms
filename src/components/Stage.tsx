import BattleFieldIcon from "../../images/stages/battlefield.png"
import BigBlueIcon from "../../images/stages/big_blue.png"
import BrinstarIcon from "../../images/stages/brinstar.png"
import BrinstarDepthsIcon from "../../images/stages/brinstar_depths.png"
import CorneriaIcon from "../../images/stages/corneria.png"
import FinalDestinationIcon from "../../images/stages/final_destination.png"
import FlatZoneIcon from "../../images/stages/flat_zone.png"
import FountainOfDreamsIcon from "../../images/stages/fod.png"
import FoursideIcon from "../../images/stages/fourside.png"
import GreatBayIcon from "../../images/stages/great_bay.png"
import GreenGreensIcon from "../../images/stages/green_greens.png"
import IcicleMountainIcon from "../../images/stages/icicle_mountain.jpeg"
import JungleJapesIcon from "../../images/stages/jungle_japes.png"
import KongoJungleIcon from "../../images/stages/kongo_jungle.png"
import MushroomKingdomIcon from "../../images/stages/mushroom_kingdom.png"
import MushroomKingdomIIIcon from "../../images/stages/mushroom_kingdom_II.png"
import PeachsCastleIcon from "../../images/stages/peachs_castle.jpeg"
import PokeFloatsIcon from "../../images/stages/poke_floats.png"
import PokemonStadiumIcon from "../../images/stages/pokemon_stadium.png"
import RainbowCruiseIcon from "../../images/stages/rainbow_cruise.jpeg"
import VenomIcon from "../../images/stages/venom.png"
import YoshisIslandIcon from "../../images/stages/yoshis_island.png"
import YoshisIsland64Icon from "../../images/stages/yoshis_island_64.png"
import YoshisStoryIcon from "../../images/stages/yoshis_story.png"
import OnettIcon from "../../images/stages/onett.png"
import MuteCityIcon from "../../images/stages/mute_city.png"
import TempleIcon from "../../images/stages/temple.png"
import DreamlandIcon from "../../images/stages/dreamland.png"
import { Tooltip } from "react-tooltip";

const stageNameToIcon = new Map([
  ["FOUNTAIN_OF_DREAMS", FountainOfDreamsIcon],
  ["POKEMON_STADIUM", PokemonStadiumIcon],
  ["PRINCESS_PEACHS_CASTLE", PeachsCastleIcon],
  ["KONGO_JUNGLE", KongoJungleIcon],
  ["BRINSTAR",BrinstarIcon],
  ["CORNERIA",CorneriaIcon],
  ["YOSHIS_STORY",YoshisStoryIcon],
  ["ONETT",OnettIcon],
  ["MUTE_CITY", MuteCityIcon],
  ["RAINBOW_CRUISE", RainbowCruiseIcon],
  ["JUNGLE_JAPES", JungleJapesIcon],
  ["GREAT_BAY", GreatBayIcon],
  ["HYRULE_TEMPLE", TempleIcon],
  ["BRINSTAR_DEPTHS", BrinstarDepthsIcon],
  ["YOSHIS_ISLAND", YoshisIslandIcon],
  ["GREEN_GREENS", GreenGreensIcon],
  ["FOURSIDE", FoursideIcon],
  ["MUSHROOM_KINGDOM_I", MushroomKingdomIcon],
  ["MUSHROOM_KINGDOM_II", MushroomKingdomIIIcon],
  ["VENOM", VenomIcon],
  ["POKE_FLOATS", PokeFloatsIcon],
  ["BIG_BLUE", BigBlueIcon],
  ["ICICLE_MOUNTAIN", IcicleMountainIcon],
  ["FLAT_ZONE", FlatZoneIcon],
  ["DREAM_LAND_N64", DreamlandIcon],
  ["YOSHIS_ISLAND_N64", YoshisIsland64Icon],
  ["KONGO_JUNGLE_N64", KongoJungleIcon],
  ["BATTLEFIELD", BattleFieldIcon],
  ["FINAL_DESTINATION", FinalDestinationIcon]
]);
const stages = [...stageNameToIcon.keys()];

export const getIcon = (name: string, className="h-40 w-40") => {
  const icon = stageNameToIcon.get(name)
  if(!icon) {
    return <span className="title text-8xl">?</span>
  }
  return <img className={className} src={icon} />;
};

export const randStage = () => {
  return stages[Math.floor(Math.random() * stages.length)];
};

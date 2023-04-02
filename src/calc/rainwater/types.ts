type TypeArea = {
  roof: number;
  stone: number;
  lawns: number;
  tracks: number;
  ground: number;
  pavements: number;
  cobblestone: number;
}

type TypeRainFlow = {
  place: number;
  condition: number;
  area: TypeArea;
  intensity: number;
  lengthPipe: number;
  lengthTray: number;
  velocityPipe: number;
  velocityTray: number;
  timeInit: number;
};

type TypeResult = {
  time: {
    timeSumm: number;
    timeInit: number;
    timePipe: number;
    timeTray: number;
  },
  a: number;
  pa: number;
  z: number;
  zMid: number;
  n: number;
  p: number;
  mr: number;
  gamma: number;
  area: TypeArea;
  areaSumm: number;
  flow: number;
  place: number;
  condition: number;
  intensity: number;
  lengthPipe: number;
  lengthTray: number;
  velocityPipe: number;
  velocityTray: number;
};

export default TypeRainFlow;
export { TypeArea, TypeResult };

import places from './places';
import KOEF from './constants';
import TypeRainFlow from './types';

const CONDITIONS = [[0.33, 0.5, 1, 2], [0.5, 1, 1.5, 3], [2, 3, 4, 5]];

export default function getRainFlow({
  place, condition, area, intensity, lengthPipe, lengthTray, velocityPipe, velocityTray, timeInit,
}: TypeRainFlow) {
  const {
    roof, pavements, tracks, ground, cobblestone, stone, lawns,
  } = area;

  let index = intensity >= 60 && intensity < 80 ? 1 : 0;
  if (intensity >= 80 && intensity < 120) {
    index = 2;
  } else if (intensity >= 120) {
    index = 3;
  }

  const { gamma, mr } = places[place];
  const p = CONDITIONS[condition][index];
  const n = p >= 0 ? places[place].n : places[place].n1;
  const pa = 1 + Math.log10(p) / Math.log10(mr);
  const a = intensity * 20 ** n * pa ** gamma;
  let z = 0.32;

  if (a < 300) {
    z = n < 0.65 ? 0.32 : 0.33;
  } else if (a < 400) {
    z = n < 0.65 ? 0.30 : 0.31;
  } else if (a < 500) {
    z = n < 0.65 ? 0.29 : 0.30;
  } else if (a < 600) {
    z = n < 0.65 ? 0.28 : 0.29;
  } else if (a < 700) {
    z = n < 0.65 ? 0.27 : 0.28;
  } else if (a < 800) {
    z = n < 0.65 ? 0.26 : 0.27;
  } else if (a < 1000) {
    z = n < 0.65 ? 0.25 : 0.26;
  } else if (a < 1200) {
    z = n < 0.65 ? 0.24 : 0.25;
  } else if (a < 1500) {
    z = n < 0.65 ? 0.23 : 0.24;
  }

  const timePipe = 0.017 * (lengthPipe / velocityPipe);
  const timeTray = 0.021 * (lengthTray / velocityTray);
  const timeSumm = timeInit + timePipe + timeTray;
  const areaSumm = roof + pavements + tracks + ground + cobblestone + stone + lawns;
  const zMid = (roof * z + pavements * KOEF.PAVEMENTS + tracks * KOEF.TRACKS
    + ground * KOEF.GROUND + cobblestone * KOEF.COBBLESTONE + stone * KOEF.STONE
    + lawns * KOEF.LAWNS) / areaSumm;
  const flow = (zMid * (a ** 1.2) * areaSumm) / (timeSumm ** (1.2 * n - 0.1));

  return {
    a,
    pa,
    z,
    zMid,
    n,
    p,
    mr,
    gamma,
    areaSumm,
    flow,
    place,
    condition,
    intensity,
    lengthPipe,
    lengthTray,
    velocityPipe,
    velocityTray,
    time: {
      timeSumm, timeInit, timePipe, timeTray,
    },
    area: {
      roof, stone, lawns, tracks, ground, pavements, cobblestone,
    },
  };
}

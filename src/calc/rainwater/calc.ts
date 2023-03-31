/* eslint-disable max-len */
const koef1 = 0.95;
const koef2 = 0.6;
const koef3 = 0.45;
const koef4 = 0.4;
const koef5 = 0.3;
const koef6 = 0.2;
const koef7 = 0.1;

export default function getRainFlow({
  roof, pavements, tracks, ground, cobblestone, stone, lawns, place, p, _n, intensity, t,
  c = 1, hd = 1, _tau = 1, _plim = 1,
}: any) {
  // : {
  //   roof: number,
  //   pavements: number,
  //   tracks: number,
  //   ground: number,
  //   cobblestone: number,
  //   stone: number,
  //   lawns: number,
  //   place: number,
  //   p: number,
  //   _n: number,
  //   intensity: number,
  //   t: number,

  //   c: number,
  //   hd: number,
  //   _tau: number,
  //   _plim: number
  // }

  let n = _n;
  let tau = _tau;
  let plim = _plim;

  if (c < 1) {
    tau = 0.2;
  } else if (c === 1) {
    tau = 0.24;
  } else if (c === 1.2) {
    tau = 0.27;
  }

  if (place === 1) {
    if (p >= 1) {
      n = 0.4;
    } else {
      n = 0.35;
    }
  } else if (place === 2) {
    if (p >= 1) {
      n = 0.62;
    } else {
      n = 0.48;
    }
  } else if (place === 3) {
    if (p >= 1) {
      n = 0.71;
    } else {
      n = 0.59;
    }
  } else if (place === 4) {
    if (p >= 1) {
      n = 0.71;
    } else {
      n = 0.59;
    }
  } else if (place === 5) {
    if (p >= 1) {
      n = 0.67;
    } else {
      n = 0.57;
    }
  } else if (place === 6) {
    if (p >= 1) {
      n = 0.65;
    } else {
      n = 0.66;
    }
  } else if (place === 7) {
    if (p >= 1) {
      n = 0.7;
    } else {
      n = 0.66;
    }
  } else if (place === 8) {
    if (p >= 1) {
      n = 0.63;
    } else {
      n = 0.56;
    }
  } else if (place === 9) {
    if (p >= 1) {
      n = 0.72;
    } else {
      n = 0.58;
    }
  } else if (place === 10) {
    if (p >= 1) {
      n = 0.61;
    } else {
      n = 0.48;
    }
  } else if (place === 11) {
    if (p >= 1) {
      n = 0.49;
    } else {
      n = 0.33;
    }
  } else if (place === 12) {
    if (p >= 1) {
      n = 0.69;
    } else {
      n = 0.47;
    }
  } else if (place === 13) {
    if (p >= 1) {
      n = 0.48;
    } else {
      n = 0.36;
    }
  } else if (place === 14) {
    if (p >= 1) {
      n = 0.6;
    } else {
      n = 0.52;
    }
  } else if (place === 15) {
    if (p >= 1) {
      n = 0.65;
    } else {
      n = 0.54;
    }
  } else if (place === 16) {
    if (p >= 1) {
      n = 0.36;
    } else {
      n = 0.48;
    }
  } else if (place === 17) {
    if (p >= 1) {
      n = 0.36;
    } else {
      n = 0.31;
    }
  } else if (place === 18) {
    if (p >= 1) {
      n = 0.28;
    } else {
      n = 0.26;
    }
  } else if (place === 19) {
    if (p >= 1) {
      n = 0.35;
    } else {
      n = 0.28;
    }
  } else if (place === 20) {
    if (p >= 1) {
      n = 0.65;
    } else {
      n = 0.57;
    }
  } else if (place === 21) {
    if (p >= 1) {
      n = 0.45;
    } else {
      n = 0.44;
    }
  } else if (place === 22) {
    if (p >= 1) {
      n = 0.57;
    } else {
      n = 0.52;
    }
  }

  if (hd < 250) {
    plim = 0.2;
  } else if (hd >= 250 && hd < 400) {
    plim = 0.15;
  } else if (hd >= 400 && hd < 500) {
    plim = 0.1;
  } else if (hd >= 500 && hd < 750) {
    plim = 0.075;
  } else if (hd >= 750) {
    plim = 0.05;
  }

  const f = roof + pavements + tracks + ground + cobblestone + stone + lawns;
  const tmid = (roof * koef1 + pavements * koef2 + tracks * koef3 + ground * koef4 + cobblestone * koef5 + stone * koef6 + lawns * koef7) / f;
  const qlim = (tmid * (20 ** n) * intensity * (plim ** (1 / 3) - tau) * f) / ((1 - tau) * t ** n);

  console.log(qlim);
}

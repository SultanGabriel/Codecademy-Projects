// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

function toggleDrum(instrument, index) {
  if (index > 15 || index < 0) {
    return;
  }
  if (instrument === "kicks") {
    kicks[index] = !kicks[index];
  } else if (instrument === "snares") {
    snares[index] = !snares[index];
  } else if (instrument === "hiHats") {
    hiHats[index] = !hiHats[index];
  } else if (instrument === "rideCymbals") {
    rideCymbals[index] = !rideCymbals[index];
  }
}

function clear(instrument) {
  if (instrument === "kicks") {
    kicks = new Array(16).fill(false);
  } else if (instrument === "snares") {
    snares = new Array(16).fill(false);
  } else if (instrument === "hiHats") {
    hiHats = new Array(16).fill(false);
  } else if (instrument === "rideCymbals") {
    rideCymbals = new Array(16).fill(false);
  }
}

function invert(instrument) {
  if (instrument === "kicks") {
    for (let i = 0; i < 16; i++) {
      kicks[i] = !kicks[i];
    }
  } else if (instrument === "snares") {
    for (let i = 0; i < 16; i++) {
      snares[i] = !snares[i];
    }
  } else if (instrument === "hiHats") {
    for (let i = 0; i < 16; i++) {
      hiHats[i] = !hiHats[i];
    }
  } else if (instrument === "rideCymbals") {
    for (let i = 0; i < 16; i++) {
      rideCymbals[i] = !rideCymbals[i];
    }
  }
}

function getNeighborPads(x, y, size) {
  let neighbors = [];
  if (x >= size || y >= size || x < 0 || y < 0) {
    return neighbors;
  }

  // left

  if (x - 1 >= 0) {
    neighbors.push([x - 1, y]);
  }

  // right

  if (x + 1 < size) {
    neighbors.push([x + 1, y]);
  }

  // above

  if (y - 1 >= 0) {
    neighbors.push([x, y - 1]);
  }

  // below

  if (y + 1 < size) {
    neighbors.push([x, y + 1]);
  }

  return neighbors;
}

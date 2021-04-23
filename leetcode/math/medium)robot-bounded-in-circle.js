/**
 * On an infinite plane, a robot initially stands at (0, 0) and faces north.
 * The robot can receive one of three instructions:
 * "G": go straight 1 unit;
 * "L": turn 90 degrees to the left;
 * "R": turn 90 degrees to the right.
 *
 * The robot performs the instructions given in order, and repeats them forever.
 *
 * Return true if and only if there exists a circle in the plane such that the
 * robot never leaves the circle.
 */

/**
 * ex)
 * input: instructions = "GGLLGG"
 * output: true
 *
 * robot moves from [0, 0] to [0, 2], turn 180 degrees,
 * returns to [0, 0]
 */

function solution(instructions) {
  const currentLoc = [0, 0];
  let direction = "U";
  const moveMap = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0]
  };
  const directionsMap = {
    U: {
      L: "L",
      R: "R"
    },
    D: {
      L: "R",
      R: "L"
    },
    L: {
      L: "D",
      R: "U"
    },
    R: {
      L: "U",
      R: "D"
    }
  };
  for (let i = 0; i < instructions.length; i++) {
    const curerntInstruction = instructions[i];
    if (curerntInstruction === "G") {
      currentLoc[0] += moveMap[direction][0];
      currentLoc[1] += moveMap[direction][1];
      continue;
    }
    direction = directionsMap[direction][curerntInstruction];
  }

  if (currentLoc[0] + currentLoc[1] === 0) {
    return true;
  }
  // if one cycle didnt return to the origin, as long as the direction changed
  // it will return after another 3 cycles
  if (direction === "U") {
    return false;
  }
  return true;
}

const result = solution("GGLLGG");
result; // true;

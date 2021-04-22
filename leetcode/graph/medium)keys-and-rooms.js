/**
 * There are N rooms and you start in room 0.  Each room has a distinct number
 * in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room.
 *
 * Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is
 * an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v
 * opens the room with number v.
 *
 * Initially, all the rooms start locked (except for room 0).
 * You can walk back and forth between rooms freely.
 *
 * Return true if and only if you can enter every room.
 */

/**
 * ex1)
 * input: [[1], [2], [3], []]
 * output: true
 *
 * start from room 0, pick up key 1
 * go to room 1, pick up key 2
 * go to room 2, pick up key 3
 * go to room 3, all rooms are open
 *
 * ex2)
 * input: [[1, 3], [3, 0, 1], [2], [0]]
 * output: false
 * start from room 0, pick up key 1 and 3
 * go to room 1, pick up key 3, 0, and 1
 * go to room 3, pick up key 0
 * ....
 * cant go to room 2
 */

function solution(rooms) {
  const visit = new Set();

  const aux = roomIdx => {
    visit.add(roomIdx);
    let accessibleRooms = rooms[roomIdx];
    for (const room of accessibleRooms) {
      if (!visit.has(room)) {
        aux(room);
      }
    }
  };

  aux(0);

  return visit.size === rooms.length;
}

const result = solution([[1], [2], [3], []]);
result; // true

const result2 = solution([[1, 3], [3, 0, 1], [2], [0]]);
result2; // false

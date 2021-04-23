/**
 * You are given a list of airline tickets where tickets[i] = [fromi, toi]
 * represent the departure and the arrival airports of one flight.
 *
 * Reconstruct the itinerary in order and return it.
 *
 * All of the tickets belong to a man who departs from "JFK", thus, the i
 * tinerary must begin with "JFK". If there are multiple valid itineraries,
 * you should return the itinerary that has the smallest lexical order when
 * read as a single string.
 */

/**
 * ex)
 * input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
 * output: ["JFK","MUC","LHR","SFO","SJC"]
 *
 *    MUC --> LHR --> SFO
 *     ^               |
 *     |               v
 *    JFK             SJC
 */

function solution(tickets) {
  // build map to store departure location and destination arr
  const map = {};
  const res = [];
  for (let i = 0; i < tickets.length; i++) {
    const [departure, destination] = tickets[i];
    if (map[departure]) {
      map[departure].push(destination);
    } else {
      map[departure] = [destination];
    }
  }
  // sort the destinations arr
  for (let location in map) {
    map[location].sort();
  }

  const dfs = node => {
    // find the destinations of current node
    const destinations = map[node];
    // if there are any places to go
    // do a recursive call with the 1st element (queue style)
    while (destinations && destinations.length > 0) {
      dfs(destinations.shift());
    }
    res.push(node);
  };

  dfs("JFK");
  return res.reverse();
}

const result = solution([
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"]
]);
result; // ["JFK","MUC","LHR","SFO","SJC"]

const result2 = solution([
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"]
]);
result2; // ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]

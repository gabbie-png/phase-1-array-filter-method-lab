// Code your solution here

const { match } = require("sinon");

function findMatching(arr, string) {
  console.log(arr)
  console.log(string.toLowerCase())

  const matchName = arr.filter((name) => name.toLowerCase() === string.toLowerCase());
  return matchName;
}

function fuzzyMatch(arr, string){
  return arr.filter (function(match) {
  
    return match.toLowerCase().indexOf(string.toLowerCase()) === 0;
  })

}


function matchName(arr, str) {
  return arr.filter( x => x.name === str)
}

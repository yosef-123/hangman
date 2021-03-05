//this function will return a array with all the occurrences of the searchValue or just a array with -1 if none are found
const searchMultipleOccurrences = (string,searchValue)=>{
  var searchPos = 0;
  var positions = [];
  while(1){
    var pos = string.indexOf(searchValue,searchPos)
    if(pos == -1){// this will work once you finish checking the string
      console.log('break')
      break;//leave while loop
    }
    searchPos = pos+1//since you checked the returned position
    console.log('search pos ',searchPos)
    positions.push(pos)
  }
  if(positions.length == 0){positions.push(-1)}
  return positions;
}

export default searchMultipleOccurrences
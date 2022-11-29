//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  return[managerName,
    managerAge,
    currentTeam,
    trophiesWon]
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation){
  if(formation.length == 0){
    return null
  }
  return {
    defender : formation[0],
    midfield : formation[1],
    forward : formation[2]
  }
}

//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let debutArray = [];
  players.forEach((player) => {
    if(player.debut == year){
      debutArray.push(player)
    }
  })
  return debutArray;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  let positionArray = [];
  players.forEach((player) => {
    if(player.position == position){
      positionArray.push(player)
    }
  })
  return positionArray;
}


//Progression 5 - Filter players that have won ______ award

function filterByAward(award){
  let awardArray = [];
  players.forEach((player) => {
    player.awards.forEach((e) => {
      if(e.name == award){
        awardArray.push(player)
      }
    })
  })
  return awardArray;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,number){
  let arr = [];
  players.forEach(function(player){
    let count=0;
    player.awards.forEach(function(award){
      if(award.name === awardName){
        count++;
      }
    })

    if(count == number){
      arr.push(player)
    }
  })
  return arr
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  let arr = [];
  players.forEach(function(player){
    let found = false;
    if(player.country == country){
      player.awards.forEach(function(award){
        if(award == awardName){
          found = true;
        }
      })
    }
    if(found){
      arr.push(player)
    }
  })
  return arr;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(number, team, age){
  let arr = [];
  players.forEach(function(player){
    let count = 0;
    player.awards.forEach(function(){
      count++
    })
    if(count>=number && player.team == team && player.age<=age){
      arr.push(player)
    }
  })
  return arr;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

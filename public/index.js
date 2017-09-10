// Some people say that football is all about the glory of winning trophys. Some people are wrong. 
// Football is about preparing you for the disapointments life has to throw at you, and few teams 
// have prepared their fans better than Aston Villa in 2015/16. This is their story. 

var app = function(){
    urlLeagueTable2015 = "http://api.football-data.org/v1/competitions/398/leagueTable"
    urlFixtures2015 = "http://api.football-data.org/v1/competitions/398/fixtures"
    makeRequestLeagueTable(urlLeagueTable2015, requestCompleteLeagueTable);
    makeRequestFixtures(urlFixtures2015, requestCompleteFixtures);
    
    var dropDown = document.getElementById('choose-game');
    dropDown.addEventListener('change', populateGameData); 
}

// Refactor the requests to roll into one?

// League Table makeRequest and requestComplete
var makeRequestLeagueTable = function(url, callback){
    var request = new XMLHttpRequest;
    request.open('GET', url);
    request.setRequestHeader('X-Auth-Token', "e90e9062cabd428182aed10efafd0d93");
    request.addEventListener('load', callback);
    request.send();
}

var requestCompleteLeagueTable = function(){
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var leagueTable2015 = JSON.parse(jsonString);
    // console.log(leagueTable2015);
    return leagueTable2015;
}

// Fixtures makeRequest and requestComplete
var makeRequestFixtures = function(url, callback){
    var request = new XMLHttpRequest;
    request.open('GET', url);
    request.setRequestHeader('X-Auth-Token', "e90e9062cabd428182aed10efafd0d93");
    request.addEventListener('load', callback);
    request.send();
}

var requestCompleteFixtures = function(){
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var fixtures2015 = JSON.parse(jsonString);
    console.log(fixtures2015);
    populateDropDown(fixtures2015);
}

var populateDropDown = function(fixturesObject){
    var dropDown = document.getElementById('choose-game'); 
    fixturesObject.fixtures.forEach(function(fixture){
        if (fixture.awayTeamName === "Aston Villa FC" || fixture.homeTeamName === "Aston Villa FC"){
            var opt = document.createElement("option");
            opt.innerText = "Game: " + fixture.matchday + " " + fixture.homeTeamName + " " + "vs. " + fixture.awayTeamName;
            opt.value = fixture.matchday
            dropDown.appendChild(opt);
        } 
    });
}

var populateGameData = function(){
    console.log(this);
}

// homeTeamNameP.innerText = fixture.homeTeamName
// homeTeamNameP.innerHTML = fixture;
// opt.innerText = "Matchday: " + fixture.matchday;
// var showGameResults = function(fixturesObject)
// var homeTeamNameP = document.getElementById('home-team-name');
// dropDown.addEventListener('change', showGameResults);
// var showGameResults = function(){
//     var dropDown = document.getElementById('choose-game');
//     var homeTeamName = document.getElementById('home-team-name');
//     homeTeamName.innerHTML = dropDown.homeTeamName;
    
// };

window.addEventListener('load', app);
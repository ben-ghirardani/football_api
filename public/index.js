var myFixtures = [];
// var currentMatchday = null;

var app = function(){
    urlLeagueTable2015 = "http://api.football-data.org/v1/competitions/398/leagueTable"
    urlFixtures2015 = "http://api.football-data.org/v1/competitions/398/fixtures"
    makeRequestLeagueTable(urlLeagueTable2015, requestCompleteLeagueTable);
    makeRequestFixtures(urlFixtures2015, requestCompleteFixtures);
    
    var dropDown = document.getElementById('choose-game');
    dropDown.addEventListener('change', populateGameData); 

    // var button = document.querySelector('button');
    // button.addEventListener('click', handleButtonClick());
}

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
    populateDropDown(fixtures2015);
    console.log(fixtures2015);
}

var populateDropDown = function(fixturesObject){
    var dropDown = document.getElementById('choose-game'); 
    fixturesObject.fixtures.forEach(function(fixture){
        if (fixture.awayTeamName === "Aston Villa FC" || fixture.homeTeamName === "Aston Villa FC"){
            var opt = document.createElement("option");
            opt.innerText = "Game: " + fixture.matchday + " " + fixture.homeTeamName + " " + "vs. " + fixture.awayTeamName;
            opt.value = fixture.matchday
            dropDown.appendChild(opt);
            myFixtures.push(fixture);
        } 
    });
}

var populateGameData = function(){
    var selectedMatchday = this.value;
    currentMatchday = this.value;
    var homeTeam = document.getElementById('home-team-name');
    var homeScore = document.getElementById('home-team-score');
    var awayTeam = document.getElementById('away-team-name');
    var awayScore = document.getElementById('away-team-score');
    var currentGame = myFixtures[selectedMatchday - 1];
    homeTeam.innerText = currentGame.homeTeamName;
    homeScore.innerText = currentGame.result.goalsHomeTeam;
    awayTeam.innerText = currentGame.awayTeamName;
    awayScore.innerText = currentGame.result.goalsAwayTeam;
}

// var handleButtonClick = function(){
//     console.log("clicked!");
// }

window.addEventListener('load', app);
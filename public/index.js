// Some people say that football is all about the glory of winning trophys. Some people are wrong. 
// Football is about preparing you for the disapointments life has to throw at you, and few teams 
// have prepared their fans better than Aston Villa in 2015/16. This is their story. 

var app = function(){
    urlLeagueTable2015 = "http://api.football-data.org/v1/competitions/398/leagueTable"
    urlFixtures2015 = "http://api.football-data.org/v1/competitions/398/fixtures"
    makeRequestLeagueTable(urlLeagueTable2015, requestCompleteLeagueTable);
    makeRequestFixtures(urlFixtures2015, requestCompleteFixtures);
    
}

// get it into a list


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
    console.log(leagueTable2015);
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
    return fixtures2015;
}

// var populateChooseGameDropDown = function(fixtures){
//     var dropDown = document.getElementById('choose-game'); 
//     fixtures.forEach(function(fixture){
//         if (fixture.awayTeamName === "Aston Villa FC" || fixture.homeTeamName === "Aston Villa FC"){
//             var opt = document.createElement("option");
//             opt.innerHTML = fixture;
//             opt.innerText = "Matchday: " + fixture.matchday;
//             dropDown.appendChild(opt);
//         }
//     });
// }

window.addEventListener('load', app);
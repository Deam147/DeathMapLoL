var contador = 0

var championTopBlue,championJungleBlue,championMidBlue,championAdcBlue,championSupportBlue;
var championTopRed,championJungleRed,championMidRed,championAdcRed,championSupportRed;

var playerTopBlue,playerJungleBlue,playerMidBlue,playerAdcBlue,playerSupportBlue;
var playerTopRed,playerJungleRed,playerMidRed,playerAdcRed,playerSupportRed;

var playersNames = []
var championsNames = []

function minutesToTime(minutes) {



  time = new Date((minutes / 60000) * 60 * 1000).toISOString().substr(11, 8);


  return time;
}


function getNames(match){
    
  var url="./jsonData/"+match+"data.json"


    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);


        var summaryData = data

        
    // Players Blue Side
    playerTopBlue = summaryData["participants"][0]["summonerName"];
    playerJungleBlue = summaryData["participants"][1]["summonerName"];
    playerMidBlue = summaryData["participants"][2]["summonerName"];
     playerAdcBlue = summaryData["participants"][3]["summonerName"];
     playerSupportBlue = summaryData["participants"][4]["summonerName"];
//
    //Players RedSide

    playerTopRed = summaryData["participants"][5]["summonerName"];
    playerJungleRed = summaryData["participants"][6]["summonerName"];
    playerMidRed = summaryData["participants"][7]["summonerName"];
    playerAdcRed = summaryData["participants"][8]["summonerName"];
    playerSupportRed = summaryData["participants"][9]["summonerName"];

    // Champions Blue Side
    championTopBlue = summaryData["participants"][0]["championName"];
    championJungleBlue = summaryData["participants"][1]["championName"];
    championMidBlue = summaryData["participants"][2]["championName"];
    championAdcBlue = summaryData["participants"][3]["championName"];
    championSupportBlue = summaryData["participants"][4]["championName"];

    //Champions RedSide

    championTopRed = summaryData["participants"][5]["championName"];
    championJungleRed = summaryData["participants"][6]["championName"];
    championMidRed = summaryData["participants"][7]["championName"];
    championAdcRed = summaryData["participants"][8]["championName"];
    championSupportRed = summaryData["participants"][9]["championName"];


    console.log(playerTopBlue)
    console.log(championTopBlue)
    console.log(playerTopRed)
    console.log(championTopRed)

    // Players Blue Side
    playersNames[1] = summaryData["participants"][0]["summonerName"];
    playersNames[2] = summaryData["participants"][1]["summonerName"];
    playersNames[3] = summaryData["participants"][2]["summonerName"];
    playersNames[4] = summaryData["participants"][3]["summonerName"];
    playersNames[5] = summaryData["participants"][4]["summonerName"];
//
    //Players RedSide

    playersNames[6] = summaryData["participants"][5]["summonerName"];
    playersNames[7] = summaryData["participants"][6]["summonerName"];
    playersNames[8] = summaryData["participants"][7]["summonerName"];
    playersNames[9] = summaryData["participants"][8]["summonerName"];
    playersNames[10] = summaryData["participants"][9]["summonerName"];

    // Champions Blue Side
    championsNames[1] = summaryData["participants"][0]["championName"];
    championsNames[2] = summaryData["participants"][1]["championName"];
    championsNames[3] = summaryData["participants"][2]["championName"];
    championsNames[4] = summaryData["participants"][3]["championName"];
    championsNames[5] = summaryData["participants"][4]["championName"];

    //Champions RedSide

    championsNames[6] = summaryData["participants"][5]["championName"];
    championsNames[7] = summaryData["participants"][6]["championName"];
    championsNames[8] = summaryData["participants"][7]["championName"];
    championsNames[9] = summaryData["participants"][8]["championName"];
    championsNames[10] = summaryData["participants"][9]["championName"];

    })



  }

function getTimeline(){

  fetch("./jsonData/ESPORTSTMNT03_2780949timeline.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);

      var timelineData = data
    
  })
    
  return new Promise(function(resolve, reject) {
    console.log("Envia coordenadas")
    setTimeout(function() {
      resolve(timelineData);
    }, Math.random() * 2000);
  })



}

async function getJson() {
    const response = await fetch('./ESPORTSTMNT03_2780949timeline.json');
    const data = await response.json();
    return data;
}

async function getCoordsAsync(){
  const cords = await getCoords();

  return cords;

}


function getCoords(playerSelect,match){
  var url="./jsonData/"+match+"timeline.json"

  const coords = [];
  var victims = [];
  var textChampionKill = ""
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);


//printing complete data1
        var timelineData = data

console.log(timelineData);


    console.log("Timeline: " + timelineData["frames"])


    for (let i = 2; i < timelineData["frames"].length; i++) {
        // console.log("frame: "+ i)
        // console.log("frame length: "+ timelineData["frames"][i]["events"].length)

        for (let y = 0; y < timelineData["frames"][i]["events"].length; y++) {

            //  console.log("event: "+y)

            if (timelineData["frames"][i]["events"][y]["type"] == "CHAMPION_KILL") {

                console.log("found kill de: " + timelineData["frames"][i]["events"][y]["participantId"])
                victims.push(timelineData["frames"][i]["events"][y]["victimId"])

                if (timelineData["frames"][i]["events"][y]["victimId"] == playerSelect) {

                  var killerId = timelineData["frames"][i]["events"][y]["killerId"]

                  var victimId = timelineData["frames"][i]["events"][y]["victimId"]
                  var timeKill = minutesToTime(timelineData["frames"][i]["events"][y]["timestamp"])

                  var imageKiller = "<img class='imageChampion' src='https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/"+championsNames[killerId]+".png'></img>"
                  var imageVictim = "<img class='imageChampion' src='https://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/"+championsNames[victimId]+".png'></img>"

                    //console.log("found death jungle red")
                    textChampionKill =imageKiller+"<span class='champKills'>"+playersNames[killerId] + " Killed " + playersNames[victimId]+"<span>"+imageVictim  + "<br>" + "<p class='timer'>" + timeKill + "<p>";


                  console.log("leyenda: " + textChampionKill)

                    coords.push([timelineData["frames"][i]["events"][y]["position"]["x"],timelineData["frames"][i]["events"][y]["position"]["y"],textChampionKill])


                }


            }


        }

    }
    console.log("victims: "+ victims)

    console.log(coords)

    })

   // test(coords)
   //return coords;
   return new Promise(function(resolve, reject) {
    console.log("Envia coordenadas")
    setTimeout(function() {
      resolve(coords);
    }, Math.random() * 2000);
  })
                    
}


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}



async function test(coordenadas) {


  const cords = coordenadas

  console.log("test: " +  cords)
  console.log(cords)

  //Tooltip


  // create a tooltip
  var Tooltip = d3.select("#map")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip").attr("id", contador)
    .style("background-color", "black")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px").style("position", "absolute").style("z-index", "5")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    Tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    Tooltip
      .html(d[2]).style("color", "white")
      .style("left", (d3.mouse(this)[0]+100)+468 + "px")
      .style("top", (d3.mouse(this)[1]) + "px").style("display", "block")
  }
  var mouseleave = function(d) {
    Tooltip
      .style("opacity", 0).style("display", "none")
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }


  //

 var mapCords = cords,
    // Domain for the current Summoner's Rift on the in-game mini-map
    domain = {
      min: { x: -120, y: -120 },
      max: { x: 14870, y: 14980 },
    },
    width = 512,
    height = 512,
    bg = "http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png",
    championdead = "https://raw.communitydragon.org/12.13/game/assets/ux/minimap/icons/champion_dead.png",
    xScale,
    yScale,
    svg;
  const steelblue = d3.rgb("steelblue");
  color = d3.scale
    .linear()
    .domain([0, 3])
    .range(["red", "red"])
    .interpolate(d3.interpolateLab);

  xScale = d3.scale
    .linear()
    .domain([domain.min.x, domain.max.x])
    .range([0, width]);

  yScale = d3.scale
    .linear()
    .domain([domain.min.y, domain.max.y])
    .range([height, 0]);

  svg = d3
    .select("#map")
    .append("svg:svg")
    .attr("width", width)
    .attr("height", height).attr("class", "centerImg").attr("id", contador);

  svg
    .append("image")
    .attr("xlink:href", bg)
    .attr("x", "0")
    .attr("y", "0")
    .attr("width", width)
    .attr("height", height);

  svg
    .append("svg:g")
    .selectAll("circle")
    .data(cords)
    .enter()
    .append("svg:circle")
    .attr("cx", function (d) {
      return xScale(d[0]);
    })
    .attr("cy", function (d) {
      return yScale(d[1]);
    })
    .attr("r", 5)
    .attr("class", "kills").style("z-index", "6")
    .style("fill", "#FF0000").on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);


    console.log("Coordenadas en mapa: " + cords)
//console.log("Coordenadas de timeline: " + getCoordsAsync())

}

async function run(){
  var matchSelector = document.getElementById('matches').value;

  getNames(matchSelector);
  if(contador >= 1){
    deleteMap(contador-1)
  const boxes = Array.from(document.getElementsByClassName('centerImg'));

  boxes.forEach(box => {
    box.remove();
  });

  }


contador= contador+1

  var select = document.getElementById('selectPlayer');
var value = select.options[select.selectedIndex].value;

console.log("player select: " + value)
  console.log('Before promise call.')

  const cords = await getCoords(value,matchSelector);

 console.log("Run cords: "+cords)
 console.log(cords)

   test(cords);
}

function deleteMap(id){
  var map = document.getElementById(id);
  if(map !== null){

    map.remove();

  }

}

function getNamesSelect(){
  var matchSelector = document.getElementById('matches').value;

  getNames(matchSelector);
}


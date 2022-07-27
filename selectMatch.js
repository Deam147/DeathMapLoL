function cargarMatches() {
    var leagues = document.getElementById('selectLeague')
    var teams = document.getElementById('teams').value

    var url="./jsonIds/"+leagues.value+".json"
    var urlPlayoffs="./jsonIds/"+leagues.value+"PLAYOFFS.json"

    console.log(url)
    console.log(teams)

    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);


//printing complete data1
        var idsData = data
        console.log(idsData)


        fetch(urlPlayoffs)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
            console.log(data);


            var idsDataPlayoffs = data

    var selector = document.getElementById('matches');
    selector.innerHTML = '<option value="">Select Match...</option>'

        for (let i = 0; i < idsData["cargoquery"].length; i++) {

            if(idsData["cargoquery"][i]["title"]["Blue"] == teams || idsData["cargoquery"][i]["title"]["Red"] == teams){


                console.log("match encontrado de " + teams)
                var textSelector= idsData["cargoquery"][i]["title"]["DateTime UTC"].slice(0,10)+"    Blue: " + idsData["cargoquery"][i]["title"]["Blue"] +"   VS"+"    Red: " + idsData["cargoquery"][i]["title"]["Red"]
                var opcion = document.createElement("option");
                opcion.text = textSelector;
                opcion.value = idsData["cargoquery"][i]["title"]["RiotPlatformGameId"]
                selector.add(opcion);
            }


        }
        for (let i = 0; i < idsDataPlayoffs["cargoquery"].length; i++) {

            if(idsDataPlayoffs["cargoquery"][i]["title"]["Blue"] == teams || idsDataPlayoffs["cargoquery"][i]["title"]["Red"] == teams){


                console.log("match encontrado de " + teams)
                var textSelector= idsDataPlayoffs["cargoquery"][i]["title"]["DateTime UTC"].slice(0,10)+"    Blue: " + idsDataPlayoffs["cargoquery"][i]["title"]["Blue"] +"   VS"+"    Red: " + idsDataPlayoffs["cargoquery"][i]["title"]["Red"]+" PLAYOFFS"
                var opcion = document.createElement("option");
                opcion.text = textSelector;
                opcion.value = idsDataPlayoffs["cargoquery"][i]["title"]["RiotPlatformGameId"]
                selector.add(opcion);
            }


        }
       // var array = ["Sistemas", "Redes", "Electrica", "Industrial", "Electronica"];
       // array.sort();
       // addOptions("carrera", array);
    })})


}

function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (carrera in array) {
        var opcion = document.createElement("option");
        opcion.text = array[carrera];
        opcion.value = array[carrera].toLowerCase()
        selector.add(opcion);
    }
}

function cargarTeams() {

    // Modifique los nombres de tus propiedas a minúsculas.
    var teamlist = {
        DDHCLOSING2022: ["P\u00caEK Gaming", "Atheris Esports", "Tomorrow Esports", "Zylant Esports", "Six Karma","Atomic M\u00e9xico","Arctic Gaming Mexico","The Kings"],
        ELCLOSING2022: ["Red Rooster Team", "Janus Esports", "Saprissa Esports", "Gravity Elite", "Fuego", "Bandits Gaming", "Vandals Esports"],
        GLCLOSING2022: ["Osaka", "NOCTA", "Awake Gaming", "Zeu5 Bogota", "Spirituals", "PRO42", "Braves Rising", "Mayan Esports"],
        VLCLOSING2022: ["Aguilas Doradas", "God's Plan", "Waia Snikt", "Descuydado Esports", "AceS GaminG", "GeekSide Esports", "Skull Cracker", "Pirate Dream"],
        LCKSUMMER2022: ["Kwangdong Freecs", "Hanwha Life Esports", "Nongshim RedForce", "DRX", "KT Rolster", "Gen.G", "Fredit BRION", "DWG KIA", "Liiv SANDBOX", "T1"],
        LECSUMMER2022: ["Team Vitality", "MAD Lions", "SK Gaming", "Team BDS", "Excel Esports", "Misfits Gaming", "G2 Esports", "Astralis", "Rogue (European Team)", "Fnatic"]
    }
    var leagues = document.getElementById('selectLeague')
    var teams = document.getElementById('teams')
    // La carrera seleccionada se convierte a minúsuculas para que podás buscarla tal cual en tu array de listaMaterias
    var leagueSelect = leagues.value
    console.log(leagueSelect)
    teams.innerHTML = '<option value="">Select Team...</option>'

    if (leagueSelect !== '') {
        // sistemas que es lo que seleccionaste, si es igual a sistemas en tu array listaMaterias
        leagueSelectList = teamlist[leagueSelect]
        // Validamos que traiga el listado de materias, ya que sino te dará un error que no existe el método sort, porque no es un array sino un texto
        if (!!leagueSelectList.length) leagueSelectList.sort()

        leagueSelectList.forEach(function (team) {
            let opcion = document.createElement('option')
            opcion.value = team
            opcion.text = team
            teams.add(opcion)
        });
    }



}
//cargarTeams() ;
//cargarMatch();
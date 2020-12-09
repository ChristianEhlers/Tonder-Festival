const readIncidents = function () {
    // læs m ajax
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        let incidents = [];
        if (this.responseText.length > 0)
            incidents = JSON.parse(this.responseText); // get and objectify
        for (incident of incidents) {
             document.getElementById("incidents").innerHTML +=(`Sted: ${incident.Sted} <br> Arbejdsrolle: ${incident.Arbejdsrolle} <br> Hyppige hændelser: ${incident.Hyppigehændelser} <br> Beskrivelse: ${incident.Beskrivelse} <br> Navn: ${incident.Navn} <br> Nummer: ${incident.Nummer} <br> <br>`);
        }
    });
    oReq.open("GET", "http://localhost:8888/Tonder-Festival/getIncidents.php");
    oReq.send();
  };
  const doThis = function () {
    
    readIncidents();
};
window.addEventListener('load', doThis);
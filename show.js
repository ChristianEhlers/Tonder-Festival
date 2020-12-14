

var article = document.createElement('article');
let incidents = [];
const readIncidents = function () {
    // læs m ajax
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        
        if (this.responseText.length > 0)
            incidents = JSON.parse(this.responseText); // get and objectify
        for (incident of incidents) {
            var render = function(data) {
                var app = document.getElementById('incidents');
                var fejlmeldHTMLString = '<article>'+
                  data.map(function(a){
                    return '<article id="article">'+
                            '<p>'+'<strong>Navn: </strong>' + a.Navn + '<p/>' +
                            '<p>' + '<strong>Sted: </strong>' + a.Sted + '<p/>' +
                            '<p>' + '<strong>Arbejdsrolle: </strong>' + a.Arbejdsrolle + '<p/>' +
                            '<p>'+ '<strong>Hyppige hændelser: </strong>' + a.Hyppigehændelser + '<p/>' +
                            '<p>'+ '<strong>Beskrivelse: </strong>' + a.Beskrivelse + '<p/>' +
                            '<p>' +'<strong>Nummer: </strong>' + a.Nummer + '<p/>' +
                            '<p>'+'<strong>Dato: </strong>' + a.Dato + '<p/>' + '<article id="flex2">'+
                            '<p>' + 'Ikke Løst' + '</p>'+ 
                            '<img id="hej4" src="../Tonder-Festival/img/kryds-ikke-løst.png" alt="logo">'+'</article>' +
                          '</article>' 
                          
                  }).join('');
                  + '</article>';
            
                app.innerHTML = fejlmeldHTMLString;
              }
              render(incidents);
        }
console.log(incidents)
    
    const searchBar = document.getElementById('myinput');
    
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
    
        const filteredCharacters = incidents.filter((character) => {
            return (
                character.Sted.toLowerCase().includes(searchString) || 
                character.Navn.toLowerCase().includes(searchString) || 
                character.Beskrivelse.toLowerCase().includes(searchString) || 
                character.Nummer.toLowerCase().includes(searchString) ||  
                character.Hyppigehændelser.toLowerCase().includes(searchString) ||  
                character.Dato.includes(searchString) || 
                character.Arbejdsrolle.toLowerCase().includes(searchString)
            );
        });
        render(filteredCharacters);
    });

    });
    oReq.open("GET", "http://localhost/Tonder-Festival/getIncidents.php");
    oReq.send();
  };

  var search = document.getElementById('myinput');
    
  const doThis = function () {
    readIncidents();  
};

window.addEventListener('load', doThis);




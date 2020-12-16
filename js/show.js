

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
                            '<img src="../Tonder-Festival/img/kryds-ikke-løst.png" alt="logo">'+'</article>' +
                          '</article>' 
                          
                  }).join('');
                  + '</article>';
            
                app.innerHTML = fejlmeldHTMLString;
              }
              render(incidents); // render fremviser vores fejlmeldinger 
        }
console.log(incidents)
    
    const searchBar = document.getElementById('myinput');
    // inspiration fra https://www.jamesqquick.com/blog/build-a-javascript-search-bar
    searchBar.addEventListener('keyup', function(e) {
        const searchString = e.target.value.toLowerCase();
    
        const filteredFejlmeld = incidents.filter((fejlmeld) => {
            return (
              fejlmeld.Sted.toLowerCase().includes(searchString) || 
              fejlmeld.Navn.toLowerCase().includes(searchString) || 
              fejlmeld.Beskrivelse.toLowerCase().includes(searchString) || 
              fejlmeld.Nummer.toLowerCase().includes(searchString) ||  
              fejlmeld.Hyppigehændelser.toLowerCase().includes(searchString) ||  
              fejlmeld.Dato.includes(searchString) || 
              fejlmeld.Arbejdsrolle.toLowerCase().includes(searchString)
            );
        });
        render(filteredFejlmeld);
    });

    });
    oReq.open("GET", "http://localhost/Tonder-Festival/getIncidents.php");
    oReq.send();
  };

  
    
  const doThis = function () {
    readIncidents();  
};

window.addEventListener('load', doThis);




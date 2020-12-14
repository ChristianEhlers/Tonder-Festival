const manipulateForm = function (e) {
  e.preventDefault();
  // læs m ajax
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function () {
      let hentet = [];
      if (this.responseText.length > 0)
          hentet = JSON.parse(this.responseText); // get and objectify
      // udvid array m indtastet
      var loka = document.getElementById('steder').value;
      var prof = document.getElementById('arbejdsroller').value;
      var hyh = document.getElementById('hyh').value;
      var beskrivelse = document.getElementById('beskrivelse').value;
      var nav = document.getElementById('nav').value;
      var nr = document.getElementById('nr').value;
      var dateStr = new Date()
      var day = dateStr.getDate()
      var mon = dateStr.getMonth() + 1
      var year = dateStr.getFullYear()
      var time = dateStr.getHours()
      var min = dateStr.getMinutes()
      var dato = day + "/" + mon + "/" + year + ' - ' + time + ':' + min;
      let o = {
          Sted: loka,
          Arbejdsrolle: prof,
          Hyppigehændelser: hyh,
          Beskrivelse: beskrivelse,
          Navn: nav,
          Nummer: nr,
          Dato: dato
          
      };
      
      hentet.push(o);                             // add new
      document.getElementById('json').value = JSON.stringify(hentet);   // stringify
      document.forms['form22'].submit();          // send
      
  });
  oReq.open("GET", "http://localhost/Tonder-Festival/getIncidents.php");
  oReq.send();

};
const doThis = function () {
 
  document.getElementById('butt').addEventListener('click', manipulateForm)
};
window.addEventListener('load', doThis);

document.getElementById('file').onchange = function() {loadFile(event)};
var loadFile = function(event) {
	var image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
  
  document.getElementById('someID').style.display = 'block'
 
  
}

document.getElementById("someID").addEventListener('click', function(){
  var input = document.getElementById('output');
  input.remove () 
  document.getElementById('someID').style.display = 'none'
  var img = document.createElement('img');
  img.id = 'output'
  document.getElementById('holder').appendChild(img);


});

 






/*const date = new Date();

console.log(date);

class Form {
    constructor(lokationer, profession, hændelser, fejlmelding, navn, nummer, fil) {
    this.lokationer = lokationer;
    this.profession = profession;
    this.hændelser = hændelser;
    this.fejlmelding = fejlmelding;
    this.navn = navn;
    this.nummer = nummer;
    this.fil = fil;
  }
  
};
  
  document.getElementById('butt').addEventListener('click', function(e) {
    var loka = document.getElementById('steder').value;
    var prof = document.getElementById('arbejdsroller').value;
    var hyh = document.getElementById('hyh').value;
    var beskrivelse = document.getElementById('beskrivelse').value;
    var nav = document.getElementById('nav').value;
    var nr = document.getElementById('nr').value;
    var fil = document.getElementById('fil').value;
    console.log(nr);
    var visit = new Form(loka, prof, hyh, beskrivelse, nav, nr, fil);
    console.log(visit);
    console.log(JSON.stringify(visit));
    e.preventDefault();

  });
  

  //e.Submit*/




  

  
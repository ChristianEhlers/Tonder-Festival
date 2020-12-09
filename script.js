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
      let o = {
          Sted: loka,
          Arbejdsrolle: prof,
          Hyppigehændelser: hyh,
          Beskrivelse: beskrivelse,
          Navn: nav,
          Nummer: nr
      };
      hentet.push(o);                             // add new
      document.getElementById('json').value = JSON.stringify(hentet);   // stringify
      document.forms['form22'].submit();          // send

  });
  oReq.open("GET", "http://localhost:8888/Tonder-Festival/getIncidents.php");
  oReq.send();
};
const doThis = function () {
  headAndShoulders('ExamProject Dec 2020');
  feet(2020);
  document.getElementById('butt').addEventListener('click', manipulateForm)
};
window.addEventListener('load', doThis);


const headAndShoulders = function (foo) {
  let bar = document.getElementsByClassName('title');
  for (let baz of bar) {
      let qux = document.createTextNode(foo);
      baz.appendChild(qux);
  }
};

const feet = function (foo) {
  let bar = document.getElementsByTagName('body');
  let baz = new Date().getFullYear();
  const qux = `\u00A9 nml ${foo}-${baz}`;
  let quux = document.createTextNode(qux);
  bar[0].appendChild(quux);
};





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




  

  
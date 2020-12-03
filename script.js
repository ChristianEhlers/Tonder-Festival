const date = new Date();

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
  

  //e.Submit
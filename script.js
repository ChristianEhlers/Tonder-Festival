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
<<<<<<< HEAD
  
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
=======

  

  let begin = function() {
      let forms = [];
    
      let disp = function() {
          let div1 = document.getElementById('formarea');
          while (div1.firstChild) {    // Removing all children from an element
              div1.removeChild(div1.firstChild);
          }
          for (let form of forms) {
              div1.innerHTML += tune.toString();
          }
      };
  
      disp()
      document.getElementById('butt').addEventListener('click', function() {
        var loka = document.getElementById('steder').value;
        var prof = document.getElementById('arbejdsroller').value;
        var hyh = document.getElementById('hyh').value
        var beskrivelse = document.getElementById('beskrivelse').value
        var nav = document.getElementById('nav').value
        var nr = document.getElementById('nr').value
              if (loka !== '' && prof !== '' && hyh !== '' && beskrivelse !== '' && nav !== '' && nr !=='') {
                  let form = new Form(loka, prof, hyh, beskrivelse, nav, nr);
                  forms.push(form);
                  disp();
                  document.getElementById('steder').value = '';
                  document.getElementById('arbejdsroller').value = '';
                  document.getElementById('hyh').value = '';
                  document.getElementById('beskrivelse').value = '';
                  document.getElementById('nav').value = '';
                  document.getElementById('nr').value = ''
                  
              }
          }
      );
  }
  window.addEventListener('load', begin);







/*
  
  document.getElementById('butt').addEventListener('click', function() {
    var loka = document.getElementById('steder').value;
    var prof = document.getElementById('arbejdsroller').value;
    var hyh = document.getElementById('hyh').value
    var beskrivelse = document.getElementById('beskrivelse').value
    var nav = document.getElementById('nav').value
    var nr = document.getElementById('nr').value
    var visit = new Tune(loka, prof, hyh, beskrivelse, nav, nr);
  
    console.log(JSON.stringify(visit));
  });*/
>>>>>>> 0c6c4866eaefef9c2aab37686db015072df0af26

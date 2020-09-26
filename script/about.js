var about = "I'm Deepanshu tyagi,currently persuing Btech in Computer science engineering from Dr.APJ abdul kalam technical University.I'm a Web developer and learning data science with keen understanding of Python,html,css,django,data structure.";
i = 0;
function typeWriter() {
    if (i < about.length) {
      document.getElementById("about__").innerHTML += about.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
    }
  }

typeWriter();
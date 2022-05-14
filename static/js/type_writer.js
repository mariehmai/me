const speed = 50;
var i = 0;
var i2 = 0;

const typeWriter = (message = `Hi, I'm`) => {
  if (i < message.length) {
    document.getElementById("typing").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    typeWriter2()
  }
};
const typeWriter2 = (message = `Marie-Hélène! 👋`) => {
  if (i2 < message.length) {
    document.getElementById("typing2").innerHTML += message.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed);
  }
};


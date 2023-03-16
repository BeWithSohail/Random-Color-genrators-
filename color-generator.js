// Color Generator js 
function getRandomColor() {
    const letters = "0123456789ABCDEF"; // hexadecimal digits
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; // generate a random digit and add it to the color string
    }
    console.log(color);
    document.body.style.backgroundColor = color;
    document.getElementById("colorcode").innerHTML = color;
    return color;
}


document.getElementById("change-color").addEventListener(
    "click", getRandomColor
);
 getRandomColor();
  
//   console.log(getRandomColor()); // outputs a random color code like "#F0A3C7"
  
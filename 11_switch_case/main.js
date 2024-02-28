

/* 
syntax:

switch (key) {
  case value:
    
    break;

  default:
    break;
} */

// defaults to a strict comparison operator ===
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}



// I can decide what operator to use
let y = 12;
switch (true) {
  case y < 10:

    break;

  case y  === 10:

    break;


  default:
    break;
}

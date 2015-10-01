var num;
var u1;
var u2;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convert-submit").addEventListener("click", convert);
});

function convert(){
  num = document.getElementById("inputnumber").value;
  u1 = document.getElementById("unit_1").value;
  u2 = document.getElementById("unit_2").value;
  var endResult = doMath();
  document.getElementById("p2").innerHTML = endResult;
}

function doMath(){
  var metric = ["mm", "cm", "dim", "m", "dam", "hm", "km"];
  var english = ["in", "ft", "yds", "mi"];
  
  if (u1 == u2){
    return num + " " + u2;
  }
  
  if (metric.indexOf(u1) !== -1){
    if (metric.indexOf(u2) !== -1){
      var x = metric.indexOf(u1);
      
      if (x > metric.indexOf(u2)){
        
        while (x !== metric.indexOf(u2)){
          x -= 1;
          num *= 10;
        }
      } else {
        
        while (x !== metric.indexOf(u2)){
          x += 1;
          num /= 10;
        }
      }
    } else {
      var v = metric.indexOf(u1);
      while(v !== 1){
        if (v > 1){
          v -= 1;
          num *= 10;
        } else {
          v += 1;
          num /= 10;
        }
      }
      num /= 2.54;
      v = 0;
      while (v !== english.indexOf(u2)){
        if (v === 0){
          v += 1;
          num /= 12;
        } else if (v == 1){
          v += 1;
          num /= 3;
        } else if (v == 2){
          v += 1;
          num /= 1760;
        }
      }
    }
    
  } else {
    if (metric.indexOf(u2) !== -1){
      var z = english.indexOf(u1);
      while (z !== 0){
        if (z == 1){
          num *= 12;
          z -= 1;
        } else if (z == 2){
          num *= 3;
          z -= 1;
        } else if (z == 3){
          num *= 1760;
          z -= 1;
        }
      }
      num *= 2.54;
      z = 1;
      if (z > metric.indexOf(u2)){
        
        while (z !== metric.indexOf(u2)){
          z -= 1;
          num *= 10;
        }
      } else {
        
        while (z !== metric.indexOf(u2)){
          z += 1;
          num /= 10;
        }
      }
    } else {
      var y = english.indexOf(u1);
      
      while (y !== english.indexOf(u2)){
        if (y > english.indexOf(u2)){
          if(y == 3){
            y -= 1;
            num *= 1760;
          } else if (y == 2){
            y -= 1;
            num *= 3;
          } else if (y == 1){
            y -= 1;
            num *= 12;
          }
        } else {
          if(y === 0){
            y += 1;
            num /= 12;
          } else if (y == 1){
            y += 1;
            num /= 3;
          } else if (y == 2){
            y += 1;
            num /= 1760;
          }
        }
      }
    }
  }
  num = Math.round(num * 1000000) / 1000000;
  return num + " " + u2;
}

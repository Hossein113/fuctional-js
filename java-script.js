 $ = {
    a: 1,
    b: 2,
    sum: function() {
        return (this.a + this.b)
    },
    mult: function() {
        return (this.a * this.b)
    }
};

function mouseIn() {
    document.getElementById("demo").style.background = "red";
  }
  
  function mouseOut() {
    document.getElementById("demo").style.background = "blue";
  
  }

  function mouseOut() {
    document.getElementById("demo").style.background = "blue";
  }
  
  function mouseType() {
    const element = document.getElementById("type");
  element.innerHTML += " Click added some text !";

  }

  

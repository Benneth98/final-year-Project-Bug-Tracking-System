const navSlide = () => {
    const burger= document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>  {
        nav.classList.toggle('nav-active');

        
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`; 
        }
    });
    
    burger.classList.toggle('toggle');

    });

}

navSlide();

function display() {
    var x = document.getElementById("loginview");
    var y = document.getElementById("hero");
    var z = document.getElementById("features");
    var v = document.getElementById("contact");
    var a = document.getElementById("loginview1");
    var b = document.getElementById("loginview2");
    var c = document.getElementById("regview");
    var d = document.getElementById("expertview");
    var e = document.getElementById("userview");
    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      v.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
 
    }
  }

  function display2() {
    var x = document.getElementById("loginview1");
    var y = document.getElementById("hero");
    var z = document.getElementById("features");
    var v = document.getElementById("contact");
    var a = document.getElementById("loginview");
    var b = document.getElementById("loginview2");
    var c = document.getElementById("regview");
    var d = document.getElementById("expertview");
    var e = document.getElementById("userview");
    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      v.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
    }
  }

  function display3() {
    var x = document.getElementById("loginview2");
    var y = document.getElementById("hero");
    var z = document.getElementById("features");
    var v = document.getElementById("contact");
    var a = document.getElementById("loginview");
    var b = document.getElementById("loginview1");
    var c = document.getElementById("regview");
    var d = document.getElementById("expertview");
    var e = document.getElementById("userview");
    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      v.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
    }
  }

  document.querySelector('#reload')
  .addEventListener('click', () => {
      window.location.reload(true);
    
      var y = document.getElementById("loginview");
      var x = document.getElementById("regview");
      if (x.style.display === "none") {
        x.style.display = "none";}
        else{
            x.style.display = "none";
            y.style.display = "none";   
        }
  });


  function signdisplay() {
    var x = document.getElementById("regview");
    var y = document.getElementById("hero");
    var z = document.getElementById("features");
    var v = document.getElementById("contact");
    var d = document.getElementById("expertview");
    var e = document.getElementById("userview");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      y.style.display = "none";
      x.style.display = "block";
      z.style.display = "none";
      v.style.display = "none";
      d.style.display= "none";
      e.style.display = "none";
    }
} 

function admindis() {
  var x = document.getElementById("loginview");
  var y = document.getElementById("Adminview");
  var a = document.getElementById("admini");
  var b = document.getElementById("tech");
  var c = document.getElementById("userr");
  var d = document.getElementById("expertview");
  var e = document.getElementById("userview");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "block";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";

  }
}

function expertdis() {
  var x = document.getElementById("loginview1");
  var y = document.getElementById("Adminview");
  var a = document.getElementById("admini");
  var b = document.getElementById("tech");
  var c = document.getElementById("userr");
  var d = document.getElementById("expertview");
  var e = document.getElementById("userview");
  if (d.style.display === "none") {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    x.style.display = "none";
    e.style.display = "none";

  } else {
    x.style.display = "none";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";
    e.style.display = "none";


  }
} 

function userdis() {
  var x = document.getElementById("loginview2");
  var y = document.getElementById("Adminview");
  var a = document.getElementById("admini");
  var b = document.getElementById("tech");
  var c = document.getElementById("userr");
  var d = document.getElementById("expertview");
  var e = document.getElementById("userview");
  if (d.style.display === "none") {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    x.style.display = "none";
    e.style.display = "block";

  } else {
    x.style.display = "none";
    y.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "block";


  }
} 
  



const kati1 = document.getElementById("kati1-button");
const kati2 = document.getElementById("kati2-button");
const kati3 = document.getElementById("kati3-button");
const kati4 = document.getElementById("kati4-button");
const kati5 = document.getElementById("kati5-button");
const kati6 = document.getElementById("kati6-button");
const kati7 = document.getElementById("kati7-button");
const kati8 = document.getElementById("kati8-button");

kati1.addEventListener('click', function (event) {
    localStorage.setItem('Floor', kati1.name);
    window.location.href = "floor.html";
  });

  kati2.addEventListener('click', function (event) {
    localStorage.setItem('Floor', kati2.name);
    window.location.href = "floor.html";
  });

  kati3.addEventListener('click', function (event) {
    localStorage.setItem('Floor', kati3.name);
    window.location.href = "floor.html";
  });

  kati4.addEventListener('click', function (event) {
    localStorage.setItem('Floor', kati4.name);
    window.location.href = "floor.html";
  });

  kati5.addEventListener('click', function (event) {
    localStorage.setItem('Floor', kati5.name);
    window.location.href = "floor.html";
  });

  kati6.addEventListener('click', function (event) {
    localStorage.setItem('Floor', kati6.name);
    window.location.href = "floor.html";
  });

  kati7.addEventListener('click', function (event) {
    localStorage.setItem('Floor', kati7.name);
    window.location.href = "floor.html";
  });

  kati8.addEventListener('click', function (event) {
    localStorage.setItem('Floor', kati8.name);
    window.location.href = "floor.html";
  });

  function loadBuildings() {
    var myHeading = document.getElementById("buildingid");
    myHeading.innerHTML = "Godina " + localStorage.getItem('Building');
  }
let buil = localStorage.getItem('Building');
let fl = localStorage.getItem('Floor');
let builObject = JSON.parse(localStorage.getItem(buil));
let floorArr = builObject[fl];

var button1 = document.getElementById("onebedroom1-button");
button1.addEventListener("mouseover", function() {
    var isConditionTrue = floorArr[0] === 0;
    if (isConditionTrue) {
        button1.style.backgroundColor = "rgba(0, 255, 0, 0.4)";
    } else {
        button1.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
});


button1.addEventListener("mouseout", function() {
    button1.style.backgroundColor = "transparent";
    button1.style.color = "#0f0f0e";
});


var button2 = document.getElementById("onebedroom2-button");
button2.addEventListener("mouseover", function() {
    var isConditionTrue = floorArr[1] === 0;
    if (isConditionTrue) {
        button2.style.backgroundColor = "rgba(0, 255, 0, 0.4)";
    } else {
        button2.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
});


button2.addEventListener("mouseout", function() {
    button2.style.backgroundColor = "transparent";
    button2.style.color = "#0f0f0e";
});


var button3 = document.getElementById("doublestudio1-button");
button3.addEventListener("mouseover", function() {
    var isConditionTrue = floorArr[2] === 0;
    if (isConditionTrue) {
        button3.style.backgroundColor = "rgba(0, 255, 0, 0.4)";
    } else {
        button3.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
});


button3.addEventListener("mouseout", function() {
    button3.style.backgroundColor = "transparent";
    button3.style.color = "#0f0f0e";
});


var button4 = document.getElementById("doublestudio2-button");
button4.addEventListener("mouseover", function() {
    var isConditionTrue = floorArr[3] === 0;
    if (isConditionTrue) {
        button4.style.backgroundColor = "rgba(0, 255, 0, 0.4)";
    } else {
        button4.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
});


button4.addEventListener("mouseout", function() {
    button4.style.backgroundColor = "transparent";
    button4.style.color = "#0f0f0e";
});


var button5 = document.getElementById("singlestudio1-button");
button5.addEventListener("mouseover", function() {
    var isConditionTrue = floorArr[4] === 0;
    if (isConditionTrue) {
        button5.style.backgroundColor = "rgba(0, 255, 0, 0.4)";
    } else {
        button5.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
});


button5.addEventListener("mouseout", function() {
    button5.style.backgroundColor = "transparent";
    button5.style.color = "#0f0f0e";
});


var button6 = document.getElementById("singlestudio2-button");
button6.addEventListener("mouseover", function() {
    var isConditionTrue = floorArr[5] === 0;
    if (isConditionTrue) {
        button6.style.backgroundColor = "rgba(0, 255, 0, 0.4)";
    } else {
        button6.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
});


button6.addEventListener("mouseout", function() {
    button6.style.backgroundColor = "transparent";
    button6.style.color = "#0f0f0e";
});

var button7 = document.getElementById("twobedroom-button");
button7.addEventListener("mouseover", function() {
    var isConditionTrue = floorArr[6] === 0;
    if (isConditionTrue) {
        button7.style.backgroundColor = "rgba(0, 255, 0, 0.4)";
    } else {
        button7.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }
});


button7.addEventListener("mouseout", function() {
    button7.style.backgroundColor = "transparent";
    button7.style.color = "#0f0f0e";
});

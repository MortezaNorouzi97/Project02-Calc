function addToCalculator(value) {
    document.getElementById('displayResult').value += value;
}

function finilize() {
    document.getElementById('displayResult').value = eval(document.getElementById('displayResult').value);
}

function mathCalculator(mathFunc) {
    var val = document.getElementById('displayResult').value;
    document.getElementById('displayResult').value = Math[mathFunc](val);
}



function clockRunner() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var p = "AM"
    if (hour > 12) {
        hour -= 12;
        p = "PM";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    var clock = hour + ":" + minute + ":" + second + " " + p;
    document.getElementById('MyClockDisplay').textContent = clock;

    setTimeout(clockRunner, 1000);
}

clockRunner();


const today = new Date();
const formattedDate = today.toLocaleDateString();
document.getElementById("today").textContent = formattedDate;
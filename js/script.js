// JavaScript for Example 51
function addNumbers() {
    var result = 5 + 3;
    document.getElementById("addNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 52
function subtractNumbers() {
    var result = 5 - 3;
    document.getElementById("subtractNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 53
function multiplyNumbers() {
    var result = 5 * 3;
    document.getElementById("multiplyNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 54
function divideNumbers() {
    var result = 5 / 3;
    document.getElementById("divideNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 55
function findRemainder() {
    var result = 5 % 3;
    document.getElementById("findRemainderResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 56
function calculatePower() {
    var result = Math.pow(2, 3);
    document.getElementById("calculatePowerResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 57
function calculateSquareRoot() {
    var result = Math.sqrt(9);
    document.getElementById("calculateSquareRootResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 58
function generateRandomNumber() {
    var result = Math.random();
    document.getElementById("randomNumberResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 59
function checkEvenOdd() {
    var number = 4;
    var result = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById("evenOddResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 60
function useMathPI() {
    var result = Math.PI;
    document.getElementById("mathPIResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 61
function useMathFloor() {
    var result = Math.floor(4.7);
    document.getElementById("mathFloorResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 62
function useMathCeil() {
    var result = Math.ceil(4.3);
    document.getElementById("mathCeilResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 63
function useMathRound() {
    var result = Math.round(4.5);
    document.getElementById("mathRoundResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 64
function findMax() {
    var result = Math.max(1, 2, 3, 4, 5);
    document.getElementById("maxResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 65
function findMin() {
    var result = Math.min(1, 2, 3, 4, 5);
    document.getElementById("minResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 66
function convertStringToNumber() {
    var str = "123";
    var result = Number(str);
    document.getElementById("stringToNumberResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 67
function convertNumberToString() {
    var num = 123;
    var result = num.toString();
    document.getElementById("numberToStringResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 68
function stringLength() {
    var str = "Hello, World!";
    var result = str.length;
    document.getElementById("stringLengthResult").innerHTML = "Length: " + result;
}

// JavaScript for Example 69
function stringIndexOf() {
    var str = "Hello, World!";
    var result = str.indexOf("World");
    document.getElementById("stringIndexOfResult").innerHTML = "Index: " + result;
}

// JavaScript for Example 70
function stringSubstring() {
    var str = "Hello, World!";
    var result = str.substring(7, 12);
    document.getElementById("stringSubstringResult").innerHTML = "Substring: " + result;
}

// JavaScript for Example 71
function convertToUppercase() {
    var str = "hello world";
    var result = str.toUpperCase();
    document.getElementById("uppercaseResult").innerHTML = "Uppercase: " + result;
}

// JavaScript for Example 72
function convertToLowercase() {
    var str = "HELLO WORLD";
    var result = str.toLowerCase();
    document.getElementById("lowercaseResult").innerHTML = "Lowercase: " + result;
}

// JavaScript for Example 73
function replaceStringContent() {
    var str = "Hello, World!";
    var result = str.replace("World", "JavaScript");
    document.getElementById("replaceStringContentResult").innerHTML = "Replaced: " + result;
}

// JavaScript for Example 74
function splitString() {
    var str = "Hello, World!";
    var result = str.split(",");
    document.getElementById("splitStringResult").innerHTML = "Split: " + result.join(" - ");
}

// JavaScript for Example 75
function joinArray() {
    var arr = ["Hello", "World"];
    var result = arr.join(", ");
    document.getElementById("joinArrayResult").innerHTML = "Joined: " + result;
}

// JavaScript for Example 76
function trimString() {
    var str = "    Hello, World!    ";
    var result = str.trim();
    document.getElementById("trimStringResult").innerHTML = "Trimmed: " + result;
}

// JavaScript for Example 77
function createDate() {
    var date = new Date();
    document.getElementById("dateResult").innerHTML = "Date: " + date;
}

// JavaScript for Example 78
function getCurrentDate() {
    var date = new Date();
    document.getElementById("currentDateResult").innerHTML = "Current Date: " + date.toDateString();
}

// JavaScript for Example 79
function getDayOfWeek() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date = new Date();
    var day = days[date.getDay()];
    document.getElementById("dayOfWeekResult").innerHTML = "Day of the Week: " + day;
}

// JavaScript for Example 80
function getMonthOfYear() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var month = months[date.getMonth()];
    document.getElementById("monthOfYearResult").innerHTML = "Month of the Year: " + month;
}

// JavaScript for Example 81
function getYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("yearResult").innerHTML = "Year: " + year;
}

// JavaScript for Example 82
function getHours() {
    var date = new Date();
    var hours = date.getHours();
    document.getElementById("hoursResult").innerHTML = "Hours: " + hours;
}

// JavaScript for Example 83
function getMinutes() {
    var date = new Date();
    var minutes = date.getMinutes();
    document.getElementById("minutesResult").innerHTML = "Minutes: " + minutes;
}

// JavaScript for Example 84
function getSeconds() {
    var date = new Date();
    var seconds = date.getSeconds();
    document.getElementById("secondsResult").innerHTML = "Seconds: " + seconds;
}

// JavaScript for Example 85
function setHours() {
    var date = new Date();
    date.setHours(10);
    document.getElementById("setHoursResult").innerHTML = "Hours set to: " + date.getHours();
}

// JavaScript for Example 86
function setMinutes() {
    var date = new Date();
    date.setMinutes(30);
    document.getElementById("setMinutesResult").innerHTML = "Minutes set to: " + date.getMinutes();
}

// JavaScript for Example 87
function setSeconds() {
    var date = new Date();
    date.setSeconds(45);
    document.getElementById("setSecondsResult").innerHTML = "Seconds set to: " + date.getSeconds();
}

// JavaScript for Example 88
var timer;
function startTimer() {
    var counter = 0;
    timer = setInterval(function() {
        counter++;
        document.getElementById("timerResult").innerHTML = "Timer: " + counter + " seconds";
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

// JavaScript for Example 89
function stopTimer() {
    clearInterval(timer);
}

// JavaScript for Example 90
function getElementByQuerySelector() {
    var element = document.querySelector("#querySelectorResult");
    element.innerHTML = "Element selected by query selector!";
}

// JavaScript for Example 91
function getElementsByQuerySelectorAll() {
    var elements = document.querySelectorAll("p");
    var result = "";
    elements.forEach(function(element) {
        result += element.innerHTML + " ";
    });
    document.getElementById("querySelectorAllResult").innerHTML = result;
}

// JavaScript for Example 92
function checkCheckboxStatus() {
    var checkbox = document.getElementById("checkbox");
    var result = checkbox.checked ? "Checked" : "Unchecked";
    document.getElementById("checkboxStatusResult").innerHTML = "Checkbox is " + result;
}

// JavaScript for Example 93
function enableButton() {
    document.getElementById("enableButton").disabled = false;
}

// JavaScript for Example 94
function disableButton() {
    document.getElementById("disableButton").disabled = true;
}

// JavaScript for Example 95
function changeImageOnHover() {
    document.getElementById("hoverImage").src = "image2.jpg";
}

function resetImage() {
    document.getElementById("hoverImage").src = "image1.jpg";
}

// JavaScript for Example 96
function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

// JavaScript for Example 97
function playAudio2() {
    var audio = document.getElementById("audio2");
    audio.play();
}

function pauseAudio2() {
    var audio = document.getElementById("audio2");
    audio.pause();
}

// JavaScript for Example 98
function createIframe() {
    var iframe = document.createElement("iframe");
    iframe.src = "https://example.com";
    document.getElementById("iframeResult").appendChild(iframe);
}

// JavaScript for Example 99
function changeIframeSource() {
    var iframe = document.getElementById("iframe");
    iframe.src = "https://example.com";
}

// JavaScript for Example 100
function removeIframe() {
    var iframe = document.getElementById("iframe");
    iframe.parentNode.removeChild(iframe);
}
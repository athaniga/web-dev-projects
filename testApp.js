let word = "";
let textSize = 5;

//This fucntion uses a Date object to write information ot the HTML page
function displayTime() {
    //This log statement is not part of this function
    console.log(document.URL);
    var today = new Date();
    var day = today.getDay();
    let time = today.getHours();
    var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    document.getElementById("day").innerHTML = dayArr[day];
    if (time > 12) {
        if (time == 24) {
            document.getElementById("time").innerHTML = "12AM" ;

        }
        else {
            document.getElementById("time").innerHTML = (time -12) + "PM" ;
        }
    }
    else {
        if (time == 12) {
            document.getElementById("time").innerHTML = "12PM" ;
        }
        else {
            document.getElementById("time").innerHTML = time + "AM" ;
        }
    }
    
}

function calcAreaTriangle() {
    let a = document.getElementById("s1").value;
    console.log(a);
    let b = document.getElementById("s2").value;
    console.log(b);
    let c = document.getElementById("s3").value;
    console.log(c)
    //If parsing a string that is not a number into an int it will return NaN
    if (!isNaN(parseInt(a)) && !isNaN(parseInt(b)) && !isNaN(parseInt(c)) ) {
        //Function idea taken from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php
        a = parseInt(a)
        b = parseInt(b)
        c = parseInt(c)
        let s = (a + b + c)/2;
        let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
        console.log(area);
        if (isNaN(area)) {
            document.getElementById("triangleArea").innerHTML = "impossible to determine" +
        " with information like this";
        }
        else {
            document.getElementById("triangleArea").innerHTML = area;
        }

    }
    else {
        document.getElementById("triangleArea").innerHTML = "impossible to determine" +
        " with information like this";
    }
}

function setPalindrome() {
    const palindromeArr = ["RACECAR", "TACO CAT ", "NEVER ODD OR EVEN ", "NO LEMON NO MELON "];
    word = palindromeArr[Math.floor(Math.random()*palindromeArr.length)];
    document.getElementById("reverse").innerHTML = word;
}

function reverseWord() {
    let target = word;
    let targetArr = target.split("");
    letter = word.charAt(0);
    for (let i = 0; i < targetArr.length; i+=1) {
        targetArr[i] = targetArr[i+1];
    }
    targetArr[targetArr.length -1] = letter;
    target = targetArr.join("");
    word = target;
    document.getElementById("reverse").innerHTML = word;

}

function changeFont() {
    const fonts = ["Arial, Helvetica, sans-serif", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "'Franklin Goth" + 
    "ic Medium', 'Arial Narrow', Arial, sans-serif", "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", "'Lucida S" + 
    "ans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", "Arial", "'Times New Roman', T" + 
    "imes, serif", 'Courier New', 'Lucida Handwriting'];
    document.getElementById("sampleFont").style.fontFamily = fonts[Math.floor(Math.random()*fonts.length)];
}

function setTextColor() {
    let color = document.getElementById("colorList");
    document.getElementById("sampleFont").style.color = color.value;
}

function setSizeUp() {
    //Can also be done with getElementById()
    let getText = document.getElementById("sampleFont");
    let sizeString = window.getComputedStyle(getText, null).getPropertyValue('font-size')
    let size = parseFloat(sizeString);
    console.log(sizeString);
    console.log(size);

    //Can also be done with querySelector
    //const test = document.querySelector('#sampleFont');
    //const testStyles = window.getComputedStyle(test);
    //let currentSize = testStyles.getPropertyValue('font-size');

    if (size < 30) {
        size += 1;
        let newSize = (size + 1).toString();
        document.getElementById("sampleFont").style.fontSize = newSize + "px";
    }
}

function setSizeDown() {
    //Can also be done with getElementById()
    let getText = document.getElementById("sampleFont");
    let sizeString = window.getComputedStyle(getText, null).getPropertyValue('font-size')
    let size = parseFloat(sizeString);

    if (size > 4) {
        size -= 1;
        let newSize = (size - 1).toString();
        document.getElementById("sampleFont").style.fontSize = newSize + "px";
    }
}
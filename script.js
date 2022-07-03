async function fetchAdvice() {
    var advice = await fetch ('https://api.adviceslip.com/advice')
    .then(response => response.json())

    var randomAdvice = document.createElement('p');
    randomAdvice.innerHTML = advice.slip.advice

    var newAdvice = document.getElementById('newAdvice');
    newAdvice.appendChild(randomAdvice);
}

fetchAdvice();

let nameIncrease = document.getElementById("name").onmouseover = function() {
    document.getElementById("name").style.fontSize = "45px"
}

let titleIncrease = document.getElementById("title").onmouseover = function() {
    document.getElementById("title").style.fontSize = "30px"
}

let namedecrease = document.getElementById("name").onmouseleave = function() {
    document.getElementById("name").style.fontSize = "32px"
}

let titledecrease = document.getElementById("title").onmouseleave = function() {
    document.getElementById("title").style.fontSize = "24px"
}



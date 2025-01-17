function loadPage(){
    const scoresText = localStorage.getItem('expierencePoints');
    updateScore(scoresText);
    const userLevel = localStorage.getItem('userLevel');
    setLevel(userLevel);
}
//Update the score on the webpage
function updateScore(score) {
  const scoreEl = document.querySelector('#xpLevel');
  scoreEl.textContent = score;
}
//Increase the score upon completion of task
function incrementScore(){
  scoresText = localStorage.getItem('expierencePoints');
  scoresText = Number(scoresText) + 10;
  localStorage.setItem("expierencePoints", scoresText);
  updateScore(scoresText);
  incrementLevel();
}
function setLevel(level){
  const levelEl = document.querySelector('#playerLevel');
  levelEl.textContent = level;
}

function incrementLevel(){
  const xpScore = localStorage.getItem('expierencePoints');
  currLevel = localStorage.getItem('userLevel');
  if(Number(xpScore) > (currLevel * 100)){
      currLevel = Number(currLevel) + 1;
      setLevel(currLevel);
      localStorage.setItem("userLevel", currLevel);
  }
}

async function saveScore(userLevel) {
  const userName = this.getPlayerName();
  const date = new Date().toLocaleDateString();
  const newScore = { name: userName, score: score, date: date };

  try {
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    // Store what the service gave us as the high scores
    const scores = await response.json();
    localStorage.setItem('scores', JSON.stringify(scores));
  } catch {
    // If there was an error then just track scores locally
    this.updateScoresLocal(newScore);
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    incrementScore();
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
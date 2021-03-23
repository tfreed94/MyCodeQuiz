console.log(this)
var highScoresList = document.querySelector("#highScoresList");
var returnBtn = document.querySelector("#returnBtn");
var scores = localStorage.getItem("scores");
scores= JSON.parse(scores);
if (scores) {
    for (var i= 0; i < scores.length; i++) {
        var addLi= document.createElement("li");
        addLi.textContent= scores[i].initSig + " " + scores[i].results;
        highScoresList.appendChild(addLi);
    }
}
returnBtn.addEventListener("click", function () {
    window.location.replace("index.html");
});
// When "reset highscores" is clicked then erase all previously stored highscores from local
function erasescores () {
    window.localStorage.clear();
    window.location.reload();
}

document.getElementById("eraseScores").onclick = erasescores

var correct = 0;
var incorrect = 0;
var question = 1;
var questionCount = 10;
var gameType = null;
let elsaVideos = ['https://www.youtube.com/embed/gIOyB9ZXn8s','https://www.youtube.com/embed/L0MK7qz13bU'];
var gameNames = [];
var gameTypes = [
  {
    "Name": "bear",
    "Img": "bear.png",
    "Questions": 10,
    "Code": function() {
      document.body.style.backgroundColor = 'white';
      document.body.style.background = "url('bear2.gif') no-repeat center 0%";
      var mk = Math.floor(Math.random() * 3) + 1;
      var lol1 = document.createElement('AUDIO');
      lol1.style.display = 'none';
      lol1.setAttribute('src', 'yay' + mk + '.mp3');
      document.body.appendChild(lol1);
      lol1.load();
      lol1.play();
      setTimeout(function() {
        document.body.style.background = "url('888.jpg') no-repeat fixed center center";
        document.body.style.backgroundSize = 'cover';
        lol1.pause();
        lol1.remove();
        results();
      }, 30000);
    }
  },
  {
    "Name": "elsaEasy",
    "Img": "bear.png",
    "Questions": 10,
    "Code": function() {
      var videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.style.display = 'block';
      videoPlayer.src = elsaVideos[Math.floor(Math.random() * elsaVideos.length)] + "?rel=0&version=3&autoplay=1&controls=0&showinfo=0&loop=1";
      setTimeout(function() {
        videoPlayer.src = '';
        videoPlayer.style.display = 'none';
        document.body.style.background = "url('888.jpg') no-repeat fixed center center";
        document.body.style.backgroundSize = 'cover';
        results();
      }, 30000);
    }  
  },
  {
    "Name": "elsaMedium",
    "Img": "bear.png",
    "Questions": 20,
    "Code": function() {
      var videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.style.display = 'block';
      videoPlayer.src = elsaVideos[Math.floor(Math.random() * elsaVideos.length)] + "?rel=0&version=3&autoplay=1&controls=0&showinfo=0&loop=1";
      setTimeout(function() {
        videoPlayer.src = '';
        videoPlayer.style.display = 'none';
        document.body.style.background = "url('888.jpg') no-repeat fixed center center";
        document.body.style.backgroundSize = 'cover';
        results();
      }, 60000);
    }
  },
  {
    "Name": "elsaHard",
    "Img": "bear.png",
    "Questions": 30,
    "Code": function() {
      var videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.style.display = 'block';
      videoPlayer.src = elsaVideos[Math.floor(Math.random() * elsaVideos.length)] + "?rel=0&version=3&autoplay=1&controls=0&showinfo=0&loop=1";
      setTimeout(function() {
        videoPlayer.src = '';
        videoPlayer.style.display = 'none';
        document.body.style.background = "url('888.jpg') no-repeat fixed center center";
        document.body.style.backgroundSize = 'cover';
        results();
      }, 90000);
    }
  }
];
var num1, num2;
for (let i = 0;i < gameTypes.length;i++) {
  gameNames.push(gameTypes[i]["Name"]);
}
const chooseDiv = document.getElementById("choose");
for (const type of gameTypes) {
  const button = document.createElement("button");
  button.innerText = type.Name;
  button.style.backgroundImage = `url(${type.Img})`;
  button.style.padding = "10px";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.margin = "5px";
  button.style.color = "#fff";
  button.style.fontWeight = "bold";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.onclick = function() {
    startGame(type.Name);
  };
  chooseDiv.appendChild(button);
}
function startGame(gameTy) {
  document.getElementById('choose').style.display = "none";
  document.getElementById('gameBoard').style.display = "block";
  gameType = gameNames.indexOf(gameTy);
  questionCount = gameTypes[gameType].Questions;
  start();
}
function start() {
 document.getElementById("answer").focus();
  if (question > questionCount) {
    win();
  }
  else {
    multi();
    document.getElementById('qnum').innerHTML =  question+ " of "+questionCount;
  }
}

function multi() {
  num1 = Math.floor(Math.random() * 11);
  num2 = Math.floor(Math.random() * 11);
  
  document.getElementById('question').innerHTML =  num1 + " + " + num2 + " = ? ";
  document.getElementById("answer").value = null;
}

document.getElementById("form").addEventListener('submit', function(e) {
          e.preventDefault();
          var answer = document.getElementById("answer").value;
  var compans = (num1 + num2);
  if (answer == compans) {
    document.getElementById("good").style.display = "block"; 
    // document.getElementById("good").style.animation = "mymove 1s 1";
    setTimeout(function(){document.getElementById("good").style.display = "none";},1000)
;
    question += 1;
    correct += 1;
    var lol = document.createElement("AUDIO");
    lol.style.display = "none";
    lol.setAttribute("src","ding.mp3");
    document.body.appendChild(lol);
    lol.load();
    lol.play();
    lol.onended = function() {
      lol.remove();
    }
    start();
    
  }
  else {
    document.getElementById("bad").style.display = "block";  
    setTimeout(function(){document.getElementById("bad").style.display = "none";},1000)
;
    question += 1;
    incorrect += 1;
    start();
    
  }
      });






function pause() {
  // clearInterval(timer);
}
function play() {
    document.getElementById("answer").focus();
    start();
}
function results() {
  document.getElementById('bg1').style.display = "block";
 document.getElementById('myBar').style.width = ((correct/questionCount)*100)+"%"; document.getElementById('myBar').innerHTML = ((correct/questionCount)*100)+"%";
document.getElementById('corr').innerHTML = "<ic>Correct:</ic> "+correct; document.getElementById('incorr').innerHTML = "<ic>Incorrect:</ic> "+incorrect;
}
function win() {
  pause();
  document.getElementById('gameBoard').style.display = "none";
  if (((correct/questionCount)*100) >= 80) {
    gameTypes[gameType].Code();
  }
  else {
    results();
  }
}

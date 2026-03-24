const clubRanges = [
  { name: "DR(ドライバー)", min: 210, max: 260 },
  { name: "5W(5番ウッド)", min: 190, max: 220 },
  { name: "4U(4番ユーティリティ)", min: 180, max: 205 },
  { name: "5U(5番ユーティリティ)", min: 165, max: 195 },
  { name: "5I(5番アイアン)", min: 175, max: 190 },
  { name: "6I(6番アイアン)", min: 160, max: 175 },
  { name: "7I(7番アイアン)", min: 145, max: 160 },
  { name: "8I(8番アイアン)", min: 130, max: 145 },
  { name: "9I(9番アイアン)", min: 115, max: 130 },
  { name: "PW(ピッチングウェッジ)", min: 100, max: 115 },
  { name: "AW(アプローチウェッジ)", min: 80, max: 100 },
  { name: "SW(サンドウェッジ)", min: 10, max: 80 }
];


function calcWind(yards) {
  const wind = document.getElementById("windInput").valueAsNumber;
  if (!wind)
    return yards;
  else {
    return yards + (wind * 3)
  };
}


function calcSlope(yards) {
  const slope = document.getElementById("slope").valueAsNumber;
  if (!slope)
    return yards;
  else {
    return yards + slope
  };
}


function selectClub(yards) {
  let bestClub = clubRanges[0];
  let bestDiff = 9999;

  for (const club of clubRanges) {
    const average = (club["min"] + club["max"]) / 2;
    const diff = Math.abs(yards - average);

    if (diff < bestDiff) {
      bestDiff = diff;
      bestClub = club;
    }
  }
  return bestClub;
}


function showResult(yards, club) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "残り " + yards + "yd のおすすめクラブは" + club.name + "です。";
}


function decide() {
  let yards = document.getElementById("yardInput").valueAsNumber;

  yards = calcWind(yards);
  yards = calcSlope(yards);

  const club = selectClub(yards);

  showResult(Math.round(yards), club);
}


function rangeList() {
  const rangeListElement = document.getElementById("rangeList");
  let html = "";
  for (const club of clubRanges) {
    html +=
      '<div class="range">' + club["name"] + "  :  " + club["min"] + "〜" + club["max"] + " yd" + "</div>";
  }
  rangeListElement.innerHTML = html;
}

const buttonElement = document.getElementById("decideBtn");
buttonElement.addEventListener("click", function () {
  decide();
});
rangeList();





function calcScore() {
  let total = 0;


  for (let i = 1; i <= 18; i++) {
    const scoreValue = document.getElementById("score" + i).valueAsNumber;

    if (scoreValue) total += scoreValue;
  }

  document.getElementById("totalScore").innerHTML =
    "合計スコア：" + total + " 打";
}

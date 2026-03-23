
const clubRanges = [
  { name: "DR(ドライバー)",         min: 210, max: 260 },
  { name: "5W(5番ウッド)",          min: 190, max: 220 },
  { name: "4U(4番ユーティリティ)",   min: 180, max: 205 },
  { name: "5U(5番ユーティリティ)",   min: 165, max: 195 },
  { name: "5I(5番アイアン)",         min: 175, max: 190 },
  { name: "6I(6番アイアン)",         min: 160, max: 175 },
  { name: "7I(7番アイアン)",         min: 145, max: 160 },
  { name: "8I(8番アイアン)",         min: 130, max: 145 },
  { name: "9I(9番アイアン)",         min: 115, max: 130 },
  { name: "PW(ピッチングウェッジ)",   min: 100,  max: 115 },
  { name: "AW(アプローチウェッジ)",   min: 80,  max: 100 },
  { name: "SW(サンドウェッジ)",      min: 10,  max: 80  },
  { name: "PT(パター)",              min: 0,   max: 10  }
];



function selectClub(yards) {
  let bestClub = "SW(サンドウェッジ)";     
  let bestDiff = 1000;    

  for (const club of clubRanges) {  
    const average = (club["min"] + club["max"]) / 2;     
    const diff   = Math.abs(yards - average);      

    if (diff < bestDiff) {
      bestDiff = diff;   
      bestClub = club;   
    }
  }
  return bestClub;
}


function showResult(yards, club) {
  const resultElemnt = document.getElementById("result");
  resultElemnt.innerHTML =  "<p> 残り" + yards + "ydのおすすめ：" + club["name"] + "</p>"   //HTML内のresultタグ(resultElement)の内容を「残り～」に書き換える。
}



function decide() {
  const yards = document.getElementById("yardInput").valueAsNumber; // .valueAsNumberは要素の値を取り出して、数値に変換
  const club = selectClub(yards);
  showResult(yards, club);  //前段で定義したshowResult関数を実行
}


function rangeList() {
  const rangeListElement = document.getElementById("rangeList");
  let html = "";
  for (const club of clubRanges) {
    html +=
      "<div class='range'>" + club["name"] + "  :  "  + club["min"] + "〜" + club["max"] + " yd" + "</div>";
  }
  rangeListElement.innerHTML = html;
}


const buttonElement = document.getElementById("decideBtn");
buttonElement.addEventListener("click", function () {
  decide();
});

rangeList();

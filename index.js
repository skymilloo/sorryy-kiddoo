function nextPage(pageNumber) {
document.querySelectorAll(".page").forEach(page => {
page.classList.remove("active");
});

document
.getElementById("page" + pageNumber)
.classList.add("active");
}

/* =========================
SORRY BOX
========================= */

const sorryBox = document.getElementById("sorryBox");

if (sorryBox) {

sorryBox.addEventListener("click", () => {

const container =
  document.getElementById("sorryWords");

container.innerHTML = "";

sorryBox.innerHTML = "💥";

for(let i = 0; i < 20; i++){

  const word =
    document.createElement("div");

  word.className = "word";

  word.innerHTML =
    "i'm sorry kiddo 🤍";

  word.style.left =
    (35 + Math.random() * 30) + "%";

  word.style.top =
    (30 + Math.random() * 40) + "%";

  container.appendChild(word);

}

document
  .getElementById("boxNext")
  .style.display = "inline-block";

});

}

/* =========================
LETTER
========================= */

const envelope =
document.getElementById("envelope");

const letter =
document.getElementById("letter");

const letterText =
document.getElementById("letterText");

const fullLetter = `aku tau aku bikin kamu gamood.

aku juga tau mungkin sekarang kamu masih kesel, masih sedih, atau bahkan masih pengen marah sama aku.

aku ga bikin ini buat maksa kamu langsung baikan.

aku cuma pengen bilang kalau aku bener-bener minta maaf.

maaf karna aku kadang kurang peka sama perasaan kamu.

aku bakal berusaha buat lebih baik lagi.

dan apa pun perasaan kamu sekarang, aku bakal hargai itu.

i'm sorry, kiddo 🤍`;

if(envelope){

envelope.addEventListener("click", () => {

envelope.style.display = "none";

letter.style.display = "block";

let i = 0;

letterText.innerHTML = "";

const typing = setInterval(() => {

  letterText.innerHTML +=
    fullLetter.charAt(i);

  i++;

  if(i >= fullLetter.length){

    clearInterval(typing);

    document
      .getElementById("letterNext")
      .style.display = "inline-block";

  }

}, 30);

});

}

/* =========================
FLOWER
========================= */

const flower =
document.getElementById("flower");

if(flower){

flower.addEventListener("click", () => {

document
  .getElementById("flowerText")
  .style.display = "block";

document
  .getElementById("flowerText")
  .innerHTML =
  "makasih ya udah mau luangin waktu buat liat hal sederhana ini.<br><br>semoga mood kamu bisa lebih baik hari ini 🤍";

document
  .getElementById("flowerNext")
  .style.display = "inline-block";

});

}

/* =========================
KISS
========================= */

const kiss =
document.getElementById("kiss");

if(kiss){

kiss.addEventListener("click", () => {

const area =
  document.getElementById("kissArea");

kiss.style.display = "none";

area.innerHTML = "";

for(let i = 0; i < 30; i++){

  const item =
    document.createElement("div");

  item.className =
    "kiss-item";

  item.innerHTML = "💋";

  item.style.left =
    Math.random() * 100 + "%";

  item.style.top =
    Math.random() * 100 + "%";

  area.appendChild(item);

}

document
  .getElementById("finalMessage")
  .style.display = "block";

});

}

const messages= [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function HandleNoClick() {
    const NoButton= document.querySelector(".No");
    NoButton.textContent= messages[messageIndex];
    messageIndex= (messageIndex+1)% messages.length;
 

}
function HandleYesClick() {
    window.location.href="yes.html";
}
function moveButtons() {
  const NoButton = document.querySelector(".No");
  const YesButtons = document.querySelector(".Yes");
  if(!NoButton||!YesButtons){
    return;
  }
  // luu vi tri cua nut
  const rect = NoButton.getBoundingClientRect();
  const oldLeft = rect.left;
  const oldTop= rect.top;
  // tim vi tri nut co the dat vao
  const maxX= Math.max(window.innerWidth, document.documentElement.clientWidth)- NoButton.offsetWidth;
  const maxY= Math.max(window.innerHeight, document.documentElement.clientHeight)- NoButton.offsetHeight;
// tinh toan vi tri ngau nhien moi van nam trong khong gian an toan
const newX= Math.max(0, Math.min(Math.random()*maxX,maxX));
const newY= Math.max(0, Math.min(Math.random()*maxY,maxY));

NoButton.style.position = "absolute";
NoButton.style.left= newX+'px';
NoButton.style.top= newY+'px';
YesButtons.style.position = "absolute";
YesButtons.style.left= oldLeft+'px';
YesButtons.style.top= oldTop+'px';

}
document.querySelector(".No").addEventListener("mouseover",moveButtons);

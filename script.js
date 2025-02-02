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
const max= 600;

function HandleNoClick() {
    const NoButton= document.querySelector(".No");
    const YesButton= document.querySelector(".Yes");
    NoButton.textContent= messages[messageIndex];
    messageIndex= (messageIndex+1)% messages.length;
    const currentSize = parseFloat(window.getComputedStyle(YesButton).fontSize);
  if( currentSize<max) {
    YesButton.style.fontSize= `${currentSize*1.3875}px`;
  }

}
function HandleYesClick() {
    window.location.href="yes.html";
}
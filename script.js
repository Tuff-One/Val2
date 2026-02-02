// NO button phrases (your exact list + reordered cleanly)
const noPhrases = [
  "No 💔",
  "No?",
  "uhmmm.. Baby are you sure? 😪",
  "Think about it one more time",
  "If not for me, for baby Atu-Bear 🧸",
  "What if I faint? ",
  "But I'm your sweet boy 😔",
  "But we'd be so cute together, Baby! 💕",
  "What about a maybe?",
  "Ohh c'mon",
  "I know you wanna say yes",
  "Last chance babe",
  "Please I'm fragile 😢"
];

let noClicks = 0;

// Elements
const startBtn = document.getElementById("startBtn");
const landing = document.getElementById("landing");
const valentine = document.getElementById("valentine");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const app = document.getElementById("app");

const bgMusic = document.getElementById("bgMusic");

// START BUTTON → SHOW VALENTINE PAGE + PLAY MUSIC
startBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  valentine.classList.remove("hidden");

  // Play music (allowed because user clicked)
  bgMusic.play().catch(() => {});
});

// YES BUTTON - WITH CELEBRATION MUSIC
yesBtn.addEventListener("click", () => {
  launchConfetti();
  
  // Stop the background music
  bgMusic.pause();
  bgMusic.currentTime = 0;
  
  // Play celebration music
  const celebrationMusic = new Audio('https://image2url.com/r2/default/audio/1770033145321-5ca40041-4f99-49e0-864f-6e04cbc1655c.mp3');
  celebrationMusic.play();

  app.innerHTML = `
    <img 
      src="https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif"
      style="width:220px;"
    />
    <div class="celebration">Yay!!! 💖🎉</div>
    <img 
      src="https://github.com/Tuff-One/Val2/blob/main/yayy.png?raw=true"
    />
    <p style="font-size:20px; margin-top:20px;">
      I knew you would say yes to me mama 😌💘
      I love you my PRINCESS!!!
    </p>
  `;
});

// NO BUTTON
noBtn.addEventListener("click", () => {
  noClicks++;

  const phraseIndex = Math.min(noClicks, noPhrases.length - 1);
  noBtn.textContent = noPhrases[phraseIndex];

  // Grow YES button
  const newSize = 16 + noClicks * 8;
  yesBtn.style.fontSize = newSize + "px";
});

// CONFETTI FUNCTION
function launchConfetti() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval);
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 250);
}

// Load confetti library
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.body.appendChild(script);

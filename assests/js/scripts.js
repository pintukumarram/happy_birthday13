
// Gift Box Interaction
function openGift() {
  alert("🎁 Here's your gift! Have a wonderful year ahead!");
}

// Popup Message
setInterval(() => {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000); // Show for 2 seconds
}, 3000); // Repeat every 3 seconds

// Positive Quotes Generator
const quotes = [
  "May this year bring you joy and laughter!",
  "Wishing you all the love and happiness you deserve.",
  "Cheers to a fantastic birthday!",
  "May all your dreams come true!",
  "You are special today and every day!",
];

setInterval(() => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-box").innerText = randomQuote;
}, 5000); // Repeat every 5 seconds




// Function to update the date and time
function updateDateTime() {
  const dateTimeElement = document.getElementById('date-time');
  
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  const formattedDateTime = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
  
  dateTimeElement.innerHTML = `<span>${formattedDateTime}</span>`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the time immediately
updateDateTime();


// Select the canvas and set its dimensions
const canvas = document.getElementById('balloonCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas when window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Balloon properties
const balloons = [];
const colors = ['#ff9999', '#ffcc99', '#99ccff', '#cc99ff', '#ff99cc'];

// Create a Balloon class
class Balloon {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.radius = 20 + Math.random() * 30;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = 1 + Math.random() * 2;
        this.stringHeight = this.radius * 2;
    }

    // Draw the balloon
    draw() {
        // Draw the balloon circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        // Draw the string
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + this.radius);
        ctx.lineTo(this.x, this.y + this.stringHeight);
        ctx.strokeStyle = 'gray';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    }

    // Update balloon position
    update() {
        this.y -= this.speed; // Move balloon upwards
        if (this.y + this.radius < 0) {
            this.y = canvas.height + this.radius; // Reset balloon to bottom
            this.x = Math.random() * canvas.width; // Randomize horizontal position
        }
        this.draw();
    }
}

// Create multiple balloons
function createBalloons() {
    for (let i = 0; i < 10; i++) {
        balloons.push(new Balloon());
    }
}

// Animate the balloons
function animateBalloons() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balloons.forEach(balloon => balloon.update());
    requestAnimationFrame(animateBalloons);
}

// Initialize balloons and start animation
createBalloons();
animateBalloons();




// Array of birthday quotes
const quotess = [
  "May your day be filled with love, laughter, and endless joy. Happy Birthday!",
  "Wishing you a day filled with happiness and a year filled with love. Happy Birthday!",
  "On your special day, may happiness wrap you like a blanket and life present you with endless blessings.",
  "The world is a better place because you're in it. Happy Birthday!",
  "Sending you smiles for every moment of your special day… Have a wonderful time and a very happy birthday!",
  "A birthday is just the first day of another 365-day journey around the sun. Enjoy the trip!",
  "May the joy you bring to others come back to you today. Happy Birthday!",
  "Your birthday is a reminder that the best is yet to come. Have an amazing year ahead!",
  "Count your life by smiles, not tears. Count your age by friends, not years. Happy Birthday!",
  "A beautiful soul like yours deserves all the love and joy in the world. Have a fantastic birthday!"
];

// Function to change the quote every 5 seconds
function changeQuote() {
  const quoteBox = document.getElementById('quote-box');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.innerText = randomQuote;
}

// Call the changeQuote function every 5 seconds
setInterval(changeQuote, 3000);

// Initial call to display the first quote immediately
changeQuote();


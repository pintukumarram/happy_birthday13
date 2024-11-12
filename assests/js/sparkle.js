document.addEventListener('DOMContentLoaded', () => {
  // Get the canvas element and its 2D context
  const canvas = document.getElementById('sparkleCanvas');
  if (!canvas) {
      console.error('Canvas element not found');
      return; // Exit if canvas is not found
  }

  // Set up the canvas context
  const ctx = canvas.getContext('2d');

  // Resize the canvas to cover the full screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Array to store the sparkles
  let sparkles = [];

  // Sparkle class to define each sparkle
  class Sparkle {
      constructor(x, y, radius, color, speed, opacity) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.color = color;
          this.speed = speed;
          this.opacity = opacity;
      }

      // Method to update the sparkle's position and fade
      update() {
          this.y -= this.speed; // Move upwards
          this.opacity -= 0.02; // Fade out
          if (this.radius > 0) {
              this.radius -= 0.1; // Shrink the radius
          }
      }

      // Method to draw the sparkle on the canvas
      draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`; // Transparent color
          ctx.fill();
      }
  }

  // Function to create a new sparkle at a random position
  function createSparkle() {
      const x = Math.random() * canvas.width;
      const y = canvas.height;
      const radius = Math.random() * 3 + 2; // Random radius between 2 and 5
      const color = `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
      const speed = Math.random() * 2 + 1; // Random speed between 1 and 3
      const opacity = 0.9;

      sparkles.push(new Sparkle(x, y, radius, color, speed, opacity));
  }

  // Function to animate and update the sparkles
  function animateSparkles() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each sparkle
      for (let i = 0; i < sparkles.length; i++) {
          const sparkle = sparkles[i];
          sparkle.update();
          sparkle.draw();

          // Remove sparkle if it has faded completely
          if (sparkle.opacity <= 0 || sparkle.radius <= 0) {
              sparkles.splice(i, 1);
              i--;
          }
      }

      // Create new sparkles every 100 milliseconds
      if (Math.random() < 0.1) {
          createSparkle();
      }

      // Request animation frame for the next frame
      requestAnimationFrame(animateSparkles);
  }

  // Start the animation
  animateSparkles();
});

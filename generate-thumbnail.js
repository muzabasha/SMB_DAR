// This script generates a thumbnail image for the video
// Run this in Node.js or in browser console

const canvas = require('canvas');
const fs = require('fs');

// Create canvas
const canvasObj = canvas.createCanvas(1920, 1080);
const ctx = canvasObj.getContext('2d');

// Draw gradient background
const gradient = ctx.createLinearGradient(0, 0, 1920, 1080);
gradient.addColorStop(0, '#4f46e5');
gradient.addColorStop(1, '#764ba2');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1920, 1080);

// Add overlay
ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
ctx.fillRect(0, 0, 1920, 1080);

// Add play button
ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
ctx.beginPath();
ctx.moveTo(960 - 80, 540 - 100);
ctx.lineTo(960 - 80, 540 + 100);
ctx.lineTo(960 + 100, 540);
ctx.fill();

// Add text
ctx.fillStyle = 'white';
ctx.font = 'bold 80px Arial';
ctx.textAlign = 'center';
ctx.fillText('Making Data Memorable', 960, 400);

ctx.font = '50px Arial';
ctx.fillText('Data Analytics using R', 960, 500);

// Save image
const buffer = canvasObj.toBuffer('image/jpeg');
fs.writeFileSync('assets/video-thumbnail.jpg', buffer);

console.log('Thumbnail created: assets/video-thumbnail.jpg');

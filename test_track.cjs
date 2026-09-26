const sharp = require('sharp');

// Exact circular loop-the-loop matching media_1790342471154.jpg
const trackPath = `
  M 0 260 
  L 90 260 
  C 100 220, 100 130, 180 90 
  C 250 55, 270 140, 240 210 
  C 220 260, 140 280, 130 220 
  C 120 170, 170 230, 230 305 
  C 310 375, 370 135, 450 135 
  C 530 135, 560 305, 635 305 
  C 710 305, 740 135, 810 135 
  C 880 135, 920 270, 1000 270
`;

const svg = `
<svg width="1000" height="380" viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="1000" height="380" fill="#F4EFEB" />
  
  <defs>
    <path id="track" d="${trackPath}" />
  </defs>

  <!-- Sleepers ballast shadow -->
  <use href="#track" fill="none" stroke="#D8D0C0" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />

  <!-- Sleepers (wooden cross-ties) -->
  <use href="#track" fill="none" stroke="#262320" stroke-width="20" stroke-dasharray="3.5 11" stroke-linecap="butt" stroke-linejoin="round" />

  <!-- Outer Rails -->
  <use href="#track" fill="none" stroke="#111111" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />

  <!-- Hollow track center revealing sleepers -->
  <use href="#track" fill="none" stroke="#F4EFEB" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('d:\\aquib-anzar-·-graphic-designer-portfolio\\public\\test_track.png')
  .then(() => console.log('Rendered updated test track!'))
  .catch(console.error);

const sharp = require('sharp');
const path = require('path');

const userUploaded = 'C:\\Users\\Md Aquibanzar\\.gemini\\antigravity-ide\\brain\\84beb440-c68c-46c4-b7e8-6b26cd4e2b6b\\.user_uploaded\\media_1790361655793.jpg';
const destDir = 'd:\\aquib-anzar-·-graphic-designer-portfolio\\public';

// Dimensions: 580 x 1024
async function run() {
  // 1. 3D Yellow Station Arch "CHALCHITRA GARH"
  // Top-right area: x ~ 320 to 550, y ~ 50 to 305
  await sharp(userUploaded)
    .extract({ left: 325, top: 50, width: 225, height: 260 })
    .resize({ width: 700, kernel: 'lanczos3' })
    .jpeg({ quality: 95 })
    .toFile(path.join(destDir, 'chalchitra_garh_arch.jpg'));
  console.log('Extracted chalchitra_garh_arch.jpg');

  // 2. Hero photo: Boy with blindfold and Slurrp Farm cookies
  // Right side middle: x ~ 340 to 550, y ~ 320 to 640
  await sharp(userUploaded)
    .extract({ left: 340, top: 320, width: 210, height: 320 })
    .resize({ width: 700, kernel: 'lanczos3' })
    .jpeg({ quality: 95 })
    .toFile(path.join(destDir, 'slurrp_farm_hero.jpg'));
  console.log('Extracted slurrp_farm_hero.jpg');

  // 3. Step 2: Storyboarding 8-panel sketches
  // Bottom-left: x ~ 30 to 280, y ~ 800 to 940
  await sharp(userUploaded)
    .extract({ left: 30, top: 805, width: 250, height: 135 })
    .resize({ width: 750, kernel: 'lanczos3' })
    .jpeg({ quality: 95 })
    .toFile(path.join(destDir, 'slurrp_farm_storyboard.jpg'));
  console.log('Extracted slurrp_farm_storyboard.jpg');

  // 4. Step 3: AI Generations 4 vertical video stills
  // Middle-right: x ~ 290 to 550, y ~ 670 to 795
  await sharp(userUploaded)
    .extract({ left: 290, top: 670, width: 260, height: 125 })
    .resize({ width: 800, kernel: 'lanczos3' })
    .jpeg({ quality: 95 })
    .toFile(path.join(destDir, 'slurrp_farm_ai_generations.jpg'));
  console.log('Extracted slurrp_farm_ai_generations.jpg');

  // 5. Step 4: Editing timeline screenshot
  // Bottom-right: x ~ 290 to 550, y ~ 810 to 940
  await sharp(userUploaded)
    .extract({ left: 290, top: 810, width: 260, height: 130 })
    .resize({ width: 800, kernel: 'lanczos3' })
    .jpeg({ quality: 95 })
    .toFile(path.join(destDir, 'slurrp_farm_editing_timeline.jpg'));
  console.log('Extracted slurrp_farm_editing_timeline.jpg');
}

run().catch(console.error);

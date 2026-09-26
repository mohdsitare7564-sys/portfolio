const sharp = require('sharp');
const path = require('path');

const userUploaded = 'C:\\Users\\Md Aquibanzar\\.gemini\\antigravity-ide\\brain\\84beb440-c68c-46c4-b7e8-6b26cd4e2b6b\\.user_uploaded\\media_1790345722929.jpg';
const destDir = 'd:\\aquib-anzar-·-graphic-designer-portfolio\\public';

async function run() {
  const rows = [
    { prefix: 'nitya', top: 254, height: 120 },
    { prefix: 'max', top: 461, height: 120 },
    { prefix: 'acer', top: 664, height: 118 },
    { prefix: 'granny', top: 865, height: 110 },
  ];

  const cols = [
    { idx: 1, left: 19, width: 73 },
    { idx: 2, left: 101, width: 73 },
    { idx: 3, left: 183, width: 73 },
    { idx: 4, left: 265, width: 73 },
  ];

  for (const r of rows) {
    for (const c of cols) {
      const outName = `post_${r.prefix}_${c.idx}.jpg`;
      await sharp(userUploaded)
        .extract({ left: c.left, top: r.top, width: c.width, height: r.height })
        .resize({ width: 500, kernel: 'lanczos3' })
        .jpeg({ quality: 95 })
        .toFile(path.join(destDir, outName));
      console.log('Saved', outName);
    }
  }
}

run().catch(console.error);

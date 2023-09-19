const express = require('express');
const path = require('path');

const app = express();

// const fs = require('fs');

// function getImgFiles(folderPath) {
//   const files = fs.readdirSync(folderPath);
//   const imgFiles = files.filter(file => {
//     const extension = path.extname(file).toLowerCase();
//     return extension === '.jpg' || extension === '.webp' || extension === '.png' || extension === '.gif';
//   });
//   return imgFiles;
// }
// function getHtmFiles() {
// }
app.use('/static', express.static(path.resolve(__dirname, 'front', 'static')));
app.use('/images', express.static(path.resolve(__dirname, 'front', 'static', 'images')));

app.get('/blog-single', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'front', 'static', 'blog_single.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('Server working GOOD'));


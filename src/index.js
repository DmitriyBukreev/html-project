fs = require('fs');
path = require('path');

function getEntries(folder, pattern = /.*/) {
  const files = fs.readdirSync(folder).filter((item) => item.match(pattern));
  const entries = files.map((file) => [
    file.replace(pattern, ''),
    path.join(folder, file),
  ]);
  return Object.fromEntries(entries);
}

const entries = getEntries(path.join(__dirname, 'pages'), /\.pug$/);
console.log({ ...entries });

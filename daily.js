const fs = require('fs');

function run() {
  try {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = now.getDate();
    day = day < 10 ? `0${day}` : day;
    const date = `${year}-${month}-${day}`;

    const str = `upd: ${date}; `;

    fs.writeFileSync('./update.md', str);
    console.log('Update Success!');
  } catch (error) {
    console.log(error.message);
  }
}

run();

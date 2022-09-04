// timer1.js
const args = process.argv.slice(2);

const time = 1000;
for (const beat of args) {
  setTimeout(() => {
    process.stdout.write('.\n');
  }, beat * time);
}
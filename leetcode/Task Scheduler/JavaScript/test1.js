setTimeout(() => {
  console.log(1);
}, 0);

new Promise((resolve, reject) => {
  console.log(2);
  resolve();
  reject();
  // reject();
  // resolve();
}).then(() => {
  console.log(4);
}).catch(() => {
  console.log(3);
});
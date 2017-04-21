function asyncHoge() {
  return Promise((resolve, reject) => {
    resolve()
  });
}

async function hoge() {
  return "test"
}

const result = await hoge();
console.log(result); // => "test"

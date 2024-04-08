async function* foo() {
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
}

async function generate() {
  const parts = [];
  for await (const value of foo()) {
    parts.push(value);
  }
  console.log(parts.join(''));
}

generate();
// Expected output: "abc"

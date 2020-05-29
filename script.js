var mul;

const loadWebAssembly = fileName => fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => {
        return new WebAssembly.Instance(module)
    });

loadWebAssembly("mul.wasm")
    .then(instance => {
        mul = instance.exports._Z3mulii;
        console.log(mul(2,3));
        console.log('Ready!');
    });
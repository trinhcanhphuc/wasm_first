# MAKE A SIMPLE WEB ABSSEMBLY

## Create html file load a script file
View index.html

## Create wasm file
### Go to link: https://mbebenita.github.io/WasmExplorer/

### Input code: to **C++11 -Os**

Example:
```c
int mul(int a, int b) {
  return a * b;
}
```

### Click button **ASSEMBLE** to build c to wasm file
See export name. This name will use in js code. Example: **_Z3mulii**

### Click button **DOWNLOAD** to save wasm file

## Create script file
Load wasm file. Get function name base in wasm file. Example: **_Z3mulii**
Then set fun name from wasm function's name
```javascript
mul = instance.exports._Z3mulii
```
View detail in script.js

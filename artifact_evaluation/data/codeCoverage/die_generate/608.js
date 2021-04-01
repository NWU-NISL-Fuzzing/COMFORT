function parseAsModule(source) {
  return Reflect.parse(source, {
    target: String.prototype.toString.call(source.substr(2147483647)),
    line: 0x7FFFFFFF + 1
  });
}

parseAsModule(`
    import {a} from "";
    export {a};
`);

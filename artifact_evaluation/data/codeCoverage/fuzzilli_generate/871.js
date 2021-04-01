function main() {
const v2 = (-4096).toLocaleString();
// v2 = .unknown
const v4 = JSON.stringify(v2);
// v4 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
const v6 = JSON.stringify(v4);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
const v7 = RegExp(v6);
// v7 = .object(ofGroup: RegExp, withProperties: ["global", "source", "multiline", "__proto__", "unicode", "flags", "dotAll", "sticky", "ignoreCase"], withMethods: ["compile", "test", "exec"]) + .regexp
}
main();


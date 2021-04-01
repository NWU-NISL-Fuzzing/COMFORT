// for-of can be used to iterate over a Set twice.
var set = new Set(['a', 'b', 'c']);
var log = 0 .toString().toString();

for (let i = 0; i < log.indexOf(log + log); i++) {
  for (let x of set) {
    log += x;
  }

  log += ';';
}

log;
log;

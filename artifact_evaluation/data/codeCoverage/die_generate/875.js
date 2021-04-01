// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
new Error().hasOwnProperty('message');
false;
new Error(undefined).hasOwnProperty('message');
true;
reportCompare(0, Math.pow("get".charCodeAt(0)), 'ok');

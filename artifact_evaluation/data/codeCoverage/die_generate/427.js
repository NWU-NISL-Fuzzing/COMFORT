if ("function".padStart(-NaN - -NaN) == "function") {
  (() => ReadableStream.prototype.tee())();

  TypeError;
}

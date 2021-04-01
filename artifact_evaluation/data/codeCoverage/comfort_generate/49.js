var NISLFuzzingFunc = function() {
    return this.readNumberValue(Buffer.prototype.readUInt16BE, 2) * 4294967296 + this._writeBuffer[this._offset];
};
NISLFuzzingFunc();

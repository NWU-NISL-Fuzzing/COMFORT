// 自定义异常

// API映射到ID号出错的异常
function ApiTransformError(message) {
  this.message = message;
  this.name = 'ApiTransformError';
}
ApiTransformError.prototype = new Error();
ApiTransformError.prototype.constructor = ApiTransformError;

// 跳出forEach的异常
function ForEachBreakError(message) {
  this.message = message;
  this.name = 'ForEachBreakError';
}
ForEachBreakError.prototype = new Error();
ForEachBreakError.prototype.constructor = ForEachBreakError;



exports.ApiTransformError = ApiTransformError;
exports.ForEachBreakError = ForEachBreakError;
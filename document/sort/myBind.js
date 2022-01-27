Function.prototype.myBind = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fTemp = function() {}

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fTemp ? this : context, args.concat(bindArgs));
  }

  fTemp.prototype = this.prototype; // 不要去直接赋值
  fBound.prototype = new fTemp();
  return fBound;
}
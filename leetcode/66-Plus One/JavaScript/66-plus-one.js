var plusOne = function (digits) {
    var len = digits.length;

    for (var i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] != 0) return digits;
    }

    digits = new Array(len + 1).fill(0);
    digits[0] = 1;
    console.log(digits);
};
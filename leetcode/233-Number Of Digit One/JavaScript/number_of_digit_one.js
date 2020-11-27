var countNum = function(num, k) {
    if(num < 0 || k < 1 || k > 9) {
        return 0;
    }
    let current = num;
    let l = num;
    let t = num;
    let h = num;
    let i = 1;
    let count = 0;

    while(h!==0) {
        h = Math.floor(num / parseInt(Math.pow(10, i)));
        t = Math.floor(num % parseInt(Math.pow(10, i)));
        current = Math.floor(t / parseInt(Math.pow(10, i - 1)));
        l = Math.floor(t % parseInt(Math.pow(10, i - 1)));

        if(current === k) {
            count += h * parseInt(Math.pow(10, i - 1)) + l + 1;
        } else if(current < k) {
            count += h * parseInt(Math.pow(10, i - 1));
        } else {
            count += (h + 1) * parseInt(Math.pow(10, i - 1));
        }
        i++;
    }
    return count;
    
}

var countDigitOne = function(n) {
    let count = countNum(n, 1);
    return count;
};
function MinCoinChange(coinsArr) {
    let coins = coinsArr;

    let cache = {};
    /**
     * this
        MinCoinChange {}
            __proto__:
                constructor: ƒ MinCoinChange(coinsArr)
                    arguments: Arguments(1)
                        0: (4) [1, 4, 16, 64]
                        callee: ƒ MinCoinChange(coinsArr)
                        length: 1
                        Symbol(Symbol.iterator): ƒ values()
                        __proto__: Object
                    caller: null
                    length: 1
                    name: "MinCoinChange"
                    prototype: {constructor: ƒ}
                    __proto__: ƒ ()
                    [[FunctionLocation]]: test.html:9
                    [[Scopes]]: Scopes[1]
                __proto__:
                    constructor: ƒ Object()
                    hasOwnProperty: ƒ hasOwnProperty()
                    isPrototypeOf: ƒ isPrototypeOf()
                    propertyIsEnumerable: ƒ propertyIsEnumerable()
                    toLocaleString: ƒ toLocaleString()
                    toString: ƒ toString()
                    valueOf: ƒ valueOf()
                    __defineGetter__: ƒ __defineGetter__()
                    __defineSetter__: ƒ __defineSetter__()
                    __lookupGetter__: ƒ __lookupGetter__()
                    __lookupSetter__: ƒ __lookupSetter__()
                    get __proto__: ƒ __proto__()
                    set __proto__: ƒ __proto__()
     */
    this.makeChange = function(amount) {
        let change = [];
        let total = 0;
        
        for(let i = coins.length; i >= 0; i--) {
            let coin = coins[i];
            while(total + coin <= amount) {
                change.push(coin);
                total += coin;
            }
        }

        return change;
    }
}

let minCoinChange = new MinCoinChange([1, 4, 16, 64]);
minCoinChange.makeChange(36);
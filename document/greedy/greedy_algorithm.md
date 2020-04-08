# Greedy Algorith(贪心算法)

## 定义
- 贪心算法遵循一种近似解决问题的技术, 期盼通过每个阶段的局部最优选择(当前最好的解), 从而达到全局的最优(全局最优解)。
- 贪心得到结果是一个可以接受的解，不一定总是得到最优的解。

## 实现

### 1. 最少硬币找零问题
- 最少硬币找零是给出要找零的钱数, 以及可以用硬币的额度数量, 找出有多少种找零方法。

``` javascript
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
```

## Example --- Greedy Algorith(贪心算法)

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="origin" />
        <title>JS算法之贪心算法</title>
        <script type="text/javascript">
            function MinCoinChange(coinsArr) {
                debugger;
                let coins = coinsArr;

                let cache = {};
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
            console.log(minCoinChange.makeChange(36));
        </script>
    </head>
    <body>

    </body>
</html>
```
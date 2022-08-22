function firstUniqChar(s) {
    return Array.from(s, function (v) { 
        this.set(v, !this.has(v)); 
        return [v, this]; 
    }, new Map()).findIndex(([v, map]) => map.get(v));
}

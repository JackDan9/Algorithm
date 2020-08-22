/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length  === 0 || matrix[0].length === 0) {
        return 0;
    }
    
    var rowLen = matrix.length;
    var colLen = matrix[0].length;
    
    var height = new Array(colLen + 2).fill(0);
    
    var maxArea = 0;
    
    for (var i = 0; i < rowLen; i++) {
        var temp = [];
        for(var j = 1; j < colLen + 2; j++) {
            if(j >= 1 && j <= colLen) {
                if(matrix[i][j - 1] == "1") {
                    height[j] += 1;
                } else {
                    height[j] = 0;
                }
            }
            
            
            while(temp && height[temp.slice(-1)] > height[j]) {
                var current = temp.pop();
                maxArea = Math.max(maxArea, (j - temp.slice(-1) - 1) * height[current]);
            }
            temp.push(j);
        }
    }
    return maxArea;
};
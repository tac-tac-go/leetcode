/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    var array_flat =  grid.flat();
    var result = array_flat.filter(v => {
        return v<0
    });
    return result.length;
};

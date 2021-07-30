/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    if(JSON.stringify(points[0])!=JSON.stringify(points[1]) && 
     JSON.stringify(points[0])!=JSON.stringify(points[2]) && 
     JSON.stringify(points[1])!=JSON.stringify(points[2])
    ){
        points.sort((a,b) => a[0]-b[0]);
        if((points[1][0]-points[0][0])==0 && (points[2][0]-points[1][0])==0){return false}
        var xy_slope = (points[1][1]-points[0][1])/(points[1][0]-points[0][0])
        var yz_slope = (points[2][1]-points[1][1])/(points[2][0]-points[1][0])
        return xy_slope!=yz_slope ? true : false;
    }
    return false
};

var canFormArray = function(arr, pieces) {
    let rank = {};
    for (let i = 0; i < arr.length; i++) {
        rank[arr[i]] = i;
    }
    pieces.sort((arr1, arr2) => rank[arr1[0]] - rank[arr2[0]]);
    pieces = pieces.flat();
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i] !== arr[i]) return false;
    }
    return true;
};

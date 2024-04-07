/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = function(address) {
    return address.split(".").join("[.]");
};

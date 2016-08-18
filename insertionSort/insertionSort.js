/**
 * Created by csbacon on 8/12/2016.
 */

"use strict";

module.exports = function () {

    return {
        sort: sort
    };

    function sort (list) {
        if (list.constructor === Array) {
            var i;
            var j;

            for (i = 1; i < list.length; i++) {
                j = i;
                while (j >= 0 && list[j] < list[j-1]) {
                    swap(list, j-1, j);
                    j--;
                }
            }
        } else {
            throw "Argument must be a list.";
        }
    }

    function swap(list, index1, index2) {
        var temp = list[index1];
        list[index1] = list[index2];
        list[index2] = temp;
    }
};

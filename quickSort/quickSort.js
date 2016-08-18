/**
 * Created by csbacon on 8/15/2016.
 */

"use strict";

module.exports = function () {

    return {
        sort: sort
    };

    function sort(list) {
        if (list.constructor === Array) {
            quickSortRecursion(list, 0, list.length - 1);
        } else {
            throw "Argument must be a list";
        }

    }

    function quickSortRecursion(list, low, high) {
        var pivot;

        if (low < high) {
            pivot = partition(list, low, high);
            quickSortRecursion(list, low, pivot);
            quickSortRecursion(list, pivot + 1, high);
        }
    }

    function partition(list, low, high) {
        var pivot = list[low];
        var i = low - 1;
        var j = high + 1;

        while (true) {

            do {
                i++;
            } while (list[i] < pivot);

            do {
                j--;
            } while (list[j] > pivot);

            if (i >= j) {
                return j;
            }

            swap(list, i, j);
        }
    }

    function swap(list, index1, index2) {
        var temp = list[index1];
        list[index1] = list[index2];
        list[index2] = temp;
    }
};

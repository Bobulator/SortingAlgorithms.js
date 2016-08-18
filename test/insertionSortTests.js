/**
 * Created by csbacon on 8/12/2016.
 */

"use strict";

var chai = require("chai");

var should = chai.should();
var expect = chai.expect;

describe("InsertionSort Tests", function () {
    var insertionSort;
    var list;
    var expectedList;

    beforeEach(function () {
        insertionSort = require("../insertionSort/insertionSort")();
        list = null;
        expectedList = null;
    });

    it("should not throw an error for empty lists", function () {
        list = [];
        expectedList = [];

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });

    it("should not throw an error for lists of length 1", function () {
        list = [5];
        expectedList = [5];

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });

    it("should be able to sort a small unsorted lists", function () {
        list = [18, 4, 7];
        expectedList = [4, 7, 18];

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });

    it("should leave sorted lists unmodified", function () {
        list = [1, 2, 3, 4, 5];
        expectedList = [1, 2, 3, 4, 5];

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });

    it("should work for lists where only the last element is out of order", function () {
        list = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1];
        expectedList = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });

    it("should work for reversed sorted lists", function () {
        list = [0, -1, -2, -3, -4, -5];
        expectedList = [-5, -4, -3, -2, -1, 0];

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });

    it("should properly sort lists with duplicate values", function () {
        list = [0, 0, 0, 0, -5, -5, -5, -5, -5, 99, 99];
        expectedList = [-5, -5, -5, -5, -5, 0, 0, 0, 0, 99, 99];

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });

    it("should work for randomly sorted lists of size 9000", function () {
        this.timeout(5000);

        var length = 9000;
        var i;
        var randomIndex;
        var temp;

        list = [];
        expectedList = [];

        for (i = 0; i < length; i++) {
            list[i] = i;
            expectedList[i] = i;
        }

        // Randomly scramble the list in place
        for (i = length-1; i >= 0; i--) {
            randomIndex = Math.floor(Math.random() * (i));
            temp = list[randomIndex];
            list[randomIndex] = list[i];
            list[i] = temp;
        }

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });

    it("should work for randomly sorted lists of size 25000", function () {
        this.timeout(5000);

        var length = 25000;
        var i;
        var randomIndex;
        var temp;

        list = [];
        expectedList = [];

        for (i = 0; i < length; i++) {
            list[i] = i;
            expectedList[i] = i;
        }

        // Randomly scramble the list in place
        for (i = length-1; i >= 0; i--) {
            randomIndex = Math.floor(Math.random() * (i));
            temp = list[randomIndex];
            list[randomIndex] = list[i];
            list[i] = temp;
        }

        insertionSort.sort(list);

        list.should.deep.equal(expectedList);
    });
});

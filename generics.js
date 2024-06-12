/**
 * Generic identity function.
 * @param value - The value to return.
 * @returns The same value that was passed in.
 */
function identity(value) {
    return value;
}
/**
 * Generic array reversal function.
 * @param array - The array to reverse.
 * @returns A new array with the elements in reverse order.
 */
function reverseArray(array) {
    return array.slice().reverse();
}
/**
 * Generic object mapper function.
 * @param obj - The object to map.
 * @param mapFn - The mapping function to apply to each value.
 * @returns A new object with the same keys but mapped values.
 */
function mapObject(obj, mapFn) {
    var result = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFn(obj[key]);
        }
    }
    return result;
}
/**
 * Generic array filtering function.
 * @param array - The array to filter.
 * @param predicate - The predicate function to determine which elements to include.
 * @returns A new array with the elements that pass the predicate function.
 */
function filterArray(array, predicate) {
    return array.filter(predicate);
}
// Sample test cases to validate functionality
// Identity function tests
console.log(identity(1)); // 1
console.log(identity("hello")); // "hello"
// Reverse array function tests
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]
// Map object function tests
console.log(mapObject({ a: 1, b: 2 }, function (x) { return x.toString(); })); // { a: "1", b: "2" }
console.log(mapObject({ x: 3, y: 4 }, function (x) { return x * 2; })); // { x: 6, y: 8 }
// Filter array function tests
console.log(filterArray([1, 2, 3, 4], function (x) { return x % 2 === 0; })); // [2, 4]
console.log(filterArray(["apple", "banana", "cherry"], function (x) { return x.startsWith("b"); })); // ["banana"]

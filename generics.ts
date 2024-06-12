/**
 * Generic identity function.
 * @param value - The value to return.
 * @returns The same value that was passed in.
 */
function identity<T>(value: T): T {
    return value;
}

/**
 * Generic array reversal function.
 * @param array - The array to reverse.
 * @returns A new array with the elements in reverse order.
 */
function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

/**
 * Generic object mapper function.
 * @param obj - The object to map.
 * @param mapFn - The mapping function to apply to each value.
 * @returns A new object with the same keys but mapped values.
 */
function mapObject<K extends string | number | symbol, V, U>(obj: Record<K, V>, mapFn: (value: V) => U): Record<K, U> {
    const result: Record<K, U> = {} as Record<K, U>;
    for (const key in obj) {
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
function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
    return array.filter(predicate);
}

// Sample test cases to validate functionality

// Identity function tests
console.log(identity<number>(1)); // 1
console.log(identity<string>("hello")); // "hello"

// Reverse array function tests
console.log(reverseArray<number>([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // ["c", "b", "a"]

// Map object function tests
console.log(mapObject({ a: 1, b: 2 }, x => x.toString())); // { a: "1", b: "2" }
console.log(mapObject({ x: 3, y: 4 }, x => x * 2)); // { x: 6, y: 8 }

// Filter array function tests
console.log(filterArray<number>([1, 2, 3, 4], x => x % 2 === 0)); // [2, 4]
console.log(filterArray<string>(["apple", "banana", "cherry"], x => x.startsWith("b"))); // ["banana"]

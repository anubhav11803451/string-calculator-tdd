/**
 * Escape special regex characters in a string to be used as a regex delimiter.
 * @description It replaces characters like `.`, `*`, `+`, etc. with their escaped versions, e.g., `\.`.
 * @param {string} string
 * @returns {string}
 */

export function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function throwNegativeNumbersError(negatives) {
    throw new Error("negative numbers not allowed: " + negatives.join(","));
}
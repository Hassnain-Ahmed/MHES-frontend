/**
 * Sanitizes an input string, keeping only alphabetic characters and limiting the result to 50 characters.
 * @param {string} input - The raw string input to sanitize.
 * @returns {string} - The sanitized string with only alphabetic characters (max 50 chars).
 */

function sanitizeString(input) {
    // Ensure input is of type string
    if (typeof input !== 'string') {
        return ''; // Optionally handle non-string inputs
    }

    // Remove all non-alphabetic characters using a regular expression
    const alphabeticOnly = input.replace(/[^a-zA-Z\s]/g, '');

    // Limit the result to the first 50 alphabetic characters
    return alphabeticOnly.substring(0, 50);
}

export default sanitizeString
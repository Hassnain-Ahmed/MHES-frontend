/**
 * Sanitizes an input string, keeping only numeric characters and limiting the result to 50 digits.
 * @param {string} input - The raw string input to sanitize.
 * @returns {string} - The sanitized string with only numeric characters (max 50 digits).
 */
function sanitizeNumeric(input) {
    // Ensure input is of type string
    if (typeof input !== 'string') {
        return ''; // Optionally handle non-string inputs
    }

    // Remove all non-numeric characters using a regular expression
    const numericOnly = input.trim().replace(/[^0-9]/g, '');

    // Limit the result to the first 50 numeric characters
    return Number(numericOnly.substring(0, 14))
}

export default sanitizeNumeric
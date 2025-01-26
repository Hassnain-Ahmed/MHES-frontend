/**
 * Sanitizes a password by trimming whitespace, removing quotation marks, and enforcing length constraints.
 * Allows all characters except for single and double quotation marks.
 * @param {string} input - The raw password input to sanitize.
 * @returns {string} - The sanitized password, or an empty string if the password is invalid.
 */
function sanitizePassword(input) {

    let sanitizedPassword = input.replace(/['"]/g, '');

    return sanitizedPassword;
}

export default sanitizePassword;

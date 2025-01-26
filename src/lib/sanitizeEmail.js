/**
 * Sanitizes an email input string by allowing only valid email characters.
 * @param {string} input - The raw email input to sanitize.
 * @returns {string} - The sanitized email string (max 254 characters).
 */

function sanitizeEmail(input) {
    // Ensure input is of type string
    if (typeof input !== 'string') {
        return ''; // Optionally handle non-string inputs
    }

    // Define a regular expression for valid email characters:
    // Allow letters (a-z, A-Z), numbers (0-9), and special email characters: @, ., +, -, _, etc.
    const validEmailChars = input.trim().replace(/[^a-zA-Z0-9@._+-]/g, '').toLowerCase();

    // Limit the result to a maximum of 254 characters
    return validEmailChars.substring(0, 254);
}

export default sanitizeEmail
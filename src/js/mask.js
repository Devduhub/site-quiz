/**
 * Automatic Phone Mask & Validation Utility for Brazilian Numbers
 */

export function applyPhoneMask(value) {
  if (!value) return '';
  
  // Remove all non-digits
  let digits = value.replace(/\D/g, '');
  
  // Limit to max 11 digits (2 area code + 9 phone digits)
  if (digits.length > 11) {
    digits = digits.substring(0, 11);
  }
  
  // Apply formatting dynamically: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
  if (digits.length <= 2) {
    return digits.length ? `(${digits}` : '';
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function isValidPhone(phoneString) {
  const digits = phoneString.replace(/\D/g, '');
  // Valid Brazilian phone must have 10 digits (landline) or 11 digits (mobile starting with 9)
  if (digits.length < 10 || digits.length > 11) return false;
  
  // Basic area code check (DDD 11 to 99)
  const ddd = parseInt(digits.substring(0, 2), 10);
  if (ddd < 11 || ddd > 99) return false;
  
  // If 11 digits, mobile should start with 9
  if (digits.length === 11 && digits[2] !== '9') return false;
  
  return true;
}

export function isValidName(nameString) {
  if (!nameString || nameString.trim().length < 2) return false;
  return true;
}

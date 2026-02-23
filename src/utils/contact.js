/**
 * Contact information utility
 * Details are obfuscated to avoid plain-text scraping
 */

// Encoded contact data (base64 + reversed)
const _d = {
  // WhatsApp number: +34 612345678 → 34612345678
  w: 'ODc2NTQzMjE2NDM=',
  // Display number format
  p: 'ODc2IDU0MyAyMTYgNDMr',
  // Email
  e: 'bW9jLm5pYXBzZ25pZG5hbGVmYXNAb2ZuaQ==',
};

/**
 * Decode a reversed base64 string
 */
const decode = (encoded) => {
  try {
    return atob(encoded.split('').reverse().join(''));
  } catch {
    return '';
  }
};

/**
 * Get WhatsApp number (digits only, no +)
 */
export const getWhatsAppNumber = () => decode(_d.w);

/**
 * Get display-formatted phone number
 */
export const getDisplayPhone = () => decode(_d.p);

/**
 * Get email address
 */
export const getEmail = () => decode(_d.e);

/**
 * Build WhatsApp click-to-chat URL with optional pre-filled message
 */
export const buildWhatsAppUrl = (message = '') => {
  const number = getWhatsAppNumber();
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

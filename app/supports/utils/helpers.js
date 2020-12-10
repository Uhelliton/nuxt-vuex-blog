/**
 *
 * @param str
 * @returns {*}
 */
export const numberOnly = (str) => {
  return str.replace(/[^0-9\.]+/g, '')
}

/**
 *
 * @param string
 * @param separator
 * @returns {string}
 */
export const slugify = (string, separator = '-') => {
  return string
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, separator);
}

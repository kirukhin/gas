// lib/slugify.js

export function slugify(str = '') {
  return String(str)
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(/\s+/g, '-')   // пробелы → дефис
    .replace(/[\/,_]+/g, '-') 
    .replace(/[^a-z0-9\-а-яё0-9]+/ig, '') 
    .replace(/\-+/g, '-') 
    .replace(/(^-|-$)/g, '');
}

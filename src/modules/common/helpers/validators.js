export const isBCPostalCodeValidator = (value) => {
  const criteria = RegExp('^[Vv]\\d[ABCEGHJ-NPRSTV-Zabceghj-nprstv-z][ ]?\\d[ABCEGHJ-NPRSTV-Zabceghj-nprstv-z]\\d$');
  return criteria.test(value);
};

export default function convertScale(temp, scale) {
  if (scale === 'f') {
    const f = temp * (9 / 5) + 32;
    return f;
  }
  if (scale === 'c') {
    const c = (temp - 32) * (5 / 9);
    return c;
  }
  return '';
}

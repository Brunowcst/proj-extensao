export function maskPhone(input: string): string {
  const phone = input.replaceAll(/\D/g, '');
  if (phone.length == 11) {
    return `(${phone.substring(0, 2)}) ${phone.substring(
      2,
      7
    )}-${phone.substring(7)}`;
  }
  if (phone.length > 2 + 5) {
    return `(${phone.substring(0, 2)}) ${phone.substring(
      2,
      6
    )}-${phone.substring(6)}`;
  }
  if (phone.length > 2) {
    return '(' + phone.substring(0, 2) + ') ' + phone.substring(2);
  }
  if (phone.length > 0) return '(' + phone;
  return phone;
}

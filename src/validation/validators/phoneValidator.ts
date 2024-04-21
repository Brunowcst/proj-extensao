const DDDs = [
  69, 68, 97, 92, 95, 91, 94, 93, 96, 63, 99, 98, 89, 86, 88, 85, 84, 83, 81,
  87, 82, 79, 77, 75, 73, 74, 71, 34, 37, 31, 33, 35, 32, 38, 27, 28, 24, 22,
  21, 18, 17, 19, 14, 15, 16, 11, 12, 13, 43, 41, 42, 44, 46, 45, 49, 47, 48,
  53, 54, 55, 51, 67, 65, 66, 62, 64, 61,
];

export function validatePhone(phoneInput: string): string {
  const phone = phoneInput.replaceAll(/\D/g, '');

  if (phone.length <= 10 || phone.length > 11) {
    return 'Telefone inválido';
  }

  if (!DDDs.includes(parseInt(phone.substring(0, 2)))) {
    return 'DDD inválido';
  }

  if (phone.length === 2 + 9 && phone[2] != '9') {
    return 'Número de celular inválido';
  }

  return '';
}

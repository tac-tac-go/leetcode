function totalMoney(n: number): number {
  const weeks = Math.ceil(n / 7)
  const daysInLastWeek = n % 7 === 0 ? 7 : n % 7

  let result = 0
  for (let i = 0; i < 7; i++) {
    const days = weeks - (i < daysInLastWeek ? 0 : 1)
    result += days * (days + i + i + 1) / 2
  }
  return result
};

export const paymentFrequencies = { monthly: 12, fortnightly: 26, weekly: 52 };

export function calculateMortgage({ amount, rate, years, firstYear, frequency }) {
  const periods = paymentFrequencies[frequency];
  if (!Number.isFinite(amount) || amount <= 0 || amount > 1e12 ||
      !Number.isFinite(rate) || rate < 0 || rate > 100 ||
      !Number.isInteger(years) || years < 1 || years > 50 ||
      !Number.isInteger(firstYear) || firstYear < 1900 || firstYear > 2200 || !periods) {
    throw new Error("Please enter a valid amount, rate, term and first payment year.");
  }
  const count = years * periods;
  const periodicRate = rate / 100 / periods;
  const payment = periodicRate === 0 ? amount / count
    : amount * periodicRate / -Math.expm1(-count * Math.log1p(periodicRate));
  let balance = amount;
  let totalInterest = 0;
  const schedule = [];
  for (let year = 0; year < years; year++) {
    let interest = 0;
    let principal = 0;
    for (let period = 0; period < periods; period++) {
      const charge = balance * periodicRate;
      const repayment = year === years - 1 && period === periods - 1
        ? balance : Math.min(balance, payment - charge);
      interest += charge;
      principal += repayment;
      balance = Math.max(0, balance - repayment);
    }
    totalInterest += interest;
    schedule.push({ year: firstYear + year, interest, principal, balance });
  }
  return { payment, totalInterest, totalPaid: amount + totalInterest, schedule };
}

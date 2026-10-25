"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Calculator, X } from "lucide-react";
import Link from "next/link";
import { calculateMortgage } from "@/lib/mortgage.mjs";

const money = (value) => new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 2,
}).format(value);
const frequencyLabels = { monthly: "Monthly", fortnightly: "Every two weeks", weekly: "Weekly" };
const fieldClass = "mt-3 w-full rounded-[4px] border border-foreground/20 bg-background px-4 py-3.5 font-sans text-base text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";
const labelClass = "font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-muted";
const buttonClass = "rounded-[4px] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

function compute(input) {
  const inputs = { amount: Number(input.amount), rate: Number(input.rate), years: Number(input.years), firstYear: Number(input.firstYear), frequency: input.frequency };
  return { ...calculateMortgage(inputs), inputs };
}

export default function MortgageCalculator({ firstYear }) {
  const defaults = { amount: "", rate: "", years: "", firstYear: String(firstYear), frequency: "" };
  const [values, setValues] = useState(defaults);
  const [estimate, setEstimate] = useState(null);
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);
  const dialogRef = useRef(null);
  const formRef = useRef(null);

  function update(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
    setDirty(true);
    setError("");
  }

  function calculate(openSchedule = false) {
    if (!formRef.current.reportValidity()) return;
    try {
      setEstimate(compute(values));
      setDirty(false);
      setError("");
      if (openSchedule) dialogRef.current.showModal();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="min-h-screen bg-background pt-[86px]">
      <section className="border-b border-foreground/10 px-6 py-16 text-center md:py-20">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">Tools for your next chapter</p>
        <h1 className="mt-4 font-display text-[34px] uppercase leading-tight md:text-[48px]">Mortgage <span className="text-primary">Calculator</span></h1>
        <p className="mx-auto mt-5 max-w-[560px] text-sm font-light leading-7 text-muted">A clearer view of your next investment. Explore your payments and see how your mortgage balance changes over time.</p>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-8 px-6 py-14 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:py-20">
        <form ref={formRef} onSubmit={(event) => { event.preventDefault(); calculate(); }}>
          <div className="mb-8 flex items-center gap-3">
            <Calculator size={20} className="text-primary" strokeWidth={1.5} />
            <h2 className="font-display text-xl">Your mortgage details</h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2">
            <label className={labelClass}>Mortgage amount ($)
              <input className={fieldClass} name="amount" placeholder="e.g. 100000" type="number" min="1" max="1000000000000" step="0.01" required value={values.amount} onChange={update} />
            </label>
            <label className={labelClass}>Annual interest rate (%)
              <input className={fieldClass} name="rate" placeholder="e.g. 5" type="number" min="0" max="100" step="0.001" required value={values.rate} onChange={update} />
            </label>
            <label className={labelClass}>Mortgage length
              <select className={fieldClass} name="years" required value={values.years} onChange={update}>
                <option value="" disabled>Select mortgage length</option>
                {[5, 10, 15, 20, 25, 30, 35, 40].map((year) => <option key={year} value={year}>{year} years</option>)}
              </select>
            </label>
            <label className={labelClass}>First payment year
              <input className={fieldClass} name="firstYear" placeholder={`e.g. ${firstYear}`} type="number" min={firstYear} max="2200" step="1" required value={values.firstYear} onChange={update} />
            </label>
            <label className={`${labelClass} sm:col-span-2`}>Payment frequency
              <select className={fieldClass} name="frequency" required value={values.frequency} onChange={update}>
                <option value="" disabled>Select payment frequency</option>
                {Object.entries(frequencyLabels).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
              </select>
            </label>
          </div>
          {error && <p role="alert" className="mt-4 text-sm text-red-400">{error}</p>}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <button className={`${buttonClass} bg-primary text-background hover:bg-primary-light`} type="submit">Calculate</button>
            <button className={`${buttonClass} border border-primary text-primary hover:bg-primary/10`} type="button" onClick={() => calculate(true)}>Amortize</button>
            <button className={`${buttonClass} border border-foreground/20 text-muted hover:border-foreground/50 hover:text-foreground`} type="button" onClick={() => { setValues(defaults); setEstimate(null); setDirty(false); setError(""); }}>Reset</button>
          </div>
          <p className="mt-6 text-xs leading-6 text-muted">Estimates assume a fixed annual rate, equal payments and a full year of payments starting in your selected year. Taxes, insurance and lender fees are excluded. Amounts use the same dollar currency as your loan.</p>
        </form>

        <aside className="self-start rounded-[4px] border border-primary/25 bg-surface p-7 md:p-9" aria-live="polite">
          <p className={labelClass}>Your estimated payment</p>
          {estimate ? (<>
          <p className="mt-5 break-words font-display text-[38px] leading-tight text-primary md:text-[44px]">{money(estimate.payment)}</p>
          <p className="mt-2 text-sm text-muted">{frequencyLabels[estimate.inputs.frequency]} · {estimate.inputs.years} years</p>
          {dirty && <p className="mt-4 text-xs text-primary">Details changed. Select Calculate to update your estimate.</p>}
          <dl className="mt-8 space-y-5 border-t border-foreground/10 pt-7 text-sm">
            <div className="flex flex-wrap justify-between gap-2"><dt className="text-muted">Mortgage amount</dt><dd>{money(estimate.inputs.amount)}</dd></div>
            <div className="flex flex-wrap justify-between gap-2"><dt className="text-muted">Total interest</dt><dd>{money(estimate.totalInterest)}</dd></div>
            <div className="flex flex-wrap justify-between gap-2 border-t border-foreground/10 pt-5"><dt className="text-muted">Total repayment</dt><dd className="text-primary">{money(estimate.totalPaid)}</dd></div>
          </dl>
          </>) : (
            <p className="mt-5 text-sm leading-7 text-muted">Enter your mortgage details and select Calculate to see your estimated payment and total interest.</p>
          )}
          <div className="mt-8 border-t border-foreground/10 pt-6">
            <p className="text-sm leading-6 text-muted">Ready to find a property that fits your plans?</p>
            <Link href="/properties" className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-primary-light">Explore properties <ArrowUpRight size={16} /></Link>
          </div>
        </aside>
      </section>

      <dialog ref={dialogRef} aria-labelledby="amortization-title" className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-[850px] overflow-auto rounded-[4px] border border-primary/30 bg-surface p-0 text-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm" onClick={(event) => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.currentTarget.close(); } }}>
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-foreground/10 bg-surface p-6 md:px-8">
          <div><p className="text-[10px] uppercase tracking-[0.2em] text-primary">The year ahead, and beyond</p><h2 id="amortization-title" className="mt-2 font-display text-xl md:text-2xl">Yearly amortization</h2></div>
          <button type="button" aria-label="Close amortization breakdown" onClick={() => dialogRef.current.close()} className="rounded p-2 text-muted hover:text-primary focus-visible:outline-primary"><X size={22} /></button>
        </div>
        {estimate && <div className="p-6 md:p-8">
          <p className="text-sm leading-7 text-muted">{money(estimate.inputs.amount)} mortgage · {estimate.inputs.rate}% annual interest · {estimate.inputs.years} years<br />{money(estimate.payment)} paid {frequencyLabels[estimate.inputs.frequency].toLowerCase()}</p>
          <div className="mt-6 overflow-x-auto rounded border border-foreground/10" tabIndex={0} role="region" aria-label="Yearly repayment table">
            <table className="w-full min-w-[540px] text-right text-sm tabular-nums">
              <caption className="sr-only">Yearly interest, principal repaid and remaining mortgage balance</caption>
              <thead className="bg-primary/10 text-primary"><tr>{["Year", "Interest", "Principal", "Balance"].map((label) => <th scope="col" key={label} className="px-4 py-4 font-medium">{label}</th>)}</tr></thead>
              <tbody>{estimate.schedule.map((row) => <tr key={row.year} className="border-t border-foreground/10 even:bg-foreground/[0.02]"><th scope="row" className="px-4 py-4 font-normal text-primary">{row.year}</th><td className="px-4 py-4 text-muted">{money(row.interest)}</td><td className="px-4 py-4">{money(row.principal)}</td><td className="px-4 py-4">{money(row.balance)}</td></tr>)}</tbody>
              <tfoot className="border-t border-primary/25 bg-primary/10"><tr><th scope="row" className="px-4 py-4 font-medium text-primary">Total</th><td className="px-4 py-4">{money(estimate.totalInterest)}</td><td className="px-4 py-4">{money(estimate.inputs.amount)}</td><td className="px-4 py-4">{money(0)}</td></tr></tfoot>
            </table>
          </div>
          <p className="mt-5 text-xs leading-6 text-muted">Figures are estimates; displayed values are rounded to the nearest cent.</p>
        </div>}
      </dialog>
    </main>
  );
}

"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import carsData from "../data/cars.json";

export default function Page(){
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ fuel: "", price: "", body: "" });
  const cars = carsData;

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      const matchQuery = !query || c.title.toLowerCase().includes(query.toLowerCase());
      const matchFuel = !filters.fuel || c.specs.fuel === filters.fuel;
      const matchBody = !filters.body || c.specs.body === filters.body;
      const matchPrice = !filters.price ||
        (filters.price === "under15" && c.price < 15000) ||
        (filters.price === "15to20" && c.price >= 15000 && c.price <= 20000) ||
        (filters.price === "over20" && c.price > 20000);
      return matchQuery && matchFuel && matchBody && matchPrice;
    });
  }, [cars, query, filters]);

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-bold">MP</div>
            <div>
              <p className="text-sm leading-none text-neutral-500">MP PLAYERS CARS</p>
              <h1 className="text-base font-semibold leading-none">Nationwide Sourcing • 7.5% APR</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#stock" className="hover:text-black/70">Stock</a>
            <a href="#finance" className="hover:text-black/70">Finance</a>
            <a href="#reviews" className="hover:text-black/70">Reviews</a>
            <a href="#contact" className="hover:text-black/70">Contact</a>
          </nav>
          <a href="https://wa.me/447000000000?text=Hi%20MP%20Players%20Cars%2C%20I%27m%20interested%20in%20a%20car" className="rounded-2xl px-4 py-2 bg-black text-white text-sm font-medium shadow hover:opacity-90">WhatsApp</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200 via-neutral-100 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1 text-xs mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Soft Search Finance • Instant Pre‑Qual
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Buy your next car <span className="underline decoration-amber-400 decoration-4 underline-offset-4">from the sofa</span>
              </h2>
              <p className="mt-4 text-neutral-600 text-lg">
                Online dealership. Nationwide delivery. Transparent pricing. Fixed <strong>7.5% APR</strong> on approved finance.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#stock" className="btn-primary">Browse Stock</a>
                <a href="#finance" className="btn-secondary">Get Finance</a>
              </div>

              {/* Search & filters */}
              <div className="mt-8 p-3 bg-white border border-neutral-200 rounded-2xl shadow-sm">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search make/model (e.g. Audi, 1 Series)"
                    className="flex-1 rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                  />
                  <select
                    className="rounded-xl border border-neutral-300 px-4 py-3"
                    value={filters.fuel}
                    onChange={(e) => setFilters((f) => ({ ...f, fuel: e.target.value }))}
                  >
                    <option value="">Fuel</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Hybrid</option>
                    <option>Electric</option>
                  </select>
                  <select
                    className="rounded-xl border border-neutral-300 px-4 py-3"
                    value={filters.body}
                    onChange={(e) => setFilters((f) => ({ ...f, body: e.target.value }))}
                  >
                    <option value="">Body</option>
                    <option>Hatchback</option>
                    <option>SUV</option>
                    <option>Coupe</option>
                    <option>Saloon</option>
                    <option>Estate</option>
                  </select>
                  <select
                    className="rounded-xl border border-neutral-300 px-4 py-3"
                    value={filters.price}
                    onChange={(e) => setFilters((f) => ({ ...f, price: e.target.value }))}
                  >
                    <option value="">Price</option>
                    <option value="under15">Under £15k</option>
                    <option value="15to20">£15k–£20k</option>
                    <option value="over20">Over £20k</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200">
                <Image src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop" alt="Showcase car" width={2000} height={1500} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white border border-neutral-200 rounded-2xl shadow p-4 w-64">
                <p className="text-sm font-semibold">Free Nationwide Delivery</p>
                <p className="text-xs text-neutral-600">Avg 5–7 working days • Live tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock */}
      <section id="stock" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Available Stock</h3>
            <p className="text-neutral-600">{filtered.length} car{filtered.length === 1 ? "" : "s"} found</p>
          </div>
          <a href="#contact" className="text-sm underline underline-offset-4">Can’t see your car? We’ll source it →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((c) => (
            <article key={c.id} className="group card hover:shadow-md transition">
              <div className="relative">
                <Image src={c.img} alt={c.title} width={1200} height={800} className="h-48 w-full object-cover" />
                <span className="absolute top-3 left-3 rounded-full bg-black/80 text-white text-xs px-3 py-1">{c.badge}</span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg leading-snug">{c.title}</h4>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xl font-extrabold">£{c.price.toLocaleString()}</p>
                  <p className="text-sm text-neutral-600">from £{c.monthly}/mo</p>
                </div>
                <dl className="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-600">
                  <div><dt className="font-medium">Miles</dt><dd>{c.specs.mileage.toLocaleString()}</dd></div>
                  <div><dt className="font-medium">Fuel</dt><dd>{c.specs.fuel}</dd></div>
                  <div><dt className="font-medium">Gearbox</dt><dd>{c.specs.transmission}</dd></div>
                </dl>
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex-1 rounded-xl px-4 py-2 bg-black text-white text-sm font-medium">View details</button>
                  <button className="rounded-xl px-3 py-2 border border-neutral-300 text-sm">Reserve £99</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Finance */}
      <section id="finance" className="bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold">Simple finance at 7.5% APR</h3>
              <p className="mt-2 text-neutral-600">Soft search in under 60 seconds. No impact on credit score. Instant decision from our panel of lenders.</p>
              <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-neutral-700">
                <li>Fixed APR • Clear monthly price on every listing</li>
                <li>£0 admin fees • Overpay anytime</li>
                <li>Fully online — e-sign in minutes</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-neutral-200 p-6 shadow-sm bg-neutral-50">
              <FinanceWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold">5‑Star Happy Drivers</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="text-sm text-neutral-600">Verified buyer</span>
              </div>
              <p className="mt-3 text-sm">“Seamless from WhatsApp to driveway. Finance sorted same day, car delivered spotless. 10/10.”</p>
              <p className="mt-3 text-xs text-neutral-500">— Alex D, Kent</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-900 text-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold">Let’s find your next car</h3>
              <p className="mt-2 text-neutral-300">Tell us the make, model, budget, and we’ll source it nationwide — delivered to your door.</p>
              <ul className="mt-4 text-sm text-neutral-300 space-y-1">
                <li>📞 <a className="underline" href="tel:+447000000000">+44 7000 000000</a></li>
                <li>💬 <a className="underline" href="https://wa.me/447000000000">WhatsApp us</a></li>
                <li>📧 <a className="underline" href="mailto:sales@mpplayerscars.co.uk">sales@mpplayerscars.co.uk</a></li>
              </ul>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="bg-neutral-800 rounded-3xl p-6 border border-neutral-700">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Name" className="rounded-xl px-4 py-3 bg-neutral-900 border border-neutral-700 outline-none" />
                <input required placeholder="Phone or Email" className="rounded-xl px-4 py-3 bg-neutral-900 border border-neutral-700 outline-none" />
                <input placeholder="Make & Model" className="rounded-xl px-4 py-3 bg-neutral-900 border border-neutral-700 outline-none sm:col-span-2" />
                <input placeholder="Budget (£)" className="rounded-xl px-4 py-3 bg-neutral-900 border border-neutral-700 outline-none" />
                <select className="rounded-xl px-4 py-3 bg-neutral-900 border border-neutral-700 outline-none">
                  <option>Finance</option>
                  <option>Cash</option>
                  <option>Part‑Ex</option>
                </select>
                <textarea placeholder="Anything else…" className="rounded-xl px-4 py-3 bg-neutral-900 border border-neutral-700 outline-none sm:col-span-2 h-28" />
              </div>
              <button className="mt-4 w-full rounded-xl px-4 py-3 bg-white text-black font-semibold">Get a call back</button>
              <p className="mt-2 text-xs text-neutral-400">By submitting you agree to our <a className="underline" href="#">privacy policy</a>.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xs text-neutral-500 space-y-1">
          <p>© {new Date().getFullYear()} MP Players Cars. All rights reserved.</p>
          <p>FCA Reg: 123456. We are a credit broker, not a lender. Representative example: £10,000 credit, 48 months at 7.5% APR, fixed.</p>
          <div className="flex gap-4">
            <a href="#" className="underline">T&Cs</a>
            <a href="#" className="underline">Privacy</a>
            <a href="#" className="underline">Complaints</a>
            <a href="#" className="underline">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stars(){
  return (
    <div className="flex items-center gap-1" aria-label="5 stars">
      {Array.from({length:5}).map((_,i)=>(
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-amber-400"><path d="M12 .587l3.668 7.431 8.207 1.192-5.938 5.79 1.402 8.168L12 18.896l-7.339 3.872 1.402-8.168L.125 9.21l8.207-1.192z"/></svg>
      ))}
    </div>
  )
}

function FinanceWidget(){
  const [price, setPrice] = useState(15000);
  const [deposit, setDeposit] = useState(1500);
  const [term, setTerm] = useState(48);
  const apr = 0.075;

  const monthly = useMemo(() => {
    const amount = Math.max(price - deposit, 0);
    const monthlyRate = apr / 12;
    const pmt = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    return isFinite(pmt) ? pmt : 0;
  }, [price, deposit, term]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-neutral-600">Vehicle Price (£)</label>
          <input type="number" value={price} onChange={(e)=>setPrice(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
        </div>
        <div>
          <label className="text-xs text-neutral-600">Deposit (£)</label>
          <input type="number" value={deposit} onChange={(e)=>setDeposit(parseFloat(e.target.value)||0)} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
        </div>
        <div>
          <label className="text-xs text-neutral-600">Term (months)</label>
          <input type="number" value={term} onChange={(e)=>setTerm(parseInt(e.target.value)||0)} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2" />
        </div>
        <div>
          <label className="text-xs text-neutral-600">APR (fixed)</label>
          <div className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 bg-neutral-100">7.5%</div>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-2xl bg-white border border-neutral-200">
        <p className="text-sm text-neutral-600">Estimated monthly</p>
        <p className="text-3xl font-extrabold">£{monthly.toFixed(2)}</p>
        <p className="text-xs text-neutral-500 mt-1">Representative estimate. Subject to status. Your lender may offer different terms.</p>
        <a href="#contact" className="mt-3 inline-block rounded-xl px-4 py-2 bg-black text-white text-sm font-semibold">Apply in 60 seconds</a>
      </div>
    </div>
  )
}

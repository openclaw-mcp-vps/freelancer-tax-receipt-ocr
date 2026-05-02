export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          OCR Receipts into{" "}
          <span className="text-[#58a6ff]">Tax Categories</span>{" "}
          Instantly
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload a receipt photo and our AI extracts vendor, amount, and tax category in seconds. Export to CSV or PDF — tax season sorted.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["AI-Powered OCR", "Auto Tax Categories", "CSV & PDF Export", "IRS-Ready Reports"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited receipt uploads",
              "AI vendor & amount extraction",
              "Automatic tax categorization",
              "CSV & PDF export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What file formats are supported?",
              a: "You can upload JPG, PNG, HEIC, and PDF receipts. Our AI handles blurry or crumpled receipts with high accuracy."
            },
            {
              q: "How does the tax categorization work?",
              a: "We use OpenAI Vision to read your receipt and map it to standard IRS Schedule C categories like meals, travel, software, and office supplies."
            },
            {
              q: "Can I export my data for my accountant?",
              a: "Yes. Export all receipts as a CSV spreadsheet or a formatted PDF report — ready to hand off to your accountant or import into tax software."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} ReceiptScan. All rights reserved.
      </footer>
    </main>
  );
}

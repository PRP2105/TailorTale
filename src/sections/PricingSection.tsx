import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { PRICING_PLANS, STUDENT_DISCOUNT_NOTE } from '../data/pricing';
import { Check, X, Sparkles, GraduationCap } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white border-b border-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple & Transparent Pricing"
          title="Accessible reading for every student wallet"
          description="Start free to explore your reader DNA. Upgrade to Plus when you're ready for unlimited recommendations and trope communities."
        />

        {/* Monthly / Yearly Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-sm font-semibold cursor-pointer ${
              !isYearly ? 'text-navy font-bold' : 'text-slate-400'
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly billing
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 bg-mint border-2 border-teal rounded-full p-0.5 transition-colors relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            aria-label="Toggle annual pricing"
          >
            <div
              className={`w-6 h-6 rounded-full bg-teal transition-transform shadow-xs ${
                isYearly ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>

          <div
            className={`text-sm font-semibold flex items-center gap-1.5 cursor-pointer ${
              isYearly ? 'text-navy font-bold' : 'text-slate-400'
            }`}
            onClick={() => setIsYearly(true)}
          >
            <span>Annual billing</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-yellow text-navy uppercase">
              Save 33%
            </span>
          </div>
        </div>

        {/* 2 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? '/year' : '/month';

            return (
              <Card
                key={plan.id}
                padded="lg"
                className={`bg-white border-2 flex flex-col justify-between relative transition-all ${
                  plan.popular
                    ? 'border-teal shadow-soft-xl ring-2 ring-teal/20 -translate-y-1'
                    : 'border-slate-200 hover:border-teal/40'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow text-navy text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs border border-yellow-warm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif font-bold text-2xl text-navy">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-navy-muted mt-1">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price display */}
                  <div className="my-6 pb-6 border-b border-slate-100 flex items-baseline gap-1">
                    <span className="font-serif text-4xl sm:text-5xl font-extrabold text-navy">
                      {plan.currency}
                      {price}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      {price === 0 ? 'forever' : period}
                    </span>
                    {isYearly && price > 0 && (
                      <span className="text-xs text-teal-dark font-medium ml-2">
                        (~₹66/month)
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8 text-sm">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feat.included ? (
                          <div className="w-5 h-5 rounded-full bg-teal/15 text-teal-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3.5 h-3.5" />
                          </div>
                        )}
                        <span
                          className={feat.included ? 'text-navy font-medium' : 'text-slate-400'}
                        >
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Button
                    asAnchor
                    href="#waitlist"
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full text-base font-semibold"
                  >
                    {plan.ctaLabel}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Student Discount Callout (Specified Requirement) */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-mint border border-teal/20 text-xs sm:text-sm font-semibold text-navy">
            <GraduationCap className="w-5 h-5 text-teal flex-shrink-0" />
            <span>{STUDENT_DISCOUNT_NOTE}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

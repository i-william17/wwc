// components/Pricing.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const [billingType, setBillingType] = useState("monthly");

    const pricingOptions = {
        monthly: {
            label: "Monthly Payment Plan",
            badge: "Flexible Development Model",
            title: "Structured Monthly Development",
            price: "Scope-Based Quote",
            subtitle: "Paid monthly by the 10th",
            description:
                "A professional monthly development model for clients who need phased delivery, continuous progress, and a reliable technical partner throughout the project. The first monthly payment secures the project start and must be paid before development begins.",
            highlights: [
                "First monthly payment is paid upfront as the project commencement deposit",
                "Subsequent payments are due by the 10th of every month",
                "Development is delivered in structured phases based on the approved scope",
                "Ideal for full-stack systems, dashboards, mobile apps, SaaS platforms, and long-term digital products",
            ],
            paymentTerms: [
                {
                    label: "Commencement Deposit",
                    value: "First monthly payment before development begins",
                },
                {
                    label: "Monthly Payment",
                    value: "Paid by the 10th of every month",
                },
                {
                    label: "Delivery Timeline",
                    value: "Defined by the agreed scope, milestones, and deliverables",
                },
                {
                    label: "Final Investment",
                    value: "Confirmed after scope review and technical assessment",
                },
            ],
        },

        full: {
            label: "One-Time Full Payment",
            badge: "Premium Fixed-Scope Model",
            title: "Complete Project Payment",
            price: "Scope-Based Quote",
            subtitle: "50% deposit to begin",
            description:
                "A professional project payment model for clients who prefer a clear, milestone-based structure with fewer payment stages. A 50% deposit secures the project start, while the remaining balance is paid upon completion or at the agreed delivery milestone.",
            highlights: [
                "50% deposit is required before development begins",
                "Remaining 50% is paid upon completion or the agreed delivery milestone",
                "Best for clearly scoped websites, systems, dashboards, mobile apps, and digital platforms",
                "Final quote and delivery timeline are confirmed after reviewing the complete scope of work",
            ],
            paymentTerms: [
                {
                    label: "Project Deposit",
                    value: "50% of total project cost before development begins",
                },
                {
                    label: "Completion Balance",
                    value: "50% upon completion or agreed delivery milestone",
                },
                {
                    label: "Delivery Timeline",
                    value: "Defined by the approved project scope and deliverables",
                },
                {
                    label: "Final Investment",
                    value: "Confirmed after scope review and technical assessment",
                },
            ],
        },
    };

    const includedServices = [
        "Requirement analysis and project planning",
        "UI/UX structure and frontend development",
        "Backend API development where required",
        "Database design and integration",
        "Authentication and authorization where required",
        "Payment integration where required",
        "Testing, debugging, and deployment support",
        "Basic documentation and handover guidance",
    ];

    const scopeFactors = [
        "Number of pages, screens, or modules",
        "Frontend-only vs full-stack development",
        "Admin dashboard requirements",
        "Authentication and user roles",
        "Payment integrations such as M-Pesa, Paystack, or Stripe",
        "Database complexity",
        "Hosting, deployment, and maintenance needs",
        "Third-party API integrations",
        "Mobile app or web app requirements",
    ];

    const monthlySupportPlans = [
        {
            title: "Comprehensive Technical Maintenance",
            price: "KES 50,000",
            period: "per month",
            badge: "Premium Post-Launch Support",
            description:
                "A premium monthly technical retainer for businesses that need their website, system, or application kept stable, secure, updated, monitored, and continuously improved after launch.",
            features: [
                "Up to 12 monthly technical support hours",
                "Priority bug fixes and minor improvements",
                "Security monitoring and basic hardening",
                "Monthly backups and recovery checks",
                "Performance checks and optimization",
                "Content, layout, and small UI updates",
                "Dependency and package update reviews",
                "Uptime, error, and stability monitoring guidance",
                "Monthly technical health report",
                "Recommendations for future improvements",
            ],
            note: "Best for businesses with a live website, system, dashboard, or application that requires serious ongoing technical care.",
            icon: "bx bx-shield-quarter",
            color: "from-emerald-600 to-teal-600",
        },
        {
            title: "Strategic Technology Consultation",
            price: "KES 60,000",
            period: "per month",
            badge: "Executive Tech Advisory",
            description:
                "A premium monthly advisory plan for founders, SMEs, startups, and teams that need consistent technical direction, system planning, architecture guidance, product reviews, and business technology strategy.",
            features: [
                "Up to 8 monthly consultation/advisory hours",
                "Technical project consultation and planning",
                "Scope review and feature prioritization",
                "System architecture and scalability guidance",
                "Code review and improvement recommendations",
                "Deployment, hosting, and infrastructure guidance",
                "Cybersecurity and risk advisory",
                "Business technology strategy sessions",
                "Monthly progress and roadmap review",
                "Decision support before major tech investments",
            ],
            note: "Best for founders, SMEs, startups, and teams that need senior-level technical guidance before, during, or after development.",
            icon: "bx bx-brain",
            color: "from-blue-600 to-purple-600",
        },
    ];

    const selectedPlan = pricingOptions[billingType];

    return (
        <section
            id="pricing"
            className="section bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-950 dark:to-gray-900"
        >
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Flexible Pricing Based on Scope
                    </h2>

                    <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        Every project is quoted based on its size, complexity, timeline, and
                        deliverables. Choose between monthly payments or a one-time project
                        payment structure.
                    </p>
                </div>

                {/* Toggle */}
                <div className="mx-auto mb-12 flex max-w-xl rounded-2xl bg-gray-100 p-2 shadow-inner dark:bg-gray-800">
                    <button
                        type="button"
                        onClick={() => setBillingType("monthly")}
                        className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${billingType === "monthly"
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-gray-700 hover:bg-white dark:text-gray-300 dark:hover:bg-gray-700"
                            }`}
                    >
                        Monthly Payment Plan
                    </button>

                    <button
                        type="button"
                        onClick={() => setBillingType("full")}
                        className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${billingType === "full"
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-gray-700 hover:bg-white dark:text-gray-300 dark:hover:bg-gray-700"
                            }`}
                    >
                        Full Payment Plan
                    </button>
                </div>

                {/* Main Pricing Card */}
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <span className="inline-flex rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white">
                                    {selectedPlan.badge}
                                </span>

                                <h3 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
                                    {selectedPlan.title}
                                </h3>

                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {selectedPlan.subtitle}
                                </p>
                            </div>

                            <div className="rounded-2xl bg-gray-100 px-5 py-4 text-left dark:bg-gray-800 sm:text-right">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Starting From
                                </p>

                                <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                                    {selectedPlan.price}
                                </p>
                            </div>
                        </div>

                        <p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
                            {selectedPlan.description}
                        </p>

                        <div className="mb-8 grid gap-4 sm:grid-cols-2">
                            {selectedPlan.paymentTerms.map((term, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-black/30"
                                >
                                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                                        {term.label}
                                    </p>

                                    <p className="mt-2 text-gray-800 dark:text-gray-200">
                                        {term.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {selectedPlan.highlights.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                                        <i className="bx bx-check text-lg"></i>
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                            >
                                Request a Quote
                                <i className="bx bx-right-arrow-alt ml-2 text-xl"></i>
                            </Link>

                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                            >
                                View Projects
                            </Link>
                        </div>
                    </div>

                    {/* Scope Information */}
                    <div className="space-y-8">
                        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                What Affects the Quote?
                            </h3>

                            <p className="mt-3 text-gray-600 dark:text-gray-400">
                                The final cost is calculated after reviewing the full scope of
                                work.
                            </p>

                            <div className="mt-6 space-y-3">
                                {scopeFactors.map((factor, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600"></span>

                                        <p className="text-gray-700 dark:text-gray-300">
                                            {factor}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                What Is Included?
                            </h3>

                            <div className="mt-6 space-y-3">
                                {includedServices.map((service, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                                            <i className="bx bx-check"></i>
                                        </div>

                                        <p className="text-gray-700 dark:text-gray-300">
                                            {service}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Notice */}
                <div className="mx-auto mt-10 max-w-6xl rounded-3xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-900/60 dark:bg-yellow-950/30">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            <i className="bx bx-info-circle text-2xl"></i>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                Payment Terms Notice
                            </h4>

                            <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
                                Work begins only after the agreed deposit is paid. For monthly
                                projects, the first monthly payment serves as the deposit. For
                                one-time projects, 50% of the total quoted amount is required to
                                begin development. The duration and final price depend on the
                                approved scope of work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Monthly Support Plans */}
                <div className="mx-auto mt-10 max-w-6xl">
                    <div className="mb-8 text-center">
                        <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            Monthly Support Options
                        </span>

                        <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                            Ongoing Support & Advisory Plans
                        </h3>

                        <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
                            These plans are separate from project development costs and are
                            designed for clients who need continuous support, maintenance, or
                            technical guidance every month.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {monthlySupportPlans.map((plan, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
                            >
                                <div
                                    className={`absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br ${plan.color} opacity-10`}
                                ></div>

                                <div className="relative z-10">
                                    <div className="mb-6 flex items-start justify-between gap-4">
                                        <div
                                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${plan.color} text-white shadow-lg`}
                                        >
                                            <i className={`${plan.icon} text-3xl`}></i>
                                        </div>

                                        <span className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                            {plan.badge}
                                        </span>
                                    </div>

                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {plan.title}
                                    </h4>

                                    <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                                        {plan.description}
                                    </p>

                                    <div className="mt-6 rounded-2xl bg-gray-50 p-5 dark:bg-black/30">
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Starting From
                                        </p>

                                        <div className="mt-1 flex items-end gap-2">
                                            <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                                {plan.price}
                                            </span>

                                            <span className="pb-1 text-gray-500 dark:text-gray-400">
                                                {plan.period}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex gap-3">
                                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                                                    <i className="bx bx-check"></i>
                                                </div>

                                                <p className="text-gray-700 dark:text-gray-300">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-900/60 dark:bg-blue-950/30">
                                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                            {plan.note}
                                        </p>
                                    </div>

                                    <Link
                                        to="/contact"
                                        className={`mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r ${plan.color} px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                                    >
                                        Discuss This Plan
                                        <i className="bx bx-right-arrow-alt ml-2 text-xl"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white shadow-2xl">
                    <h3 className="text-3xl font-bold">Have a Project in Mind?</h3>

                    <p className="mx-auto mt-3 max-w-2xl text-blue-50">
                        Share your scope, timeline, and expected deliverables so I can
                        prepare a realistic quote and development plan.
                    </p>

                    <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/contact"
                            className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
                        >
                            Start Scope Review
                        </Link>

                        <Link
                            to="/about"
                            className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-700"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
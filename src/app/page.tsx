import Banner from '@/components/Banner';
import Image from 'next/image';
import {
	Megaphone,
	Users,
	Sparkles,
	DollarSign,
	ArrowRight,
	BadgeCheck,
	Trophy,
	Gift,
	Bot,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import StepCard from '@/components/ui/StepCard';
import FeatureCard from '@/components/ui/FeatureCard';

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<main className="flex flex-col justify-center items-center">
				<Banner />

				<section
					id="product"
					className=" py-8 lg:py-24 bg-white relative overflow-hidden"
				>
					<div className="pointer-events-none absolute -top-24 -right-16 w-[480px] h-[480px] rounded-full bg-purple-100 blur-3xl opacity-60"></div>
					<div className="pointer-events-none absolute -bottom-20 -left-16 w-[420px] h-[420px] rounded-full bg-emerald-100 blur-3xl opacity-60"></div>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
						<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-gray-200 bg-white/70 backdrop-blur text-xs uppercase tracking-wider text-gray-600">
							<span className="h-1.5 w-1.5 rounded-full bg-purple-500 "></span>
							<span className="text-purple-500">At a glance</span>
						</div>
						<h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
							What We’re Building
						</h3>
						<p className="text-gray-600 mb-10 max-w-2xl">
							The foundations behind speed and scale. Minimal surface, maximum
							clarity.
						</p>
						<div className="flex flex-wrap gap-4 lg:gap-6">
							<div className="flex-1 min-w-[240px] rounded-2xl p-6 border border-gray-100 bg-white/80 backdrop-blur hover:bg-white shadow-sm hover:shadow-lg transition-all duration-200">
								<div className="flex items-start space-x-4">
									<div className="relative">
										<div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-sm ring-8 ring-green-50">
											<DollarSign className="w-6 h-6 text-white" />
										</div>
										<div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-green-500/0 via-green-500/10 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
									<div className="space-y-1">
										<div className="font-semibold text-gray-900 text-lg">
											Revenue Sharing
										</div>
										<div className="text-sm text-gray-600">
											Aligned incentives to attract better talent.
										</div>
									</div>
								</div>
							</div>
							<div className="flex-1 min-w-[240px] rounded-2xl p-6 border border-gray-100 bg-white/80 backdrop-blur hover:bg-white shadow-sm hover:shadow-lg transition-all duration-200">
								<div className="flex items-start space-x-4">
									<div className="relative">
										<div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-sm ring-8 ring-purple-50">
											<Megaphone className="w-6 h-6 text-white" />
										</div>
										<div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/10 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
									<div className="space-y-1">
										<div className="font-semibold text-gray-900 text-lg">
											Marketing Engine
										</div>
										<div className="text-sm text-gray-600">
											Always-on campaigns to expand reach.
										</div>
									</div>
								</div>
							</div>
							<div className="flex-1 min-w-[240px] rounded-2xl p-6 border border-gray-100 bg-white/80 backdrop-blur hover:bg-white shadow-sm hover:shadow-lg transition-all duration-200">
								<div className="flex items-start space-x-4">
									<div className="relative">
										<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm ring-8 ring-blue-50">
											<Users className="w-6 h-6 text-white" />
										</div>
										<div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
									<div className="space-y-1">
										<div className="font-semibold text-gray-900 text-lg">
											Broker Community
										</div>
										<div className="text-sm text-gray-600">
											A competitive network with transparent incentives.
										</div>
									</div>
								</div>
							</div>
							<div className="flex-1 min-w-[240px] rounded-2xl p-6 border border-gray-100 bg-white/80 backdrop-blur hover:bg-white shadow-sm hover:shadow-lg transition-all duration-200">
								<div className="flex items-start space-x-4">
									<div className="relative">
										<div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-sm ring-8 ring-emerald-50">
											<Sparkles className="w-6 h-6 text-white" />
										</div>
										<div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
									<div className="space-y-1">
										<div className="font-semibold text-gray-900 text-lg">
											AI Learning
										</div>
										<div className="text-sm text-gray-600">
											Continuous improvement in matching and outreach.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="process"
					className="py-16 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden"
				>
					<div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-blue-100 blur-3xl opacity-60"></div>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
						<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-gray-200 bg-white/70 backdrop-blur text-xs uppercase tracking-wider text-gray-600">
							<span className="h-1.5 w-1.5 rounded-full bg-blue-500 "></span>
							<span className="text-blue-500">Process</span>
						</div>
						<h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
							How It Works
						</h3>
						<p className="text-gray-600 mb-10 max-w-2xl">
							A simple flow to move from role to hire with clarity.
						</p>
						<div className="flex flex-col lg:flex-row lg:items-stretch gap-6">
							<StepCard
								step={1}
								title="Publish"
								description="Define the role and key criteria; we help you structure it."
							/>
							<StepCard
								step={2}
								title="Promote"
								description="We activate the marketing engine and community to attract talent."
							/>
							<StepCard
								step={3}
								title="Hire"
								description="Final interviews, selection, and onboarding with AI-driven insights."
								showConnector={false}
							/>
						</div>
						<div className="flex pt-10">
							<Button
								variant="primary"
								size="lg"
								href="#get-started"
								className="flex items-center gap-2"
							>
								Get Started
								<ArrowRight className="w-5 h-5" />
							</Button>
						</div>
					</div>
				</section>
			</main>
			<section
				id="community"
				className=" bg-white border-t w-full border-gray-100"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-gray-200 bg-white text-xs uppercase tracking-wider text-gray-600">
						<span className="h-1.5 w-1.5 rounded-full bg-gray-900"></span>
						<span className="text-gray-900">Community</span>
					</div>
					<h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
						Community Teaser
					</h3>
					<div className="flex flex-col lg:flex-row w-full gap-8">
						<div className=" flex-1 min-w-[320px] bg-red-600 rounded-3xl p-6 flex items-center justify-center">
							<div className="relative w-full justify-center items-center max-w-md aspect-square">
								<Image
									src="/image/comunity.png"
									alt="Community group"
									fill
									className="object-cover rounded-2xl m-auto"
									priority
								/>
							</div>
						</div>
						<div className="flex-1 min-w-[320px] flex flex-col gap-4">
							<div className="rounded-2xl p-6 border border-gray-100 bg-gradient-to-br from-emerald-50 to-white">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
										<BadgeCheck className="w-5 h-5" />
									</div>
									<div>
										<div className="font-semibold text-gray-900">
											Verified members
										</div>
										<div className="text-sm text-gray-600">
											Reviewed profiles and visible reputation.
										</div>
									</div>
								</div>
							</div>
							<div className="rounded-2xl p-6 border border-gray-100 bg-gradient-to-br from-blue-50 to-white">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
										<Trophy className="w-5 h-5" />
									</div>
									<div>
										<div className="font-semibold text-gray-900">Ranking</div>
										<div className="text-sm text-gray-600">
											Top brokers by performance.
										</div>
									</div>
								</div>
							</div>
							<div className="rounded-2xl p-6 border border-gray-100 bg-gradient-to-br from-purple-50 to-white">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center">
										<Gift className="w-5 h-5" />
									</div>
									<div>
										<div className="font-semibold text-gray-900">Rewards</div>
										<div className="text-sm text-gray-600">
											Bonuses for key contributions.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id="pricing"
				className="py-8 lg:py-16 bg-white border-t border-gray-100"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-gray-200 bg-white text-xs uppercase tracking-wider text-gray-600">
						<span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
						<span className="text-purple-500">Pricing</span>
					</div>
					<h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
						Simple, Transparent Pricing
					</h3>
					<p className="text-gray-600 mb-10 max-w-2xl">
						Revenue sharing model that aligns our success with yours. No upfront
						costs, no hidden fees.
					</p>
					<div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
						<div className="flex-1 rounded-2xl p-8 border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow">
							<div className="text-center">
								<h4 className="text-xl font-semibold text-gray-900 mb-2">
									Revenue Share
								</h4>
								<div className="text-3xl font-bold text-gray-900 mb-1">15%</div>
								<div className="text-sm text-gray-600 mb-6">
									of successful placement fee
								</div>
								<ul className="text-left space-y-3 mb-8">
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-green-500"></div>
										<span className="text-sm text-gray-600">
											No upfront costs
										</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-green-500"></div>
										<span className="text-sm text-gray-600">
											Full marketing engine access
										</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-green-500"></div>
										<span className="text-sm text-gray-600">
											AI-driven candidate matching
										</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-green-500"></div>
										<span className="text-sm text-gray-600">
											Community network access
										</span>
									</li>
								</ul>
								<Button
									variant="primary"
									size="lg"
									href="#contact"
									className="w-full"
								>
									Get Started
								</Button>
							</div>
						</div>
						<div className="flex-1 rounded-2xl p-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-lg relative">
							<div className="absolute -top-3 left-1/2 -translate-x-1/2">
								<span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
									Most Popular
								</span>
							</div>
							<div className="text-center">
								<h4 className="text-xl font-semibold text-gray-900 mb-2">
									Enterprise
								</h4>
								<div className="text-3xl font-bold text-gray-900 mb-1">
									Custom
								</div>
								<div className="text-sm text-gray-600 mb-6">
									volume-based pricing
								</div>
								<ul className="text-left space-y-3 mb-8">
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-purple-500"></div>
										<span className="text-sm text-gray-600">
											Everything in Revenue Share
										</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-purple-500"></div>
										<span className="text-sm text-gray-600">
											Dedicated account manager
										</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-purple-500"></div>
										<span className="text-sm text-gray-600">
											Custom integrations
										</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 rounded-full bg-purple-500"></div>
										<span className="text-sm text-gray-600">
											Priority support
										</span>
									</li>
								</ul>
								<Button
									variant="primary"
									size="lg"
									href="#contact"
									className="w-full"
								>
									Contact Sales
								</Button>
							</div>
						</div>
					</div>
					<div className="text-center mt-8">
						<p className="text-sm text-gray-500">
							All plans include our core features. Contact us for custom
							enterprise solutions.
						</p>
					</div>
				</div>
			</section>
			<section className="py-8 lg:py-16 bg-white border-t border-gray-100">
				<div id="aiteaser" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-gray-200 bg-white text-xs uppercase tracking-wider text-gray-600">
						<span className="h-1.5 w-1.5 rounded-full bg-green-700"></span>
						<span className="text-green-700">AI Recruiting Copilot</span>
					</div>
					<h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-8">
						AI Teaser
					</h3>
					<div className="flex flex-col lg:flex-row gap-6">
						<div className="flex-1 rounded-2xl p-6 border border-gray-100 bg-gray-50">
							<div className="flex items-center gap-2 text-gray-800 font-medium">
								<Bot className="w-5 h-5" />
								AI Recruiting Copilot DEMO
							</div>
							<div className="mt-4 flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-3">
								<div className="text-sm text-gray-500 flex-1">
									Ex: "Find senior frontend profiles with Next.js experience,
									remote."
								</div>
								<Button variant="secondary" size="md" href="#">
									Send
								</Button>
							</div>
							<div className="mt-4 flex flex-wrap gap-2">
								<span className="text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
									Top 5 potential candidates
								</span>
								<span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
									Suggested outreach template
								</span>
								<span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
									Market insights
								</span>
							</div>
						</div>
						<div className="flex-1 rounded-2xl p-6 border border-gray-100 bg-white">
							<div className="text-sm text-gray-600">Simulated output</div>
							<div className="mt-3 space-y-2 text-sm text-gray-800">
								<p>
									• 3 candidates in LATAM with Next.js and B2B SaaS experience.
								</p>
								<p>• Links to public portfolios and estimated availability.</p>
								<p>• Suggested personalized initial message.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

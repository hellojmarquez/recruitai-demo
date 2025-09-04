'use client';

import Button from './ui/Button';
import FeatureCard from './ui/FeatureCard';
import { Play, Users, Megaphone, Sparkles, Zap } from 'lucide-react';

export default function Banner() {
	return (
		<section className="bg-white pt-20 lg:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row gap-12 items-center">
					<div className="flex-1 space-y-8">
						<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
							Recruiting Without Limits.
						</h1>
						<h2 className="text-2xl lg:text-3xl font-semibold text-purple-600 leading-tight">
							Speed and Scale.
						</h2>
						<p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
							We’re building a new model for recruitment. One that combines
							revenue sharing, a marketing engine, a competitive broker
							community, and an AI-driven learning platform. This is recruitment
							rewritten for the modern era.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<Button variant="primary" size="lg" href="!#">
								Get Started →
							</Button>
							<Button
								variant="secondary"
								size="lg"
								href="#watch-demo"
								className="flex items-center gap-3"
							>
								<Play className="w-6 h-6" />
								Watch Demo
							</Button>
						</div>
					</div>
					<div className="flex-1 flex flex-wrap gap-4 lg:gap-6">
						<FeatureCard
							icon={Zap}
							title="Faster Hiring"
							description="Launch roles in days, not weeks."
							variant="default"
						/>
						<FeatureCard
							icon={Megaphone}
							title="Marketing Engine"
							description="Always-on campaigns to attract talent."
							variant="purple"
						/>
						<FeatureCard
							icon={Users}
							title="Broker Community"
							description="Leverage a competitive, aligned network."
							variant="blue"
						/>
						<FeatureCard
							icon={Sparkles}
							title="AI-Driven Learning"
							description="Improves matching and outreach over time."
							variant="green"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

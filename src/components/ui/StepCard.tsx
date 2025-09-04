import { ArrowRight } from 'lucide-react';
import { StepCardProps } from '@/types';

export default function StepCard({
	step,
	title,
	description,
	showConnector = true,
}: StepCardProps) {
	return (
		<>
			<div className="flex-1 bg-white/80 backdrop-blur rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5">
				<div className="flex items-center gap-3">
					<div className="h-8 w-8 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center">
						{step}
					</div>
					<div>
						<div className="text-sm font-medium text-gray-500">Step {step}</div>
						<div className="text-lg font-semibold text-gray-900">{title}</div>
					</div>
				</div>
				<p className="text-sm text-gray-600 mt-3">{description}</p>
			</div>
			{showConnector && (
				<div className="hidden lg:flex items-center text-gray-300">
					<ArrowRight className="w-7 h-7" />
				</div>
			)}
		</>
	);
}

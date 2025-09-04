import { FeatureCardProps } from '@/types';

const variantStyles = {
	default: {
		container: 'bg-gray-50 border-gray-100',
		icon: 'bg-purple-600',
	},
	purple: {
		container: 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100',
		icon: 'bg-purple-600',
	},
	blue: {
		container: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100',
		icon: 'bg-blue-600',
	},
	green: {
		container: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100',
		icon: 'bg-green-600',
	},
	emerald: {
		container: 'bg-gradient-to-br from-emerald-50 to-white border-gray-100',
		icon: 'bg-emerald-600',
	},
};

export default function FeatureCard({
	icon: Icon,
	title,
	description,
	variant = 'default',
}: FeatureCardProps) {
	const styles = variantStyles[variant];

	return (
		<div
			className={`flex-1 min-w-[200px] rounded-xl p-6 border ${styles.container}`}
		>
			<div className="flex items-center space-x-3">
				<div
					className={`w-12 h-12 ${styles.icon} rounded-full flex items-center justify-center`}
				>
					<Icon className="w-12 h-6 text-white" />
				</div>
				<div>
					<div className="font-semibold text-gray-900">{title}</div>
					<div className="text-sm text-gray-600">{description}</div>
				</div>
			</div>
		</div>
	);
}

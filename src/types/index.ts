import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	variant?: 'default' | 'purple' | 'blue' | 'green' | 'emerald';
}

export interface ButtonProps {
	variant: 'primary' | 'secondary';
	size: 'sm' | 'md' | 'lg';
	href?: string;
	children: React.ReactNode;
	className?: string;
}

export interface StepCardProps {
	step: number;
	title: string;
	description: string;
	showConnector?: boolean;
}

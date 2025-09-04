'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white border-b border-gray-100 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
							<Home className="w-5 h-5 text-white" />
						</div>
						<span className="text-xl font-semibold text-gray-800">
							Recruit system
						</span>
					</div>
					<nav className="hidden md:flex space-x-8">
						<Link
							href="#product"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							Product
						</Link>
						<Link
							href="#process"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							Process
						</Link>
						<Link
							href="#community"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							Community
						</Link>
						<Link
							href="#pricing"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							Pricing
						</Link>
						<Link
							href="#aiteaser"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							AI Teaser
						</Link>
					</nav>

					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
							<Link
								href="#product"
								className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Product
							</Link>
							<Link
								href="#process"
								className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Process
							</Link>
							<Link
								href="#community"
								className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Community
							</Link>
							<Link
								href="#pricing"
								className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								Pricing
							</Link>
							<Link
								href="#aiteaser"
								className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								AI Teaser
							</Link>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}

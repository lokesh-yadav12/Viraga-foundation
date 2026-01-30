import { useState } from 'react';
import { X, Mail, User, Brain, CheckCircle, AlertCircle } from 'lucide-react';

type SubscribeModalProps = {
	onClose: () => void;
};

const SubscribeModal = ({ onClose }: SubscribeModalProps) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [answer, setAnswer] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
	const correctAnswer = 16;

	const showNotification = (type: 'success' | 'error', message: string) => {
		setNotification({ type, message });
		setTimeout(() => {
			setNotification(null);
		}, 3000);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (Number(answer) !== correctAnswer) {
			showNotification('error', 'Wrong answer! Please try again.');
			return;
		}

		setIsSubmitting(true);
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 800));
		showNotification('success', 'Subscribed successfully!');
		setIsSubmitting(false);
		
		// Close modal after success notification
		setTimeout(() => {
			onClose();
		}, 2000);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
			{/* Backdrop */}
			<div 
				className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Notification Toast */}
			{notification && (
				<div className="fixed top-8 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md px-4 animate-[slideDown_0.4s_ease-out] [animation-fill-mode:both]">
					<div className={`flex items-center gap-3 rounded-lg px-6 py-4 shadow-2xl backdrop-blur-md ${
						notification.type === 'success' 
							? 'bg-green-500/95 text-white' 
							: 'bg-red-500/95 text-white'
					}`}>
						{notification.type === 'success' ? (
							<CheckCircle className="h-6 w-6 flex-shrink-0" />
						) : (
							<AlertCircle className="h-6 w-6 flex-shrink-0" />
						)}
						<p className="font-medium">{notification.message}</p>
					</div>
				</div>
			)}

			{/* Modal */}
			<div className="relative w-full max-w-md animate-[slideUp_0.3s_ease-out]">
				<div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 hover:scale-110 active:scale-95"
					>
						<X size={20} />
					</button>

					{/* Header Image Section */}
					<div className="relative h-28 bg-cover bg-center">
						<div className="relative flex h-full flex-col justify-end p-4 pb-4">
							<h2 className="text-2xl font-bold text-orange-600 drop-shadow-lg">
								Join Our Community
							</h2>
							<p className="mt-1 text-sm text-orange-600 drop-shadow">
								Stay connected with changemakers worldwide
							</p>
						</div>
					</div>

					{/* Form Section */}
					<div className="p-6 sm:p-8">
						<p className="mb-6 text-sm leading-relaxed text-gray-600">
							Be the first to know about our moving stories, new projects and opportunities. 
							Join our community today!
						</p>

						<form onSubmit={handleSubmit} className="space-y-4">
							{/* Name Input */}
							<div className="group">
								<label className="mb-1.5 block text-sm font-medium text-gray-700">
									Name
								</label>
								<div className="relative">
									<User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-purple-500" />
									<input
										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Enter your name"
										required
									/>
								</div>
							</div>

							{/* Email Input */}
							<div className="group">
								<label className="mb-1.5 block text-sm font-medium text-gray-700">
									Email
								</label>
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-purple-500" />
									<input
										type="email"
										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="your@email.com"
										required
									/>
								</div>
							</div>

							{/* Math Question */}
							<div className="group">
								<label className="mb-1.5 block text-sm font-medium text-gray-700">
									Quick verification: What is 7 + 9?
								</label>
								<div className="relative">
									<Brain className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-purple-500" />
									<input
										type="number"
										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
										value={answer}
										onChange={(e) => setAnswer(e.target.value)}
										placeholder="Enter your answer"
										required
									/>
								</div>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
							>
								{isSubmitting ? (
									<span className="flex items-center justify-center gap-2">
										<svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
										</svg>
										Subscribing...
									</span>
								) : (
									'Subscribe Now'
								)}
							</button>
						</form>

						{/* Footer */}
						<p className="mt-4 text-center text-xs text-gray-500">
							We respect your privacy. Unsubscribe anytime.
						</p>
					</div>
				</div>
			</div>

			<style>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				@keyframes slideUp {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				@keyframes slideDown {
					0% {
						opacity: 0;
						transform: translate(-50%, -20px);
					}
					100% {
						opacity: 1;
						transform: translate(-50%, 0);
					}
				}
			`}</style>
		</div>
	);
};

export default SubscribeModal;
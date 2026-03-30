// import { useState, useEffect } from 'react';
// import { X, Mail, User, Brain, CheckCircle, AlertCircle } from 'lucide-react';

// type SubscribeModalProps = {
// 	onClose: () => void;
// 	isOpen: boolean;
// };

// const SubscribeModal = ({ onClose, isOpen }: SubscribeModalProps) => {
// 	const [name, setName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [answer, setAnswer] = useState('');
// 	const [isSubmitting, setIsSubmitting] = useState(false);
// 	const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
// 	const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
// 	const [showModal, setShowModal] = useState(false);

// 	// Generate random math question
// 	useEffect(() => {
// 		const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
// 		const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
// 		setMathQuestion({ num1, num2, answer: num1 + num2 });
// 	}, []);

// 	// Smooth modal appearance
// 	useEffect(() => {
// 		if (isOpen) {
// 			// Small delay for smooth entrance
// 			const timer = setTimeout(() => {
// 				setShowModal(true);
// 			}, 100);
// 			return () => clearTimeout(timer);
// 		} else {
// 			setShowModal(false);
// 		}
// 	}, [isOpen]);

// 	const showNotification = (type: 'success' | 'error', message: string) => {
// 		setNotification({ type, message });
// 		setTimeout(() => {
// 			setNotification(null);
// 		}, 3000);
// 	};

// 	const handleSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault();

// 		if (Number(answer) !== mathQuestion.answer) {
// 			showNotification('error', 'Wrong answer! Please try again.');
// 			return;
// 		}

// 		setIsSubmitting(true);
// 		// Simulate API call
// 		await new Promise(resolve => setTimeout(resolve, 800));
// 		showNotification('success', 'Subscribed successfully!');
// 		setIsSubmitting(false);
		
// 		// Close modal after success notification
// 		setTimeout(() => {
// 			onClose();
// 		}, 2000);
// 	};

// 	const handleClose = () => {
// 		setShowModal(false);
// 		setTimeout(() => {
// 			onClose();
// 		}, 300); // Wait for exit animation
// 	};

// 	if (!isOpen) return null;

// 	return (
// 		<div className={`fixed inset-0 z-50 h-screen mt-16 sm:mt-0 flex items-center justify-center p-2 px-2 transition-opacity duration-300 ${
// 			showModal ? 'opacity-100' : 'opacity-0'
// 		}`}>
// 			{/* Backdrop */}
// 			<div 
// 				className={`absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-sm transition-all duration-300 ${
// 					showModal ? 'opacity-100' : 'opacity-0'
// 				}`}
// 				onClick={handleClose}
// 			/>

// 			{/* Notification Toast */}
// 			{notification && (
// 				<div className="fixed top-8 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md px-4 animate-[slideDown_0.4s_ease-out] [animation-fill-mode:both]">
// 					<div className={`flex items-center gap-3 rounded-lg px-6 py-4 shadow-2xl backdrop-blur-md ${
// 						notification.type === 'success' 
// 							? 'bg-green-500/95 text-white' 
// 							: 'bg-red-500/95 text-white'
// 					}`}>
// 						{notification.type === 'success' ? (
// 							<CheckCircle className="h-6 w-6 flex-shrink-0" />
// 						) : (
// 							<AlertCircle className="h-6 w-6 flex-shrink-0" />
// 						)}
// 						<p className="font-medium">{notification.message}</p>
// 					</div>
// 				</div>
// 			)}

// 			{/* Modal */}
// 			<div className={`relative w-full max-w-md transition-all duration-500 ease-out ${
// 				showModal 
// 					? 'opacity-100 translate-y-0 scale-100' 
// 					: 'opacity-0 translate-y-8 scale-95'
// 			}`}>
// 				<div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
// 					{/* Close Button */}
// 					<button
// 						onClick={handleClose}
// 						className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 hover:scale-110 active:scale-95"
// 					>
// 						<X size={20} />
// 					</button>

// 					{/* Header Image Section */}
// 					<div className="relative h-24 bg-gradient-to-br from-orange-500 to-orange-600">
// 						<div className="relative flex h-full px-2 flex-col justify-end sm:p-4 sm:pb-4">
// 							<h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
// 								Join Our Community
// 							</h2>
// 							<p className="mt-1 text-sm text-orange-50 drop-shadow">
// 								Stay connected with changemakers worldwide
// 							</p>
// 						</div>
// 					</div>

// 					{/* Form Section */}
// 					<div className="p-4 sm:p-8">
// 						<p className="mb-4 text-sm leading-relaxed text-gray-600">
// 							Be the first to know about our moving stories, new projects and opportunities. 
// 							Join our community today!
// 						</p>

// 						<form onSubmit={handleSubmit} className="space-y-2">
// 							{/* Name Input */}
// 							<div className="group">
// 								<label className="mb-1 block text-sm font-medium text-gray-700">
// 									Name
// 								</label>
// 								<div className="relative">
// 									<User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-orange-500" />
// 									<input
// 										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
// 										value={name}
// 										onChange={(e) => setName(e.target.value)}
// 										placeholder="Enter your name"
// 										required
// 									/>
// 								</div>
// 							</div>

// 							{/* Email Input */}
// 							<div className="group">
// 								<label className="mb-1.5 block text-sm font-medium text-gray-700">
// 									Email
// 								</label>
// 								<div className="relative">
// 									<Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-orange-500" />
// 									<input
// 										type="email"
// 										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
// 										value={email}
// 										onChange={(e) => setEmail(e.target.value)}
// 										placeholder="your@email.com"
// 										required
// 									/>
// 								</div>
// 							</div>

// 							{/* Math Question */}
// 							<div className="group">
// 								<label className="mb-1.5 block text-sm font-medium text-gray-700">
// 									Quick verification: What is {mathQuestion.num1} + {mathQuestion.num2}?
// 								</label>
// 								<div className="relative">
// 									<Brain className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-orange-500" />
// 									<input
// 										type="number"
// 										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
// 										value={answer}
// 										onChange={(e) => setAnswer(e.target.value)}
// 										placeholder="Enter your answer"
// 										required
// 									/>
// 								</div>
// 							</div>

// 							{/* Submit Button */}
// 							<button
// 								type="submit"
// 								disabled={isSubmitting}
// 								className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
// 							>
// 								{isSubmitting ? (
// 									<span className="flex items-center justify-center gap-2">
// 										<svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
// 											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// 											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// 										</svg>
// 										Subscribing...
// 									</span>
// 								) : (
// 									'Subscribe Now'
// 								)}
// 							</button>
// 						</form>

// 						{/* Footer */}
// 						<p className="mt-4 text-center text-xs text-gray-500">
// 							We respect your privacy. Unsubscribe anytime.
// 						</p>
// 					</div>
// 				</div>
// 			</div>

// 			<style>{`
// 				@keyframes slideDown {
// 					0% {
// 						opacity: 0;
// 						transform: translate(-50%, -20px);
// 					}
// 					100% {
// 						opacity: 1;
// 						transform: translate(-50%, 0);
// 					}
// 				}
// 			`}</style>
// 		</div>
// 	);
// };

// export default SubscribeModal;

import { useState, useEffect } from 'react';
import { X, Mail, User, Brain, CheckCircle, AlertCircle } from 'lucide-react';
import axios from "axios";

type SubscribeModalProps = {
	onClose: () => void;
	isOpen: boolean;
};

const SubscribeModal = ({ onClose, isOpen }: SubscribeModalProps) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [answer, setAnswer] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
	const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
	const [showModal, setShowModal] = useState(false);

	// Generate random math question
	useEffect(() => {
		const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
		const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
		setMathQuestion({ num1, num2, answer: num1 + num2 });
	}, []);

	// Smooth modal appearance
	useEffect(() => {
		if (isOpen) {
			// Small delay for smooth entrance
			const timer = setTimeout(() => {
				setShowModal(true);
			}, 100);
			return () => clearTimeout(timer);
		} else {
			setShowModal(false);
		}
	}, [isOpen]);

	const showNotification = (type: 'success' | 'error', message: string) => {
		setNotification({ type, message });
		setTimeout(() => {
			setNotification(null);
		}, 3000);
	};

	// const handleSubmit = async (e: React.FormEvent) => {
	// 	e.preventDefault();

	// 	if (Number(answer) !== mathQuestion.answer) {
	// 		showNotification('error', 'Wrong answer! Please try again.');
	// 		return;
	// 	}

	// 	setIsSubmitting(true);
	// 	// Simulate API call
	// 	const response = await fetch('/api/subscribe', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ name, email }),
	// 	});

	// 	const data = await response.json();

	// 	if (!response.ok) {
	// 		throw new Error(data.message || 'Something went wrong');
	// 	}

	// 	showNotification('success', 'Subscribed successfully!');
	// 	showNotification('success', 'Subscribed successfully!');
	// 	setIsSubmitting(false);

	// 	// Close modal after success notification
	// 	setTimeout(() => {
	// 		onClose();
	// 	}, 2000);
	// };

	const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (Number(answer) !== mathQuestion.answer) {
    showNotification("error", "Wrong answer! Please try again.");
    return;
  }

  try {
    setIsSubmitting(true);

    const response = await axios.post(
      "https://lets-taxify.onrender.com/api/viraga/subscribe",
      {
        name,
        email,
      }
    );

    // Axios automatically parses JSON
    if (response.data?.success) {
      showNotification("success", "Subscribed successfully!");
    } else {
      throw new Error(response.data?.message || "Something went wrong");
    }

  } catch (error: any) {
    console.error("Subscribe error:", error);

    showNotification(
      "error",
      error.response?.data?.message || "Failed to subscribe"
    );
  } finally {
    setIsSubmitting(false);
  }
};

	const handleClose = () => {
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300); // Wait for exit animation
	};

	if (!isOpen) return null;

	return (
		<div
			className={`fixed inset-0 z-50 h-screen mt-16 sm:mt-0 flex items-center justify-center p-2 px-2 transition-opacity duration-300 ${
				showModal ? 'opacity-100' : 'opacity-0'
			}`}
		>
			{/* Backdrop */}
			<div
				className={`absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-sm transition-all duration-300 ${
					showModal ? 'opacity-100' : 'opacity-0'
				}`}
				onClick={handleClose}
			/>

			{/* Notification Toast */}
			{notification && (
				<div className="fixed top-8 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md px-4 animate-[slideDown_0.4s_ease-out] [animation-fill-mode:both]">
					<div
						className={`flex items-center gap-3 rounded-lg px-6 py-4 shadow-2xl backdrop-blur-md ${
							notification.type === 'success' ? 'bg-green-500/95 text-white' : 'bg-red-500/95 text-white'
						}`}
					>
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
			<div
				className={`relative w-full max-w-md transition-all duration-500 ease-out ${
					showModal ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
				}`}
			>
				<div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
					{/* Close Button */}
					<button
						onClick={handleClose}
						className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 hover:scale-110 active:scale-95"
					>
						<X size={20} />
					</button>

					{/* Header Image Section */}
					<div className="relative h-24 bg-gradient-to-br from-orange-500 to-orange-600">
						<div className="relative flex h-full px-2 flex-col justify-end sm:p-4 sm:pb-4">
							<h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
								Join Our Community
							</h2>
							<p className="mt-1 text-sm text-orange-50 drop-shadow">
								Stay connected with changemakers worldwide
							</p>
						</div>
					</div>

					{/* Form Section */}
					<div className="p-4 sm:p-8">
						<p className="mb-4 text-sm leading-relaxed text-gray-600">
							Be the first to know about our moving stories, new projects and opportunities. Join our
							community today!
						</p>

						<form onSubmit={handleSubmit} className="space-y-2">
							{/* Name Input */}
							<div className="group">
								<label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
								<div className="relative">
									<User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-orange-500" />
									<input
										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Enter your name"
										required
									/>
								</div>
							</div>

							{/* Email Input */}
							<div className="group">
								<label className="mb-1.5 block text-sm font-medium text-gray-700">Email</label>
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-orange-500" />
									<input
										type="email"
										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
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
									Quick verification: What is {mathQuestion.num1} + {mathQuestion.num2}?
								</label>
								<div className="relative">
									<Brain className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-orange-500" />
									<input
										type="number"
										className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
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
								className="w-full rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
							>
								{isSubmitting ? (
									<span className="flex items-center justify-center gap-2">
										<svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
												fill="none"
											/>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											/>
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

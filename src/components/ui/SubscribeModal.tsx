import { useState } from 'react';
import { X } from 'lucide-react';

type SubscribeModalProps = {
	onClose: () => void;
};

const SubscribeModal = ({ onClose }: SubscribeModalProps) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [answer, setAnswer] = useState('');
	const correctAnswer = 16;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (Number(answer) !== correctAnswer) {
			alert('Wrong answer!');
			return;
		}

		alert('Subscribed successfully!');
		onClose(); // close after submit
	};

	return (
		<div className="fixed pt-32 inset-0 z-50 flex items-center justify-center bg-black/10">
			<div className="relative w-[420px] px-2 overflow-hidden rounded-md bg-white shadow-lg">
				{/* ❌ Close Button */}
				<button
					onClick={onClose}
					className="absolute right-2 top-2 z-10 rounded-full border-purple-700 p-1 text-black shadow hover:text-black"
				>
					<X size={24} />
				</button>

				<div
					className="relative sm:h-[480px] h-[500px] bg-cover bg-center"
					style={{
						backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b')",
					}}
				>
					<div className="absolute inset-0 bg-white/85 p-5">
						<h2 className="mb-2 text-lg font-semibold tracking-wide">
							SUBSCRIBE AND STAY CONNECTED WITH US
						</h2>

						<p className="mb-4 text-sm text-gray-700">
							Be the first to know about our moving stories, new projects and opportunities. Join our
							community of changemakers today!
						</p>

						<form onSubmit={handleSubmit} className="space-y-3">
							<div>
								<label className="text-sm font-medium">Name</label>
								<input
									className="mt-1 w-full rounded border px-3 py-2 text-sm"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>

							<div>
								<label className="text-sm font-medium">Email</label>
								<input
									type="email"
									className="mt-1 w-full rounded border px-3 py-2 text-sm"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>

							<div>
								<label className="text-sm font-medium">What is 7 + 9?</label>
								<input
									type="number"
									placeholder="Enter sum"
									className="mt-1 w-full rounded border px-3 py-2 text-sm"
									value={answer}
									onChange={(e) => setAnswer(e.target.value)}
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full rounded bg-lime-500 py-2 text-sm font-semibold text-white hover:bg-lime-600"
							>
								SUBMIT
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubscribeModal;

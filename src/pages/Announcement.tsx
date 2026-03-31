import React, { useEffect, useState } from 'react';

const TeluguContent = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setVisible(true), 100);
	}, []);

	const features = [
		{ icon: '🎓', text: 'నిపుణుల మార్గదర్శకత్వం' },
		{ icon: '📋', text: 'క్రమబద్ధమైన ప్రిపరేషన్ స్ట్రాటజీ' },
		{ icon: '📚', text: 'సమగ్ర అధ్యయన పాఠ్యసామగ్రి' },
		{ icon: '📊', text: 'పనితీరు విశ్లేషణ & మూల్యాంకనం' },
		{ icon: '🚀', text: 'ప్రేరణ & కెరీర్ మార్గదర్శనం' },
	];

	const documents = [
		'విద్యార్థి ఆధార్ ఫోటో కాపీ',
		'తల్లిదండ్రుల ఆధార్ ఫోటో కాపీ',
		'విద్యార్థి జనన తేదీ / కమ్యూనిటీ / ఆదాయ సర్టిఫికేట్ (ఫోటో కాపీ)',
		'విద్యార్థి 2 పాస్‌పోర్ట్ సైజ్ ఫోటోలు',
	];

	return (
		<div className="min-h-screen bg-white font-sans flex pt-40 flex-col items-center">
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Telugu&family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');

        .telugu { font-family: 'Tiro Telugu', serif; }
        .heading-font { font-family: 'Playfair Display', serif; }
        .body-font { font-family: 'DM Sans', sans-serif; }

        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }

        .glow-border {
          box-shadow: 0 0 0 2px #f97316, 0 8px 32px rgba(249,115,22,0.15);
        }

        .date-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 12px 40px rgba(249,115,22,0.3);
        }
        .date-card { transition: all 0.3s ease; }

        .feature-item:hover {
          background: linear-gradient(135deg, #fff7ed, #ffedd5);
          transform: translateX(6px);
        }
        .feature-item { transition: all 0.25s ease; }

        .pulse-badge {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(249,115,22,0); }
        }

        .shimmer {
          background: linear-gradient(135deg, #ea580c 0%, #f97316 40%, #fb923c 60%, #ea580c 100%);
          background-size: 200% 200%;
          animation: shimmer-anim 3s ease infinite;
        }
        @keyframes shimmer-anim {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

			{/* Hero Header — full width */}
			<div className="shimmer flex items-center max-w-6xl rounded-lg text-white relative overflow-hidden w-full">
				{/* <div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage:
							'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
						backgroundSize: '60px 60px',
					}}
				/> */}
				<div className="relative max-w-3xl mx-auto px-6 py-12 text-center">
					<div className={`fade-up ${visible ? 'visible' : ''}`}>
						<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 body-font text-sm font-medium tracking-wide">
							<span className="w-2 h-2 bg-yellow-50 rounded-full pulse-badge inline-block" />
							NEW BATCH REGISTRATION OPEN
						</div>
					</div>

					<div className={`fade-up delay-1 ${visible ? 'visible' : ''}`}>
						<h1 className="heading-font text-4xl md:text-5xl font-black leading-tight mb-2 drop-shadow-lg">
							Viraga's Vibrant Future
						</h1>
						<p className="heading-font text-xl md:text-2xl font-bold italic text-orange-100 mb-4">
							Transforming Lives
						</p>
					</div>

					<div className={`fade-up delay-2 ${visible ? 'visible' : ''}`}>
						<p className="telugu text-lg text-orange-100 leading-relaxed max-w-xl mx-auto">
							జాతీయ స్థాయి ప్రవేశ పరీక్షలకు సిద్ధమవుతున్న మా కొత్త బ్యాచ్ అభ్యర్థుల కోసం రిజిస్ట్రేషన్
							కార్యక్రమాన్ని ప్రకటించడం మా ఆనందంగా ఉంది.
						</p>
					</div>
				</div>
			</div>

			{/* Main Content — centered column */}
			<div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-10 space-y-8 flex flex-col items-center">
				{/* Registration Dates */}
				<div className={`fade-up delay-2 ${visible ? 'visible' : ''} w-full`}>
					<h2 className="body-font text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4 flex items-center gap-2">
						<span className="h-px flex-1 bg-orange-200" />
						📅 రిజిస్ట్రేషన్ తేదీలు
						<span className="h-px flex-1 bg-orange-200" />
					</h2>
					<div className="space-y-4">
						{/* Registration Open Banner */}
						<div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-5 text-center shadow-lg">
							<div className="text-white text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
								🎉 Registrations Now Open
							</div>
							<div className="text-white text-2xl font-black leading-tight">Register Before</div>
							<div className="text-white text-4xl font-black leading-none mt-1">30 April 2026</div>
							<div className="mt-3 w-16 h-1 bg-white/40 rounded-full mx-auto" />
						</div>

						{/* Contact Buttons */}
						<div className="grid grid-cols-2 gap-3">
							<a
								href="mailto:viragafoundation@gmail.com"
								className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 glow-border cursor-pointer hover:bg-orange-50 transition-colors group"
							>
								<div className="text-2xl mb-1">✉️</div>
								<div className="text-xs font-bold text-orange-500 uppercase tracking-wide mb-1">
									Email Us
								</div>
								<div className="text-xs text-gray-600 font-medium text-center break-all">
									viragafoundation@gmail.com
								</div>
							</a>

							<a
								href="tel:+919492940941"
								className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 glow-border cursor-pointer hover:bg-orange-50 transition-colors group"
							>
								<div className="text-2xl mb-1">📞</div>
								<div className="text-xs font-bold text-orange-500 uppercase tracking-wide mb-1">
									Call Us
								</div>
								<div className="text-xs text-gray-600 font-medium text-center">+91 9492940941</div>
							</a>
						</div>
					</div>
				</div>

				{/* Venue */}
				<div className={`fade-up delay-3 ${visible ? 'visible' : ''} w-full`}>
					<div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm">
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
								📍
							</div>
							<div>
								<div className="body-font text-xs font-semibold uppercase tracking-widest text-orange-400 mb-1">
									వేదిక / చిరునామా
								</div>
								<div className="telugu text-gray-800 leading-relaxed">
									<span className="font-bold text-orange-700">విరాగా ఫౌండేషన్</span>
									<br />
									కల్పతరు, సెక్టార్ 5,
									<br />
									లోటస్ ల్యాండ్ మార్క్, అయోధ్య నగర్,
									<br />
									విజయవాడ - 03
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Program Goal */}
				<div className={`fade-up delay-3 ${visible ? 'visible' : ''} w-full`}>
					<div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-orange-100 text-center">
						<p className="telugu text-gray-700 leading-8 text-base">
							ప్రస్తుతం <span className="font-bold text-orange-600 text-lg">4వ తరగతి</span> చదువుతున్న
							విద్యార్థులను <span className="font-bold text-orange-600 text-lg">6వ తరగతి</span> జాతీయ
							స్థాయి పోటీ పరీక్షల్లో ప్రతిభ కనబరచేలా శక్తివంతం చేయడం మరియు మార్గనిర్దేశం చేయడం ఈ
							కార్యక్రమం లక్ష్యం.
						</p>
					</div>
				</div>

				{/* Features */}
				<div className={`fade-up delay-4 ${visible ? 'visible' : ''} w-full`}>
					<h2 className="body-font text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4 flex items-center gap-2">
						<span className="h-px flex-1 bg-orange-200" />
						మీరు పొందేవి
						<span className="h-px flex-1 bg-orange-200" />
					</h2>
					<div className="bg-white rounded-2xl overflow-hidden border border-orange-100 shadow-sm divide-y divide-orange-50">
						{features.map((f, i) => (
							<div key={i} className="feature-item flex items-center gap-4 px-6 py-4 cursor-default">
								<span className="text-2xl">{f.icon}</span>
								<span className="telugu text-gray-800 font-medium">{f.text}</span>
								<span className="ml-auto text-orange-300 text-lg">›</span>
							</div>
						))}
					</div>
				</div>

				{/* CTA Banner */}
				<div className={`fade-up delay-5 ${visible ? 'visible' : ''} w-full`}>
					<div className="shimmer rounded-2xl p-6 text-white text-center relative overflow-hidden">
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
						<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full" />
						<div className="relative">
							<div className="text-3xl mb-2">⭐</div>
							<p className="telugu text-lg font-bold leading-relaxed mb-1">
								విరాగా తో కలిసి మరింత ప్రకాశవంతమైన,
							</p>
							<p className="telugu text-lg font-bold leading-relaxed mb-4">
								వైభవమైన భవిష్యత్తు వైపు మొదటి అడుగు వేయండి!
							</p>
							<div className="inline-flex items-center gap-2 bg-white text-orange-600 rounded-full px-6 py-2.5 body-font font-bold text-sm ">
								📌 సీట్లు పరిమితంగా ఉన్నాయి – ముందస్తు రిజిస్ట్రేషన్ చేయండి
							</div>
						</div>
					</div>
				</div>

				{/* Required Documents */}
				<div className={`fade-up delay-5 ${visible ? 'visible' : ''} w-full`}>
					<h2 className="body-font text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4 flex items-center gap-2">
						<span className="h-px flex-1 bg-orange-200" />
						అవసరమైన పత్రాలు
						<span className="h-px flex-1 bg-orange-200" />
					</h2>
					<div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm space-y-3">
						{documents.map((doc, i) => (
							<div key={i} className="flex items-center gap-3">
								<div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-orange-600 text-xs font-bold">{i + 1}</span>
								</div>
								<span className="telugu text-gray-700 leading-relaxed">{doc}</span>
							</div>
						))}
					</div>
				</div>

				{/* Contact CTA */}
				<div className={`fade-up delay-6 ${visible ? 'visible' : ''} w-full`}>
					<div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 text-center">
						<p className="telugu text-gray-600 mb-2">మరిన్ని వివరాలు మరియు ప్రవేశ సమాచారం కోసం</p>
						<button className="shimmer text-white body-font font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
							ఈరోజే మమ్మల్ని సంప్రదించండి →
						</button>
					</div>
				</div>

				{/* Footer */}
				<div className={`fade-up delay-6 ${visible ? 'visible' : ''} text-center pb-6 w-full`}>
					<div className="heading-font text-2xl font-bold text-orange-600 mb-1">Viraga Foundation</div>
					<div className="telugu text-gray-400 text-sm">ధన్యవాదాలతో, విరాగా టీమ్</div>
					<div className="flex justify-center gap-2 mt-3">
						{['●', '●', '●'].map((d, i) => (
							<span key={i} className={`text-xs ${i === 1 ? 'text-orange-400' : 'text-orange-200'}`}>
								{d}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeluguContent;

import { motion } from 'framer-motion';

const EducationProgrammeSection = () => {
	return (
		<section className="relative w-full bg-white py-5 px-4 sm:px-8 lg:px-10">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className="mx-auto w-full max-w-7xl"
				style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
			>
				<iframe
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						border: 0,
						borderRadius: '12px',
					}}
					src="https://www.youtube.com/embed/k1hdvWqiZPM?rel=0&modestbranding=1&showinfo=0"
					title="Viraga Foundation – Education Programme"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			</motion.div>
		</section>
	);
};

export default EducationProgrammeSection;
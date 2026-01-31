import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import bgpic from '../assets/annual.png';
import pdf1 from '../files/Financial-Statements-FY-24-25.pdf';
import pdf2 from '../files/Audit-Report-F.Y-23-24.pdf';
import pdf3 from '../files/Audit-Report-F.Y-23-24 (1).pdf';
import pdf4 from '../files/Financials-F.Y-23-24.pdf';
import pdf5 from '../files/Audit-Report_Signed_2022-23-FY.pdf';
import pdf6 from '../files/Financials_Signed_2022-23-FY.pdf';
import auditIllustration from '../assets/audit.png';
const YearlyReportsPage = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const reports = [
		{
			year: '2024-2025',
			auditReport: {
				label: 'Audit Report F.Y 24-25',
				file: pdf2, // Replace with your actual file path
			},
			financials: {
				label: 'Financials 2024-25 FY',
				file: pdf1, // Replace with your actual file path
			},
		},
		{
			year: '2023-2024',
			auditReport: {
				label: 'Audit Report F.Y 23-24',
				file: pdf3,
			},
			financials: {
				label: 'Financials 2023-24 FY',
				file: pdf4,
			},
		},
		{
			year: '2022-2023',
			auditReport: {
				label: 'Audit Report 2022-23 FY',
				file: pdf5,
			},
			financials: {
				label: 'Financials 2022-23 FY',
				file: pdf6,
			},
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Hero Section */}
			<div
				className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
				style={{
					backgroundImage: 'url("' + bgpic + '")',
				}}
			>
				<div className="absolute inset-0 "></div>
				<h1
					className={`relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-white tracking-wider transition-all duration-1000 transform ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
					}`}
				>
					{/* YEARLY REPORTS */}
				</h1>
			</div>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				{/* Audit Illustration Card */}
				<div
					className={`mb-12 sm:mb-16 flex justify-center transition-all duration-1000 delay-200 transform ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
					}`}
				>
					{/* <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-4 sm:p-6 lg:p-10 shadow-2xl max-w-4xl w-full">
						<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
							<div className="flex-shrink-0">
								<div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
									<FileText className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20	 text-white" />
								</div>
							</div>
							<div className="text-center md:text-left">
								<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">AUDIT</h2>
								<p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-md">
									Transparency and accountability in every report. Access our comprehensive financial
									audits and yearly statements.
								</p>
							</div>
						</div>
					</div> */}
					<img src={auditIllustration} alt="Audit Illustration" className="w-40 h-40 sm:w-60 sm:h-60 lg:w-[500px] rounded-md lg:h-80"/>
					
				</div>

				{/* Reports Tables */}
				<div className="space-y-8 sm:space-y-12">
					{reports.map((report, index) => (
						<div
							key={report.year}
							className={`transition-all duration-1000 transform ${
								isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							style={{ transitionDelay: `${(index + 3) * 100}ms` }}
						>
							{/* Desktop Table */}
							<div className="hidden lg:block overflow-hidden rounded-xl shadow-lg border-2 border-gray-200">
								<table className="w-full">
									<thead>
										<tr className="bg-gradient-to-r from-gray-100 to-gray-50">
											<th className="py-4 px-6 text-left text-gray-700 font-semibold border-r border-gray-300">
												Year
											</th>
											<th className="py-4 px-6 text-center text-gray-700 font-semibold border-r border-gray-300">
												Audit Report-{report.year} FY
											</th>
											<th className="py-4 px-6 text-center text-gray-700 font-semibold">
												Financials {report.year} FY
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="bg-white hover:bg-gray-50 transition-colors duration-200">
											<td className="py-6 px-6 text-center text-gray-800 font-medium border-r border-gray-200">
												{report.year}
											</td>
											<td className="py-6 px-6 text-center border-r border-gray-200">
												<a
													href={report.auditReport.file}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
												>
													{report.auditReport.label}
													<Download className="w-4 h-4" />
												</a>
											</td>
											<td className="py-6 px-6 text-center">
												<a
													href={report.financials.file}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
												>
													{report.financials.label}
													<Download className="w-4 h-4" />
												</a>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							{/* Mobile/Tablet Card Layout */}
							<div className="lg:hidden bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
								{/* Year Header */}
								<div className="bg-gradient-to-r from-gray-100 to-gray-50 py-4 px-6 border-b-2 border-gray-200">
									<h3 className="text-lg sm:text-xl font-semibold text-gray-700 text-center">
										Year: {report.year}
									</h3>
								</div>

								{/* Content */}
								<div className="divide-y divide-gray-200">
									{/* Audit Report */}
									<div className="p-6">
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
											<h4 className="text-gray-700 font-medium text-sm sm:text-base">
												Audit Report-{report.year} FY
											</h4>
											<a
												href={report.auditReport.file}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200 text-sm sm:text-base"
											>
												{report.auditReport.label}
												<Download className="w-4 h-4" />
											</a>
										</div>
									</div>

									{/* Financials */}
									<div className="p-6">
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
											<h4 className="text-gray-700 font-medium text-sm sm:text-base">
												Financials {report.year} FY
											</h4>
											<a
												href={report.financials.file}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200 text-sm sm:text-base"
											>
												{report.financials.label}
												<Download className="w-4 h-4" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Info Section */}
				<div
					className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-700 transform ${
						isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
					}`}
				>
					<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 sm:p-8 border border-blue-200">
						<p className="text-gray-700 text-sm sm:text-base lg:text-lg">
							All reports are available in PDF format. Click on the links to view or download the
							documents.
							<br />
							For any queries regarding the reports, please contact us.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YearlyReportsPage;

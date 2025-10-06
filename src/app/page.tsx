export default function Home() {
	return (
		<div className="relative min-h-screen bg-black text-white overflow-hidden">
			<div className="absolute inset-0">
				<div className="grid-pattern"></div>
			</div>

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="gradient-orb gradient-orb-1"></div>
				<div className="gradient-orb gradient-orb-2"></div>
				<div className="gradient-orb gradient-orb-3"></div>
			</div>

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="line line-1"></div>
				<div className="line line-2"></div>
				<div className="line line-3"></div>
			</div>

			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="dot dot-1"></div>
				<div className="dot dot-2"></div>
				<div className="dot dot-3"></div>
				<div className="dot dot-4"></div>
				<div className="dot dot-5"></div>
				<div className="dot dot-6"></div>
				<div className="dot dot-7"></div>
				<div className="dot dot-8"></div>
				<div className="dot dot-9"></div>
				<div className="dot dot-10"></div>
			</div>

			<div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-center px-4 sm:px-6 lg:px-12 py-16 lg:py-0 gap-8 sm:gap-12 lg:gap-20 max-w-7xl mx-auto">
				<div className="w-full lg:w-auto flex-shrink-0 space-y-6 sm:space-y-8 animate-fade-in">
					<div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6">
						<img
							src="/icon.jpg"
							alt="Profile"
							className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-2 border-white/10"
						/>
						<div className="text-center lg:text-left">
							<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 font-mono">
								Fraimer
							</h2>
							<p className="text-base sm:text-lg text-gray-400">
								From the Dominican Republic 🇩🇴
							</p>
						</div>
					</div>

					<div className="space-y-3 text-xs sm:text-sm font-mono max-w-md mx-auto lg:mx-0">
						<div className="flex items-center gap-2 sm:gap-3">
							<span className="text-gray-500 w-16 sm:w-20">GitHub</span>
							<a
								href="https://github.com/plxcsy"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:underline"
							>
								@plxcsy
							</a>
						</div>
						<div className="flex items-center gap-2 sm:gap-3">
							<span className="text-gray-500 w-16 sm:w-20">X</span>
							<a
								href="https://x.com/fraimer"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:underline"
							>
								@fraimer
							</a>
						</div>
						<div className="flex items-center gap-2 sm:gap-3">
							<span className="text-gray-500 w-16 sm:w-20">Bluesky</span>
							<a
								href="https://bsky.app/profile/fraimer.dev"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:underline break-all"
							>
								@fraimer.dev
							</a>
						</div>
						<div className="flex items-center gap-2 sm:gap-3">
							<span className="text-gray-500 w-16 sm:w-20">Discord</span>
							<span className="text-white">@plxcsy</span>
						</div>
						<div className="flex items-center gap-2 sm:gap-3">
							<span className="text-gray-500 w-16 sm:w-20">Ko-fi</span>
							<a
								href="https://ko-fi.com/fraimer"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:underline"
							>
								@fraimer
							</a>
						</div>
						<div className="flex items-center gap-2 sm:gap-3">
							<span className="text-gray-500 w-16 sm:w-20">Email</span>
							<a
								href="mailto:biz@fraimer.dev"
								className="text-white hover:underline break-all"
							>
								biz@fraimer.dev
							</a>
						</div>
					</div>
				</div>

				<div className="flex-1 space-y-8 sm:space-y-10 lg:space-y-12 animate-fade-in animation-delay-300">
					<div className="space-y-4 sm:space-y-6">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono">
							👋 Hey there you!
						</h1>
						<p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
							I’m Fraimer De La Cruz, a 17-year-old programmer and Computer
							Science student with a passion for software development and
							artificial intelligence. I enjoy building modern websites and AI
							Agents that make technology more intuitive and useful. With
							increasing experience in full-stack development and AI Agents, I
							am expanding my skills to create innovative digital solutions.
						</p>
					</div>

					<div>
						<a href="https://ko-fi.com/J3J3DXCPM" target="_blank">
							<img
								height="36"
								style={{ border: "0px", height: "36px" }}
								src="https://storage.ko-fi.com/cdn/kofi1.png?v=6"
								alt="Buy Me a Coffee at ko-fi.com"
								className="max-w-full h-auto"
							/>
						</a>
					</div>

					<div className="space-y-4 sm:space-y-6">
						<h2 className="text-xl sm:text-2xl font-bold font-mono">
							💻 Tools I Use
						</h2>
						<div className="overflow-x-auto">
							<img
								src="https://skillicons.dev/icons?i=js,ts,py,html,css,go,rust,bun,nodejs,react,nextjs,vite,express,git,mongodb,postgres,tailwind,discord,discordjs,zig,vscode,windows,github,cloudflare,supabase,postman&theme=dark"
								alt="Tech Stack"
								className="w-full max-w-2xl min-w-[300px]"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono mb-8 sm:mb-12 lg:mb-16 text-center">
						My Projects
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
						<a
							href="https://www.trustify.gg/"
							target="_blank"
							rel="noopener noreferrer"
							className="group block"
						>
							<div className="p-6 sm:p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full">
								<h3 className="text-xl sm:text-2xl font-bold font-mono mb-3 sm:mb-4 group-hover:text-gray-300">
									Trustify
								</h3>
								<p className="text-sm sm:text-base text-gray-400 leading-relaxed">
									A Discord bot focused on gathering feedback from communities
									in the form of reviews.
								</p>
							</div>
						</a>

						<a
							href="https://misskhalifa.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="group block"
						>
							<div className="p-6 sm:p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full">
								<h3 className="text-xl sm:text-2xl font-bold font-mono mb-3 sm:mb-4 group-hover:text-gray-300">
									Miss Khalifa AI
								</h3>
								<p className="text-sm sm:text-base text-gray-400 leading-relaxed">
									An AI Sexual Health chatbot built at a camp/hackathon.{" "}
									<span className="text-white font-semibold">(winner)</span>
								</p>
							</div>
						</a>

						<a
							href="https://prtn.xyz/"
							target="_blank"
							rel="noopener noreferrer"
							className="group block"
						>
							<div className="p-6 sm:p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full">
								<h3 className="text-xl sm:text-2xl font-bold font-mono mb-3 sm:mb-4 group-hover:text-gray-300">
									Proton
								</h3>
								<p className="text-sm sm:text-base text-gray-400 leading-relaxed">
									A multi-purpose leveling, logging and moderation Discord bot
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

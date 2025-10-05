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

			<div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-center px-6 lg:px-12 py-12 lg:py-0 gap-12 lg:gap-20 max-w-7xl mx-auto">
				<div className="w-full lg:w-auto flex-shrink-0 space-y-8 animate-fade-in">
					<div className="flex flex-col items-center lg:items-start space-y-6">
						<img 
							src="/icon.jpg" 
							alt="Profile"
							className="w-64 h-64 rounded-full object-cover border-2 border-white/10"
						/>
						<div className="text-center lg:text-left">
							<h2 className="text-6xl font-bold mb-2 font-mono">Fraimer</h2>
							<p className="text-lg text-gray-400">From the Dominican Republic </p>
						</div>
					</div>

					<div className="space-y-3 text-sm font-mono">
						<div className="flex items-center gap-3">
							<span className="text-gray-500 w-20">GitHub</span>
							<a href="https://github.com/plxcsy" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@plxcsy</a>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-gray-500 w-20">X</span>
							<a href="https://x.com/fraimer" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@fraimer</a>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-gray-500 w-20">Bluesky</span>
							<a href="https://bsky.app/profile/fraimer.dev" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@fraimer.dev</a>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-gray-500 w-20">Discord</span>
							<span className="text-white">@plxcsy</span>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-gray-500 w-20">Ko-fi</span>
							<a href="https://ko-fi.com/fraimer" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@fraimer</a>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-gray-500 w-20">Email</span>
							<a href="mailto:biz@fraimer.dev" className="text-white hover:underline">biz@fraimer.dev</a>
						</div>
					</div>
				</div>

				<div className="flex-1 space-y-12 animate-fade-in animation-delay-300">
					<div className="space-y-6">
						<h1 className="text-4xl lg:text-5xl font-bold font-mono">
							👋 Hey! I am Fraimer
						</h1>
						<p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
							I am an aspiring Software engineer/Tech Enthusiast! I will be sharing my learning in software development and projects here. Currently I focused on advancing my knowledge in software development.
						</p>
					</div>

					<div>
						<a href='https://ko-fi.com/J3J3DXCPM' target='_blank'><img height='36' style={{border: '0px', height: '36px'}} src='https://storage.ko-fi.com/cdn/kofi1.png?v=6' alt='Buy Me a Coffee at ko-fi.com' /></a>
					</div>

					<div className="space-y-6">
						<h2 className="text-2xl font-bold font-mono">💻 Technologies and Tools I use</h2>
						<div>
							<img 
								src="https://skillicons.dev/icons?i=js,ts,py,html,css,bun,nodejs,react,nextjs,vite,express,git,mongodb,tailwind,discord,discordjs,zig,vscode,windows,github,cloudflare,supabase&theme=dark" 
								alt="Tech Stack"
								className="w-full max-w-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

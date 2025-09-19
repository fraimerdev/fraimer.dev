"use client";

import { useEffect } from "react";

const Proton = () => {
	const protonInvite =
		"https://discord.com/oauth2/authorize?client_id=1358977421621071894";

	useEffect(() => {
		const timer = setTimeout(() => {
			window.location.href = protonInvite;
		}, 1500);

		return () => clearTimeout(timer);
	}, [protonInvite]);

	return (
		<div className="flex items-center justify-center min-h-screen">
			<h1 className="text-3xl font-semibold">Redirecting to Proton</h1>
		</div>
	);
};

export default Proton;

import { notFound, redirect } from "next/navigation";
import React from "react";

export default async function RedirectsPage({
	params,
}: {
	params: Promise<{ pathname: string }>;
}) {
	const { pathname } = await params;

	switch (pathname) {
		case "proton":
			return redirect(
				"https://discord.com/oauth2/authorize?client_id=1358977421621071894"
			);
	}

	notFound();
}

import { notFound, redirect } from "next/navigation";

export default async function RedirectsPage({
	params,
}: {
	params: Promise<{ pathname: string }>;
}) {
	const { pathname } = await params;

	switch (pathname) {
		case "proton":
			return redirect("https://prtn.xyz");
		case "x":	
			return redirect("https://x.com/plxcsy");
		case "github":
			return redirect("https://github.com/fraimerdev");
		case "donate":
			return redirect("https://ko-fi.com/fraimer");
	}

	notFound();
}

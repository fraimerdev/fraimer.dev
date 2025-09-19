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
	}

	notFound();
}

import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$pathname")({
  beforeLoad: ({ params }) => {
    const { pathname } = params;

    switch (pathname) {
      case "proton":
        throw redirect({ href: "https://prtn.xyz" });
      case "x":
        throw redirect({ href: "https://x.com/plxcsy" });
      case "github":
        throw redirect({ href: "https://github.com/fraimerdev" });
      case "donate":
        throw redirect({ href: "https://ko-fi.com/fraimer" });
    }

    throw notFound();
  },
  component: () => null,
});

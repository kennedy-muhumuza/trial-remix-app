import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import homeStyles from "~/styles/home.css";

export const meta: MetaFunction = () => {
  return [
    { title: "My first Remix App" },
    { name: "description", content: "Welcome to My first Remix app!" },
  ];
};

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Try now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default async function About() {
  await new Promise((resolve) => setTimeout(() => resolve("resolved"), 3000));
  return <div>About Page</div>;
}

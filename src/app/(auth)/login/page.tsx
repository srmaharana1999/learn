import { Metadata } from "next";
const name = "srm";
export const metadata: Metadata = {
  title: `${name}`,
};
export default function Login() {
  return <h1>Login Route</h1>;
}

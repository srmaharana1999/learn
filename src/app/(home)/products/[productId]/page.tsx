"use client";

import { useRouter } from "next/navigation";
// import { Metadata } from "next";
import { use } from "react";

// Implimentation of Dynamic Routing
type Props = Promise<{ productId: string }>;

// export async function generateMetadata({
//   params,
// }: {
//   params: Props;
// }): Promise<Metadata> {
//   return {
//     title: `Product-${(await params).productId}`,
//   };
// }

export default function ProductDetails({ params }: { params: Props }) {
  const productid = use(params).productId;
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <h1>product - {productid}</h1>
      <button onClick={handleClick}>Buy Now</button>
    </>
  );
}

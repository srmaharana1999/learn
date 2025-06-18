import Link from "next/link";

export default async function Products({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productID = (await params).productId;

  return (
    <div>
      <Link href="/products/1">Product-1 </Link>
      <Link href="/products/2">Product-2 </Link>
      <Link href="/products/3" replace>
        Product-3
      </Link>
      <Link href={`/products/${productID}`}>Product-{productID}</Link>
    </div>
  );
}

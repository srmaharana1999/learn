export default async function productDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productid = (await params).productId;
  return <h1>product details - {productid}</h1>;
}

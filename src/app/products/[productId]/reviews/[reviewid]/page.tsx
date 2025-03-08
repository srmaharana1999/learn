export default async function reviewDetails({
  params,
}: {
  params: Promise<{ reviewid: string; productId: string }>;
}) {
  const { reviewid, productId } = await params;
  return (
    <h4>
      Review-{reviewid} of Product-{productId}
    </h4>
  );
}

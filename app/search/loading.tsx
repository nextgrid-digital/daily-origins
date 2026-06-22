import Grid from "components/grid";

export default function Loading() {
  return (
    <>
      <div className="mb-4 h-6" />
      <Grid className="grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Grid.Item
              key={index}
              className="aspect-[4/5] animate-pulse rounded-none bg-stone"
            />
          ))}
      </Grid>
    </>
  );
}

export const GraphOptions = ({ table }) => {
  return (
    <div>
      {table.map((item) => (
        <p>{JSON.stringify(item)}</p>
      ))}
    </div>
  );
};

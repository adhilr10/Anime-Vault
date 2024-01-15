type Props = {
  name: string;
};

function Genre({ name }: Props) {
  return (
    <div className="text-[#0F1117] bg-white rounded-2xl p-2 hover:bg-[#0F1117] hover:text-white font-medium hover:duration-700">
      <p>{name}</p>
    </div>
  );
}

export default Genre;

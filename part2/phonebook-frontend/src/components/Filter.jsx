const Filter = (props) => {
  const { handleFilterChange } = props;
  return (
    <div>
      Filter: <input onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;

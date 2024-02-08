const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 my-2 py-1 mr-4 bg-gray-100 rounded-lg hover:bg-gray-300 ">
        {name}
      </button>
    </div>
  );
};

export default Button;

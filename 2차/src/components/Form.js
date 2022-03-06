const Form = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={props.handleSubmit} className="flex pt-2">
        <input
          type="text"
          name="value"
          className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow "
          placeholder="해야 할 일을 입력하세요"
          value={props.value || ""}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="입력"
          className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover: bg-blue-200"
        />
      </form>
    </div>
  );
};

export default Form;

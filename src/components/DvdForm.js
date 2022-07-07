const DVDForm = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="size">SIZE (MB)</label>
        <input
          type="number"
          id="size"
          value={props.sizeValue}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className={props.className}
          required
        />
      </div>
      <div className="input">
        <p>Please provide size in Megabytes.</p>
      </div>
    </div>
  );
};
export default DVDForm;

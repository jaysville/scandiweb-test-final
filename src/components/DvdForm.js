const DVDForm = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="size">SIZE (MB)</label>
        <input
          type="number"
          id="size"
          step="any"
          min="0"
          value={props.sizeValue}
          onBlur={props.onBlur}
          onChange={props.onChange}
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

const BookForm = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="weight">Weight (KG)</label>
        <input
          type="number"
          id="weight"
          step="any"
          value={props.weightValue}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className={props.className}
          required
        />
      </div>
      <div className="input">
        <p>Please provide weight in Kilograms.</p>
      </div>
    </div>
  );
};
export default BookForm;

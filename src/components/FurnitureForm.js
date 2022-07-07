const FurnitureForm = (props) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="height">Height (CM)</label>
        <input
          type="number"
          id="height"
          value={props.heightValue}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className={props.heightClass}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="width">Width (CM)</label>
        <input
          type="number"
          id="width"
          value={props.widthValue}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className={props.widthClass}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="length">Length (CM)</label>
        <input
          type="number"
          id="length"
          value={props.lengthValue}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className={props.lengthClass}
          required
        />
      </div>
      <div className="input">
        <p>Please provide dimensions in HxWxL format.</p>
      </div>
    </div>
  );
};

export default FurnitureForm;

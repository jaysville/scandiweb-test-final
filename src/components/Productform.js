import { useState } from "react";
import DVDForm from "./DvdForm";
import BookForm from "./BookForm";
import FurnitureForm from "./FurnitureForm";
import { Formik, useFormik } from "formik";
import { productSchema } from "../schemas";
const Productform = (props) => {
  const [dvdForm, SetDvdForm] = useState(false);
  const [bookForm, SetBookForm] = useState(false);
  const [furnitureForm, SetFurnitureForm] = useState(false);

  const renderForm = (e) => {
    let choice = e.target.value;
    if (choice === "DVD") {
      SetDvdForm(true);
      SetBookForm(false);
      SetFurnitureForm(false);
    } else if (choice === "Book") {
      SetBookForm(true);
      SetDvdForm(false);
      SetFurnitureForm(false);
    } else if (choice === "Furniture") {
      SetDvdForm(false);
      SetBookForm(false);
      SetFurnitureForm(true);
    } else {
      SetDvdForm(false);
      SetBookForm(false);
      SetFurnitureForm(false);
    }
  };

  const onSubmit = (e) => {
    console.log(values);
    props.onAddProduct(values);
  };

  const { values, handleBlur, errors, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        sku: "",
        name: "",
        price: "",
        weight: "",
        size: "",
        length: "",
        width: "",
        height: "",
      },
      validationSchema: productSchema,
      onSubmit,
    });
  console.log(errors);
  console.log(values);
  return (
    <Formik>
      <form
        id="product_form"
        className="needs-validation"
        onSubmit={handleSubmit}
      >
        <div className="input">
          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            id="sku"
            value={values.sku}
            onBlur={handleBlur}
            onChange={handleChange}
            className={touched.sku && errors.sku ? "input-error" : ""}
          />
          {touched.sku && errors.sku && <p className="error">{errors.sku}</p>}
        </div>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            className={touched.name && errors.name ? "input-error" : ""}
          />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>
        <div className="input">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            id="price"
            value={values.price}
            onBlur={handleBlur}
            onChange={handleChange}
            className={touched.price && errors.price ? "input-error" : ""}
          />
          {touched.price && errors.price && (
            <p className="error">{errors.price}</p>
          )}
        </div>
        <div className="input">
          <label htmlFor="productType">Type Switcher</label>
          <select id="productType" onChange={renderForm} required>
            <option value="">Select Type</option>
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
        {dvdForm && (
          <DVDForm
            sizeValue={values.size}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        )}
        {bookForm && (
          <BookForm
            weightValue={values.weight}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        )}
        {furnitureForm && (
          <FurnitureForm
            heightValue={values.height}
            lengthValue={values.length}
            widthValue={values.width}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        )}
      </form>
    </Formik>
  );
};
export default Productform;

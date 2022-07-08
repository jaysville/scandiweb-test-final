import * as yup from "yup";

export const productSchema = yup.object().shape({
  sku: yup.string().required("Enter Sku"),
  name: yup.string().required("Enter Name"),
  price: yup.number().positive().required("Enter Price"),
});

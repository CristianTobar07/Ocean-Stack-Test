import * as yup from "yup";

export const schemaCreateProduct = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),

  price: yup
    .number()
    .typeError("Debe ser un número")
    .required("El precio es obligatorio")
    .min(500, "El precio debe ser al menos 500 COP")
    .max(200000, "El precio no debe superar los 200.000 COP"),

  quantity: yup
    .number()
    .typeError("Debe ser un número")
    .required("La cantidad es obligatoria")
    .min(1, "La cantidad mínima es 1 unidad")
    .max(1000, "La cantidad máxima es 1000 unidades"),
});

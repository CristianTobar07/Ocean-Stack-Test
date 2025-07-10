// src/components/organisms/CreateProductForm.tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Stack } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateProduct } from "./createProductSchema";
import { ProductFormType } from "interfaces/products";

interface Props {
  onSubmit: (data: ProductFormType) => void;
}

export const CreateProductForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: yupResolver(schemaCreateProduct),
    defaultValues: {
      name: "",
      price: 0,
      quantity: 0,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} mt={2}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              label="Nombre del producto"
              fullWidth
              {...field}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              label="Precio"
              fullWidth
              type="number"
              {...field}
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          )}
        />

        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <TextField
              label="Cantidad"
              fullWidth
              type="number"
              {...field}
              error={!!errors.quantity}
              helperText={errors.quantity?.message}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ background: "#7c4dff" }}
        >
          Crear Producto
        </Button>
      </Stack>
    </form>
  );
};

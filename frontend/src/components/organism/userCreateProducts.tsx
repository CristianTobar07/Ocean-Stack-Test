import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ReusableModal } from "./Modal";
import { CreateProductForm } from "./CreateProductForm/CreateProductForm";
import { ProductFormType } from "interfaces/products";

interface Props {
  userName: string;
  handleCreateProduct: (product: ProductFormType) => void;
  openModal: boolean;
  setModal: (value: boolean) => void;
  buttonName: string;
}

const UserCreateProduct: React.FC<Props> = ({
  userName,
  buttonName,
  handleCreateProduct,
  openModal,
  setModal,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        display: "flex",
        justifyContent: "flex-end",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Typography variant="body1">
        ¡Hola, <strong>{userName}</strong>!
      </Typography>

      <Button
        variant="contained"
        color="inherit"
        onClick={() => setModal(!openModal)}
        startIcon={<AddCircleOutlineIcon />}
      >
        {buttonName}
      </Button>

      <ReusableModal
        open={openModal}
        title="Crear nuevo producto"
        onClose={() => setModal(false)}
      >
        <CreateProductForm onSubmit={handleCreateProduct} />
      </ReusableModal>
    </Paper>
  );
};

export default UserCreateProduct;

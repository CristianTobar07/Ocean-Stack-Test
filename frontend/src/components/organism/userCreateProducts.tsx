import React from "react";
import { Paper, Typography, Button, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface Props {
  userName: string;
  onCreateProduct: () => void;
}

const UserCreateProduct: React.FC<Props> = ({ userName, onCreateProduct }) => {
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
        onClick={onCreateProduct}
        startIcon={<AddCircleOutlineIcon />}
      >
        Crear nuevo producto
      </Button>
    </Paper>
  );
};

export default UserCreateProduct;

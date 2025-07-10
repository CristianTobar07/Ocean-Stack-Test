import React from "react";
import { Button } from "@mui/material";

interface Props {
  label: string;
  onClick: () => void;
}

const ProductButton: React.FC<Props> = ({ label, onClick }) => (
  <Button variant="outlined" fullWidth onClick={onClick} sx={{ mb: 1 }}>
    {label}
  </Button>
);

export default ProductButton;

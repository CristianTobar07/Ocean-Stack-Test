import React from "react";
import { Button } from "@mui/material";
import { SidebarCategories } from "interfaces/sidebarCategories";
import { useActiveRoute } from "common/hooks/useActiveRoute";

interface Props {
  category: SidebarCategories;
  onClick: () => void;
}

const ProductButton: React.FC<Props> = ({ category, onClick }) => (
  <Button
    sx={
      useActiveRoute(category.path)
        ? { bgcolor: "#7c4dff", mb: 1, color: "white" }
        : { border: 0.5, borderColor: "#7c4dff", color: "#7c4dff", mb: 1 }
    }
    fullWidth
    onClick={onClick}
  >
    {category.name}
  </Button>
);

export default ProductButton;

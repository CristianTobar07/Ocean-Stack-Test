import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ProductButton from "components/atoms/ProductButton";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/constants";
import { SidebarCategories } from "interfaces/sidebarCategories";

interface Props {
  categories: SidebarCategories[];
  onCategorySelect: (category: string) => void;
  textOut?: string;
}

const Sidebar: React.FC<Props> = ({
  categories,
  onCategorySelect,
  textOut = "Salir",
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 260, p: 2, bgcolor: "#f5f5f5", height: "100vh" }}>
      <Typography
        variant="h5"
        fontWeight="900"
        sx={{ textAlign: "center" }}
        mb={2}
        color="textSecondary"
      >
        ¡Haz tu orden!
      </Typography>
      {categories.map((cat, i) => (
        <ProductButton
          key={i}
          category={cat}
          onClick={() => onCategorySelect(cat.name)}
        />
      ))}

      <Box mt={2}>
        <Button
          fullWidth
          variant="contained"
          color="inherit"
          startIcon={<HomeIcon />}
          onClick={() => navigate(ROUTES.LANDING_PAGE)}
        >
          {textOut}
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;

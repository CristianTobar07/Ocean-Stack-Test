import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ProductButton from "components/atoms/ProductButton";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/constants";

interface Props {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const Sidebar: React.FC<Props> = ({ categories, onCategorySelect }) => {
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
          label={cat}
          onClick={() => onCategorySelect(cat)}
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
          Salir
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;

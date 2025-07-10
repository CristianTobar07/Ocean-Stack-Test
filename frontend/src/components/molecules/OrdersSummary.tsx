// src/components/molecules/OrderSummary.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

interface OrderSummaryProps {
  totalPrice: number;
  onCreateOrder: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  totalPrice,
  onCreateOrder,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={2}
      bgcolor="#f5f5f5"
      borderRadius={2}
      width="100%"
    >
      <Typography variant="h6" fontWeight="bold">
        Total: ${totalPrice.toFixed(2)} COP
      </Typography>

      <Button
        variant="contained"
        color="inherit"
        onClick={onCreateOrder}
        startIcon={<ShoppingCartCheckoutIcon />}
        fullWidth
      >
        Crear Orden
      </Button>
    </Box>
  );
};

export default OrderSummary;

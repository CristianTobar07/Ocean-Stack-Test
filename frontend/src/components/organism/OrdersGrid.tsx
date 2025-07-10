import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import bgImage from "assets/bacground.webp";
import { Order } from "interfaces/orders";
import OrderCard from "components/molecules/OrderCard";

interface Props {
  orders: Order[];
  handleShowProducts: (order: Order) => void;
}

const OrdersGrid: React.FC<Props> = ({ orders, handleShowProducts }) => (
  <Box
    sx={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      m: 0,
      p: 0,
    }}
  >
    <Grid container spacing={2} sx={{ m: 0, p: 4 }}>
      {orders.length > 0 ? (
        <>
          {orders.map((orders) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={orders.uid}>
              <OrderCard
                order={orders}
                onAdd={() => handleShowProducts(orders)}
              />
            </Grid>
          ))}
        </>
      ) : (
        <Typography variant="h6" sx={{ textAlign: "start", width: "100%" }}>
          No hay ordenes disponibles
        </Typography>
      )}
    </Grid>
  </Box>
);

export default OrdersGrid;

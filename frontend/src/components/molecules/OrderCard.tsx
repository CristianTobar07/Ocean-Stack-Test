import React from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { Order } from "interfaces/orders";

interface Props {
  order: Order;
  onAdd: (order: Order) => void;
}

const OrderCard: React.FC<Props> = ({ order, onAdd }) => (
  <Card sx={{ maxHeight: 300 }}>
    <CardContent>
      <Typography variant="h6">{order.uid}</Typography>
      <Typography variant="body2">Precio: ${order.uid}</Typography>
      <Typography variant="body2">
        Disponible: {order.products.length}
      </Typography>
      <Stack mt={2}>
        <Button
          variant="contained"
          sx={{ background: "#7c4dff" }}
          onClick={() => onAdd(order)}
        >
          Ver productos
        </Button>
      </Stack>
    </CardContent>
  </Card>
);

export default OrderCard;

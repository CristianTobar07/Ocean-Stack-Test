import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Product } from "interfaces/products";
import Sidebar from "components/organism/SideBar";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/constants";
import UserCreateProduct from "components/organism/userCreateProducts";
import OrdersGrid from "components/organism/OrdersGrid";
import { Order } from "interfaces/orders";
import ProductGrid from "components/organism/ProductsGrid";

interface Props {
  products?: Product[];
  orders?: Order[];
  onAddDelete: (product: Product) => void;
  handleAddOrder?: () => void;
}

const drawerWidth = 300;

const DashboardWaiterLayout: React.FC<Props> = ({ products, orders }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const categories = ["Productos", "Ordenes"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCategorySelect = (category: string) => {
    switch (category) {
      case "Productos":
        navigate(ROUTES.WAITER_PRODUCTS_PAGE);
        return;
      case "Ordenes":
        navigate(ROUTES.WAITER_ORDERS_PAGE);
        return;
    }
  };

  const drawer = (
    <Sidebar
      categories={categories}
      onCategorySelect={handleCategorySelect}
      textOut="Cerrar Sesión"
    />
  );

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Restaurante
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            open
            sx={{
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: isMobile ? 8 : 0,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <UserCreateProduct
          userName="Cristian Tobar"
          onCreateProduct={() => {}}
        />
        {products && (
          <ProductGrid products={products} categorie={1} disableAdd={true} />
        )}
        {orders && <OrdersGrid orders={orders} handleShowProducts={() => {}} />}
      </Box>
    </Box>
  );
};

export default DashboardWaiterLayout;

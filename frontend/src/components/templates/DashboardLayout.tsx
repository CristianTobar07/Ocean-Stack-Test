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
import ProductGrid from "components/organism/ProductsGrid";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "routes/constants";
import { useAppSelector } from "store/hooks";
import { RootState } from "store/store";
import { categoriesClients } from "common/constants";

interface Props {
  products: Product[];
  onAddDelete: (product: Product) => void;
  handleAddOrder?: () => void;
}

const drawerWidth = 300;

const DashboardLayout: React.FC<Props> = ({
  products,
  onAddDelete,
  handleAddOrder,
}) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();

  const { totalToPay } = useAppSelector((state: RootState) => {
    return state.products;
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCategorySelect = (category: string) => {
    switch (category) {
      case "Productos":
        navigate(ROUTES.PRODUCTS_PAGE);
        return;
      case "Agregados":
        navigate(ROUTES.PRODUCTS_ADDED_PAGE);
        return;
    }
  };

  const drawer = (
    <Sidebar
      categories={categoriesClients}
      onCategorySelect={handleCategorySelect}
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
        <ProductGrid
          products={products}
          handleAddDelete={onAddDelete}
          categorie={location.pathname === ROUTES.PRODUCTS_ADDED_PAGE ? 2 : 1}
          totalToPay={totalToPay}
          handleCreateBuy={handleAddOrder}
        />
      </Box>
    </Box>
  );
};

export default DashboardLayout;

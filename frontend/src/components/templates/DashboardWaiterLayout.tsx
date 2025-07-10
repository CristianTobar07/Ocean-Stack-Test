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
import { Product, ProductFormType } from "interfaces/products";
import Sidebar from "components/organism/SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "routes/constants";
import UserCreateProduct from "components/organism/userCreateProducts";
import OrdersGrid from "components/organism/OrdersGrid";
import { Order } from "interfaces/orders";
import ProductGrid from "components/organism/ProductsGrid";
import { DataUser } from "interfaces/auth";
import { useAppDispatch } from "store/hooks";
import toast from "react-hot-toast";
import { createProduct, setReloadProducts } from "store/slices/products";
import { getOrderById, setIsModalProducts } from "store/slices/orders";

interface Props {
  products?: Product[];
  orders?: Order[];
  dataUser: DataUser;
}

const drawerWidth = 300;

const DashboardWaiterLayout: React.FC<Props> = ({
  products,
  orders,
  dataUser,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalProductsOfOrder, setopenModalProductsOfOrder] =
    useState(true);
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

  const handleProduct = async (product: ProductFormType) => {
    const res: any = await dispatch(createProduct(product));

    if (!res.status) {
      toast.error(res.msg);
      return;
    }
    setOpenModal(false);
    toast.success(res.msg);
    dispatch(setReloadProducts());
  };

  const handleShowProducts = async (order: Order) => {
    const res: any = await dispatch(getOrderById(order.uid));
    if (!res.status) {
      toast.error(res.msg);
      return;
    }

    dispatch(setIsModalProducts(true));
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
        {location.pathname === ROUTES.WAITER_PRODUCTS_PAGE && (
          <UserCreateProduct
            userName={dataUser.name}
            buttonName={"Crear nuevo producto"}
            handleCreateProduct={handleProduct}
            setModal={setOpenModal}
            openModal={openModal}
          />
        )}

        {products && (
          <ProductGrid products={products} categorie={1} disableAdd={true} />
        )}
        {orders && (
          <OrdersGrid orders={orders} handleShowProducts={handleShowProducts} />
        )}
      </Box>
    </Box>
  );
};

export default DashboardWaiterLayout;

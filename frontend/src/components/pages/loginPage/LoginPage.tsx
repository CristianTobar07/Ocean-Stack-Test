// src/components/LoginPage.tsx
import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import bgImage from "assets/bacground.webp";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/constants";
import { LoginUser } from "interfaces/auth";
import { setLoginUser } from "store/slices/auth";
import { useAppDispatch } from "store/hooks";
import toast from "react-hot-toast";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginUser) => {
    const res: any = await dispatch(setLoginUser(data));
    if (!res.status) {
      toast.error(res.msg);
      return;
    }
    toast.success("Inicio de sesión exitoso");
    navigate(ROUTES.WAITER_PRODUCTS_PAGE);
    reset();
  };

  const handleCancel = () => {
    reset();
    navigate(ROUTES.LANDING_PAGE);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <Typography variant="h5" mb={3} align="center" fontWeight={600}>
            Iniciar Sesión
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              fullWidth
              label="Correo electrónico"
              variant="outlined"
              margin="normal"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <Box mt={3} display="flex" justifyContent="space-between">
              <Button variant="outlined" color="error" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button variant="contained" color="inherit" type="submit">
                Iniciar sesión
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;

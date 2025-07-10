import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import BackgroundLanding from "assets/bacground.webp";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/constants";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundLanding})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          padding: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" color="textPrimary" gutterBottom>
          ¡Bienvenido a Sabores C&A!
        </Typography>

        <Typography variant="h6" color="textsecondary" gutterBottom>
          Descubre el sabor auténtico que te hará volver. Vive una experiencia
          culinaria única en nuestro restaurante.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate(ROUTES.PRODUCTS_PAGE)}
          >
            Crear Orden
          </Button>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => navigate(ROUTES.LOGIN_PAGE)}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;

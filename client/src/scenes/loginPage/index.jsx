
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Form from "./Form";


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  // Define your background image URL here
  const backgroundImageUrl = "../../../assets/page.jpg";
  const soshi = "../../../public/assets/pagetop.jpg"
  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundImageUrl})`, // Set the background image URL here
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the entire viewport
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          backgroundImage: `url(${soshi})`,// Set the background image URL here
          minHeight: "56px", // Set the desired height here

        }}
      >
        <Typography fontWeight="bold" fontSize="32px" color="green">
          Sōshi
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="rgba(128, 128, 128, 0.6)"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }} color="white">
          Welcome to Sōshi, The One Piece World!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

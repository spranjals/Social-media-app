import { Box } from "@mui/material";
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost:3001";

const UserImage = ({ image, size = "60px" }) => {
  return (

    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${apiEndpoint}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;

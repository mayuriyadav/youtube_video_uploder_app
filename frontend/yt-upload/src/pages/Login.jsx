import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button } from "@mui/material";
import React from "react";
function Login() {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      
        
        <Button startIcon={<GoogleIcon/>} size="large" variant="contained" onClick={()=>{
          console.log("Logging with google");
        }}>
        Login with Google</Button>
      
    </Box>
  );
}

export default Login;

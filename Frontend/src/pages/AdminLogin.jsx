import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Avatar,
  IconButton,
  InputAdornment,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 56,
              height: 56,
              mx: "auto",
              mb: 2,
            }}
          >
            <LockOutlinedIcon fontSize="large" />
          </Avatar>

          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Admin Login
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Please enter your credentials to continue
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Password"
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {error && (
            <Typography color="error" sx={{ mt: 1, fontSize: "0.9rem" }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1rem",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 3, color: "text.secondary" }}
          >
            © {new Date().getFullYear()} Admin Panel
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

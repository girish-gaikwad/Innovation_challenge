import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate
import FacebookIcon from '../assets/facebook.png';
import GoogleIcon from '../assets/google.png';
import LinkedInIcon from '../assets/linkedin.png';
import LoginBg from '../assets/login.jpg';

interface LoginFormData {
  email: string;
  password: string;
  role: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate(); // <-- Initialize useNavigate
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    role: 'Customer',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (e: SelectChangeEvent) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add any additional logic here (e.g., form validation)
    console.log('Form submitted:', formData);
    navigate('/course'); // <-- Navigate to the course page after login
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        bgcolor: 'grey.50',
        position: 'relative',
        p: 2,
      }}
    >
      {/* Sign Up Button */}
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          borderRadius: 28,
          px: 4,
        }}
      >
        Sign Up
      </Button>

      <Container maxWidth="lg" sx={{ my: 'auto' }}>
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Section */}
          <Box sx={{ textAlign: 'center', maxWidth: 'sm' }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
              Welcome!
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Login to your account
            </Typography>
            <Paper
              elevation={0}
              sx={{
                mt: 4,
                overflow: 'hidden',
                borderRadius: 8,
                maxWidth: 400,
                mx: 'auto',
              }}
            >
              <Box
                component="img"
                src={LoginBg}
                alt="Login illustration"
                sx={{ width: '100%', height: 'auto' }}
              />
            </Paper>
          </Box>

          {/* Right Section */}
          <Card
            elevation={2}
            sx={{
              maxWidth: 450,
              width: '100%',
              borderRadius: 8,
              bgcolor: 'background.paper',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                  />

                  <FormControl fullWidth>
                    <InputLabel>Role</InputLabel>
                    <Select
                      value={formData.role}
                      label="Role"
                      onChange={handleRoleChange}
                    >
                      <MenuItem value="Customer">Customer</MenuItem>
                      <MenuItem value="Artisian">Artisian</MenuItem>
                    </Select>
                  </FormControl>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      variant="text"
                      color="primary"
                      sx={{ textTransform: 'none' }}
                    >
                      Forgot Password?
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ borderRadius: 28, px: 4 }}
                    >
                      Login
                    </Button>
                  </Box>

                  <Box sx={{ my: 2 }}>
                    <Divider>
                      <Typography color="text.secondary" variant="body2">
                        Login with
                      </Typography>
                    </Divider>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    sx={{ mt: 2 }}
                  >
                    {[{ icon: FacebookIcon }, { icon: GoogleIcon }, { icon: LinkedInIcon }].map(
                      (social, index) => (
                        <IconButton
                          key={index}
                          sx={{
                            border: 1,
                            borderColor: 'divider',
                            '&:hover': {
                              bgcolor: 'action.hover',
                            },
                          }}
                        >
                          <img src={social.icon} style={{ width: '30px' }} />
                        </IconButton>
                      )
                    )}
                  </Stack>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default LoginPage;

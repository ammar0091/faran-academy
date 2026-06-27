import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { sendContactMessage } from "../../../utils/api";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",

    "& fieldset": {
      borderColor: "#D8DDE5",
    },

    "&:hover fieldset": {
      borderColor: "#D8DDE5",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#005BAA",
      borderWidth: 1,
    },
  },
};

const inputSx = {
  ...fieldSx,
  "& .MuiOutlinedInput-root": {
    ...fieldSx["& .MuiOutlinedInput-root"],
    height: 52,
  },
};

const labelSx = {
  mb: 1,
  fontSize: 14,
  fontWeight: 500,
  color: "#374151",
};

const alertSx = {
  py: 1.5,
  px: 2,
  mb: 3,
  borderRadius: 2,
  fontWeight: 600,
  textAlign: "center",
};

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactFormSection() {
  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setForm((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await sendContactMessage(form);

      setSuccess(true);
      setForm(initialForm);

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to send message. Please try again."
      );
    }
  };

  return (
    <Box flex={1}>
      <Box
        sx={{
          p: { xs: 3, md: 6 },
          background: "#FAFAFA",
          border: "1px solid #E5E7EB",
          borderRadius: "12px",
        }}
      >
        {/* heading */}
        <Typography
          sx={{
            color: "#004A8F",
            fontWeight: 700,
            lineHeight: 1.1,
            mb: 5,
            fontSize: {
              xs: "34px",
              md: "48px",
            },
          }}
        >
          Send Us a Message
        </Typography>

        {/* success */}
        {success && (
          <Box
            sx={{
              ...alertSx,
              bgcolor: "#e8ffe8",
              color: "#1b7c1b",
              border: "1px solid #c4eac4",
            }}
          >
            Your message has been sent successfully!
          </Box>
        )}

        {/* error */}
        {error && (
          <Box
            sx={{
              ...alertSx,
              bgcolor: "#ffe8e8",
              color: "#cc2f2f",
              border: "1px solid #f2c0c0",
            }}
          >
            {error}
          </Box>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          {/* name + email */}
          <Box
            sx={{
              display: "grid",
              gap: 3,
              mb: 4,
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
            }}
          >
            {[
              {
                label: "Full Name",
                name: "name",
                placeholder: "John Doe",
                required: true,
              },
              {
                label: "Email Address",
                name: "email",
                type: "email",
                placeholder: "john@example.com",
                required: true,
              },
            ].map((field) => (
              <Box key={field.name}>
                <Typography sx={labelSx}>
                  {field.label}
                </Typography>

                <TextField
                  fullWidth
                  {...field}
                  value={form[field.name]}
                  onChange={handleChange}
                  sx={inputSx}
                />
              </Box>
            ))}
          </Box>

          {/* phone */}
          <Box sx={{ mb: 4 }}>
            <Typography sx={labelSx}>
              Phone Number
            </Typography>

            <TextField
              fullWidth
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              sx={inputSx}
            />
          </Box>

          {/* message */}
          <Box sx={{ mb: 4 }}>
            <Typography sx={labelSx}>
              Message
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={6}
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              sx={fieldSx}
            />
          </Box>

          {/* submit */}
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendOutlinedIcon />}
            sx={{
              width: 210,
              height: 54,
              background: "#004A8F",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: 16,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                background: "#003E77",
                boxShadow: "none",
              },
            }}
          >
            Submit Request
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
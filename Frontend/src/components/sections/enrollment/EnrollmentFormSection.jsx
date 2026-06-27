import React from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { classOptions } from "../../../constants/enrollment/classOptions";
import { enrollmentUi } from "../../../constants/enrollment/enrollmentData";

// ======================
// Student Fields
// ======================
const studentFields = [
  {
    name: "name",
    label: "Full Legal Name",
    required: true,
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    required: true,
  },
];

// ======================
// Guardian Fields
// ======================
const guardianFields = [
  {
    name: "parent",
    label: "Parent / Guardian Name",
    required: true,
  },
  {
    name: "session",
    label: "Academic Session",
    placeholder: "year",
    required: true,
  },
];

// ======================
// Styles
// ======================
const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 3,
    backgroundColor: "#6894d4",

    "& fieldset": {
      borderColor: "#6088bc",
    },

    "&:hover fieldset": {
      borderColor: "#0a66c2",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#0a66c2",
      borderWidth: 2,
    },
  },
};

const sectionTitleStyle = {
  fontWeight: 800,
  color: enrollmentUi.primary,
  mb: 3,
  pb: 1,
  borderBottom: "2px solid #edf4ff",
};

function EnrollmentFormSection({
  form,
  success,
  error,
  submitting,
  onChange,
  onSubmit,
}) {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        px: 2,
        py: 5,
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 6,
          p: { xs: 3, md: 5 },
          border: "1px solid #e8eef5",
          boxShadow: "0 12px 35px rgba(0,0,0,0.06)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            mb: 5,
            pb: 3,
            borderBottom: "1px solid #edf1f5",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: enrollmentUi.primary,
              fontWeight: 800,
              mb: 1,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            Student Admission Form
          </Typography>

          <Typography color="text.secondary">
            Complete the student information below to begin the admission
            process.
          </Typography>
        </Box>

        {/* Success */}
        {success && (
          <Alert
            severity="success"
            icon={<CheckCircleOutlineIcon />}
            sx={{ mb: 3 }}
          >
            Your application has been submitted successfully.
          </Alert>
        )}

        {/* Error */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={onSubmit}>
          {/* Student Details */}
          <Typography variant="h6" sx={sectionTitleStyle}>
            Student Details
          </Typography>

          <Grid container spacing={3}>
            {studentFields.map((field) => (
              <Grid item xs={12} md={6} key={field.name}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={form[field.name] || ""}
                  onChange={onChange}
                  required={field.required}
                  type={field.type || "text"}
                  sx={inputStyle}
                  InputLabelProps={
                    field.type === "date"
                      ? { shrink: true }
                      : undefined
                  }
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Admission to Class"
                name="class"
                value={form.class || ""}
                onChange={onChange}
                required
                sx={inputStyle}
              >
                {classOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Divider
            sx={{
              my: 5,
              borderColor: "#edf1f5",
            }}
          />

          {/* Parent Details */}
          <Typography variant="h6" sx={sectionTitleStyle}>
            Parent / Guardian Details
          </Typography>

          <Grid container spacing={3}>
            {guardianFields.map((field) => (
              <Grid item xs={12} md={6} key={field.name}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={form[field.name] || ""}
                  onChange={onChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  sx={inputStyle}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Home Address"
                name="address"
                value={form.address || ""}
                onChange={onChange}
                sx={inputStyle}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="flex-end"
            sx={{ mt: 5 }}
          >
            <Button
              type="submit"
              disabled={submitting}
              variant="contained"
              sx={{
                borderRadius: 3,
                px: 5,
                py: 1.6,
                minWidth: 220,
                textTransform: "none",
                fontWeight: 700,
                fontSize: 15,

                background:
                  "linear-gradient(135deg,#004379 0%,#0a66c2 100%)",

                boxShadow:
                  "0 8px 20px rgba(10,102,194,0.25)",

                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0 12px 25px rgba(10,102,194,0.35)",
                },
              }}
            >
              {submitting
                ? "Submitting..."
                : "Submit Application"}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default EnrollmentFormSection;
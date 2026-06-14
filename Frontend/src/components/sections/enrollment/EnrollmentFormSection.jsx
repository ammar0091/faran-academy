import React, { useRef, useState } from "react";
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
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

import { classOptions } from "../../../constants/enrollment/classOptions";
import { documentCards, enrollmentUi } from "../../../constants/enrollment/enrollmentData";

const studentFields = [
  { name: "name", label: "Full Legal Name", icon: <PersonIcon />, required: true },
  { name: "dob", label: "Date of Birth", icon: <CalendarMonthIcon />, type: "date", required: true },
  { name: "email", label: "Email Address", icon: <EmailIcon />, type: "email" },
  { name: "phone", label: "Phone Number", icon: <ContactPhoneIcon />, required: true },
];

const guardianFields = [
  { name: "parent", label: "Parent / Guardian Name", icon: <HomeIcon />, required: true },
  { name: "session", label: "Session / Year", placeholder: "2024-2025", required: true },
];

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
        bgcolor: "#fff",
        border: `1px solid ${enrollmentUi.outline}55`,
        borderRadius: 3,
        p: { xs: 2.5, md: 4 },
        maxWidth: 600,
        boxShadow: "0 8px 24px rgba(0, 67, 121, 0.06)",
      }}
    >
      <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={2} sx={{ mb: 4 }}>
        <Typography component="h2" sx={{ color: enrollmentUi.primary, fontSize: 28, fontWeight: 900 }}>
          Student Information
        </Typography>
        <Box
          sx={{
            alignSelf: { xs: "flex-start", sm: "center" },
            bgcolor: "rgba(254,179,22,0.22)",
            color: enrollmentUi.goldText,
            px: 2,
            py: 0.75,
            borderRadius: 999,
            fontWeight: 900,
            fontSize: 13,
          }}
        >
          Academic Step
        </Box>
      </Stack>

      {success && (
        <Alert icon={<CheckCircleOutlineIcon />} severity="success" sx={{ mb: 2 }}>
          Your application has been submitted successfully!
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box component="form" onSubmit={onSubmit} noValidate autoComplete="off">
        <Grid container spacing={2}>
          {studentFields.map((field) => (
            <Grid item xs={12} md={6} key={field.name}>
              <EnrollmentTextField field={field} form={form} onChange={onChange} />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label="Admission to Class"
              name="class"
              value={form.class}
              onChange={onChange}
              required
              InputProps={{ startAdornment: <FieldIcon icon={<BadgeIcon />} /> }}
            >
              {classOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {guardianFields.map((field) => (
            <Grid item xs={12} md={6} key={field.name}>
              <EnrollmentTextField field={field} form={form} onChange={onChange} />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Home Address"
              name="address"
              value={form.address}
              onChange={onChange}
              multiline
              rows={3}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography component="h3" sx={{ color: enrollmentUi.primary, fontSize: 26, fontWeight: 900, mb: 3 }}>
              Document Upload
            </Typography>
            <Grid container spacing={2}>
              {documentCards.map((card) => (
                <Grid item xs={12} md={6} key={card.key}>
                  <DocumentDropzone card={card} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Stack direction={{ xs: "column", sm: "row" }} justifyContent="flex-end" gap={2} sx={{ pt: 3 }}>
              <Button
                type="button"
                variant="outlined"
                sx={{
                  borderColor: enrollmentUi.primary,
                  color: enrollmentUi.primary,
                  px: 5,
                  py: 1.4,
                  fontWeight: 900,
                  borderRadius: 2,
                }}
              >
                Save for Later
              </Button>
              <Button
                type="submit"
                disabled={submitting}
                sx={{
                  bgcolor: enrollmentUi.gold,
                  color: enrollmentUi.goldText,
                  px: 5,
                  py: 1.4,
                  fontWeight: 900,
                  borderRadius: 2,
                  boxShadow: "0 10px 22px rgba(254,179,22,0.28)",
                  "&:hover": { bgcolor: "#ffba3b", transform: "translateY(-2px)" },
                }}
              >
                {submitting ? "Submitting..." : "Continue to Documents"}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function EnrollmentTextField({ field, form, onChange }) {
  return (
    <TextField
      fullWidth
      type={field.type || "text"}
      label={field.label}
      name={field.name}
      value={form[field.name]}
      onChange={onChange}
      required={field.required}
      placeholder={field.placeholder}
      InputLabelProps={field.type === "date" ? { shrink: true } : undefined}
      InputProps={field.icon ? { startAdornment: <FieldIcon icon={field.icon} /> } : undefined}
    />
  );
}

function FieldIcon({ icon }) {
  return <Box sx={{ mr: 1, color: enrollmentUi.primary, display: "flex" }}>{icon}</Box>;
}

function DocumentDropzone({ card }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const Icon = card.icon === "id" ? AssignmentIndIcon : CloudUploadIcon;

  return (
    <Box
      onClick={() => inputRef.current?.click()}
      sx={{
        border: `2px dashed ${enrollmentUi.outline}`,
        borderRadius: 3,
        p: 3,
        minHeight: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        cursor: "pointer",
        textAlign: "center",
        transition: "180ms ease",
        "&:hover": {
          borderColor: enrollmentUi.primary,
          bgcolor: "rgba(0,67,121,0.04)",
        },
      }}
    >
      {/* File names are kept client-side because the backend currently accepts form details only. */}
      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
      />
      <Icon sx={{ color: enrollmentUi.primary, fontSize: 38 }} />
      <Typography sx={{ fontWeight: 900 }}>{card.title}</Typography>
      <Typography sx={{ color: enrollmentUi.muted, fontSize: 14 }}>
        {fileName || card.hint}
      </Typography>
    </Box>
  );
}

export default React.memo(EnrollmentFormSection);

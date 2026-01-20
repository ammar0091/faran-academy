import React from "react";
import {
  Box,
  Typography,
  Alert,
  Stack,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SchoolIcon from "@mui/icons-material/School";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ChecklistIcon from "@mui/icons-material/Checklist";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function Admissions() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 6, md: 10 },
        alignItems: "flex-start",
      }}
    >
      {/* LEFT SIDE — TEXT INTRO LIKE ENROLL PAGE */}
      <Box flex={1} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2} mb={2}>
          Admissions 2025–26
        </Typography>

        <Typography variant="h4" fontWeight={700} color="text.primary" mb={3}>
          Your Child’s Journey Begins Here
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }} mb={2}>
          At Faran Academy, we believe every child deserves an environment that encourages curiosity,
          builds confidence, and strengthens character. Our admission process is structured to be 
          simple, transparent, and parent-friendly.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }} mb={4}>
          Take a moment to review the complete admission details below before applying.  
          We look forward to welcoming you into the Faran Academy family.
        </Typography>

        <Stack spacing={2}>
          <Alert icon={<InfoOutlinedIcon />} severity="info" sx={{ bgcolor: "#e8f4ff", color: "#165099", fontWeight: 500 }}>
            Admissions for the new academic year are now open.
          </Alert>

          <Alert icon={<StarIcon />} severity="success" sx={{ bgcolor: "#eafbea", color: "#1a7f3c", fontWeight: 500 }}>
            Early applications receive priority during seat allotment.
          </Alert>
        </Stack>
      </Box>

      {/* RIGHT SIDE — MAIN ADMISSION CONTENT */}
      <Box flex={1} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>

        {/* HOW TO APPLY */}
        <Paper sx={{ p: 3, borderRadius: 3 }} elevation={2}>
          <Typography variant="h6" fontWeight={700} color="primary" mb={1}>
            Admission Procedure
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <List>
            <ListItem>
              <ListItemIcon><ChecklistIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Fill out the Admission Application (Online / Offline)." />
            </ListItem>

            <ListItem>
              <ListItemIcon><SchoolIcon color="secondary" /></ListItemIcon>
              <ListItemText primary="Submit essential documents: Birth Certificate, Aadhar, Photos, Previous Report Card." />
            </ListItem>

            <ListItem>
              <ListItemIcon><EventNoteIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Attend the interaction/assessment based on the class applied." />
            </ListItem>

            <ListItem>
              <ListItemIcon><CheckCircleOutlineIcon color="success" /></ListItemIcon>
              <ListItemText primary="Complete fee payment to confirm the seat." />
            </ListItem>
          </List>
        </Paper>

        {/* IMPORTANT DATES */}
        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#f6f9ff" }} elevation={1}>
          <Typography variant="h6" fontWeight={700} color="primary" mb={1}>
            Important Dates
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography mb={1}>• Admission Starts: <b>1 March 2025</b></Typography>
          <Typography mb={1}>• Entrance / Interaction: <b>Every Saturday (March–April)</b></Typography>
          <Typography mb={1}>• Orientation Day: <b>8 April 2025</b></Typography>
          <Typography>• Classes Begin: <b>10 April 2025</b></Typography>
        </Paper>

        {/* FAQ */}
        <Paper sx={{ p: 3, borderRadius: 3 }} elevation={1}>
          <Typography variant="h6" fontWeight={700} color="primary" mb={1}>
            Frequently Asked Questions
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <List>

            <ListItem>
              <ListItemIcon><QuestionAnswerIcon color="primary" /></ListItemIcon>
              <ListItemText
                primary="Is there an entrance test?"
                secondary="Nursery & KG require a parent-child interaction. Classes I and above have a short assessment."
              />
            </ListItem>

            <ListItem>
              <ListItemIcon><QuestionAnswerIcon color="primary" /></ListItemIcon>
              <ListItemText
                primary="Do I need to bring original documents?"
                secondary="Yes. Verification is done during document submission."
              />
            </ListItem>

            <ListItem>
              <ListItemIcon><QuestionAnswerIcon color="primary" /></ListItemIcon>
              <ListItemText
                primary="Is transportation available?"
                secondary="Transportation is available across nearby areas. Seats are limited."
              />
            </ListItem>

          </List>
        </Paper>

      </Box>
    </Box>
  );
}

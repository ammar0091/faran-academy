import React from "react";
import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ChecklistIcon from "@mui/icons-material/Checklist";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export default function Admissions() {
  return (
    <Box bgcolor="#f6f9fe" minHeight="100vh">
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 7 } }}>
        {/* Header */}
        <Typography variant="h3" fontWeight={900} color="primary.main" mb={2} textAlign="center">
          Admissions
        </Typography>
        <Typography color="text.secondary" align="center" mb={5}>
          Join the Faran Academy family! We welcome new students each academic year, from Nursery to Class X. Our admission process is transparent, student-focused, and designed for your convenience.
        </Typography>

        {/* Step-by-step Admission Procedure */}
        <Paper elevation={3} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 4, mb: 5 }}>
          <Typography variant="h5" fontWeight={700} color="primary.main" mb={2}>
            How to Apply
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><ChecklistIcon color="info" /></ListItemIcon>
              <ListItemText primary="Fill out the Admission Application Form (available for download below or at the school office)." />
            </ListItem>
            <ListItem>
              <ListItemIcon><SchoolIcon color="secondary" /></ListItemIcon>
              <ListItemText primary="Submit required documents: birth certificate, last report card, passport-size photos, aadhar (if any)." />
            </ListItem>
            <ListItem>
              <ListItemIcon><EventNoteIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Attend an interaction/test (as per class applied)." />
            </ListItem>
            <ListItem>
              <ListItemIcon><DownloadIcon color="success" /></ListItemIcon>
              <ListItemText primary="Pay the admission fee to confirm the seat." />
            </ListItem>
          </List>
          <Button
            startIcon={<DownloadIcon />}
            variant="contained"
            color="primary"
            href="/assets/Faran_Academy_Admission_Form.pdf"
             target="_blank"
            sx={{ mt: 2, fontWeight: 700, borderRadius: 2 }}
            download
          >
            Download Application Form
          </Button>
        </Paper>

        {/* Important Dates and Fee Structure */}
        <Grid container spacing={4} mb={5}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, bgcolor: "#eefaee", borderRadius: 3, height: "100%" }}>
              <Typography variant="h6" fontWeight={700} color="success.main" mb={1}>
                Important Dates <EventNoteIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
              </Typography>
              <ul>
                <li>
                  <Typography>Admission Open: <b>1st March 2025</b></Typography>
                </li>
                <li>
                  <Typography>Entrance Assessment: <b>Every Saturday</b> (March–April)</Typography>
                </li>
                <li>
                  <Typography>Session Starts: <b>10th April 2025</b></Typography>
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 3, bgcolor: "#fdeeea", borderRadius: 3, height: "100%" }}>
              <Typography variant="h6" fontWeight={700} color="error.dark" mb={1}>
                Fee Structure <InfoIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
              </Typography>
              <ul>
                <li>
                  <Typography>Admission Fee: <b>₹0000</b></Typography>
                </li>
                <li>
                  <Typography>Annual Fee: <b>₹000 – ₹000</b> (as per class)</Typography>
                </li>
                <li>
                  <Typography>Monthly Tuition: <b>₹00 – ₹00</b></Typography>
                </li>
              </ul>
            </Paper>
          </Grid>
        </Grid>

        {/* FAQs */}
        <Paper elevation={1} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3, mb: 4 }}>
          <Typography variant="h6" fontWeight={700} mb={2} color="primary">
            Frequently Asked Questions <QuestionAnswerIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography fontWeight={500}>Q: Is there an entrance test for all grades?</Typography>
          <Typography color="text.secondary" mb={1}>A: There is a short assessment (and parent interaction) for Grades I and up.</Typography>
          <Typography fontWeight={500}>Q: What documents do I need?</Typography>
          <Typography color="text.secondary" mb={1}>A: A birth certificate, previous report card, 2 passport photographs, and adhar card (if any).</Typography>
          <Typography fontWeight={500}>Q: How does Faran Academy ensure a smooth transition for new students?</Typography>
          <Typography color="text.secondary">
            A: There is a buddy system and personal staff support for all new joiners.
          </Typography>
        </Paper>

        {/* Admissions Contact */}
        <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, bgcolor: "#e8f4ff", borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={700} color="primary.main" mb={1}>
            Need Help or Have Questions?
          </Typography>
          <Typography mb={0.5}>
            <ContactMailIcon sx={{ color: "#005baa", verticalAlign: "middle", mr: 1 }} />
            <b>Email:</b> admissions@faranacademy.edu
          </Typography>
          <Typography mb={0.5}>
            <SchoolIcon sx={{ color: "#005baa", verticalAlign: "middle", mr: 1 }} />
            <b>Phone:</b> +91-8860917726, +91-7352391764
          </Typography>
          <Typography>
            <InfoIcon sx={{ color: "#005baa", verticalAlign: "middle", mr: 1 }} />
            <b>Visit Us:</b> Khankhanapur Panchu, Hisua - 805103, Bihar, India
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChecklistIcon from "@mui/icons-material/Checklist";
import EventNoteIcon from "@mui/icons-material/EventNote";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

import Hero from "../../components/common/Hero";
import {
  admissionFaqs,
  admissionStats,
  admissionSteps,
  documentRequirements,
  feeStructure,
  importantDates,
} from "../../constants/admissions/admissionsData";

const PRIMARY = "#004379";
const PRIMARY_CONTAINER = "#005ba1";
const SECONDARY = "#feb316";
const ON_SECONDARY = "#6a4800";
const SURFACE = "#f9f9fc";
const SURFACE_CONTAINER = "#eeeef0";
const TEXT = "#1a1c1e";
const TEXT_MUTED = "#414751";
const OUTLINE = "#c1c7d2";

const admissionStepIcons = {
  checklist: ChecklistIcon,
  school: SchoolIcon,
  event: EventNoteIcon,
  check: AssignmentTurnedInIcon,
};

function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 5, md: 8 } }}>
      {eyebrow && (
        <Typography
          sx={{
            color: ON_SECONDARY,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 1.4,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        component="h2"
        sx={{
          color: PRIMARY,
          fontFamily: "'Manrope', sans-serif",
          fontSize: { xs: 32, md: 40 },
          fontWeight: 800,
          lineHeight: { xs: "40px", md: "48px" },
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          sx={{
            color: TEXT_MUTED,
            fontSize: { xs: 16, md: 18 },
            lineHeight: { xs: "24px", md: "28px" },
            maxWidth: 680,
            mx: align === "center" ? "auto" : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

function CardPaper({ children, sx }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 2,
        bgcolor: "#fff",
        border: `1px solid ${alpha(PRIMARY_CONTAINER, 0.12)}`,
        boxShadow: `0 4px 20px ${alpha(PRIMARY_CONTAINER, 0.05)}`,
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 16px 36px ${alpha(PRIMARY_CONTAINER, 0.1)}`,
        },
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
}

export default function Admissions() {
  return (
    <Box sx={{ bgcolor: SURFACE, color: TEXT, fontFamily: "'Manrope', sans-serif" }}>
      <Hero
        title="Admissions"
        badge="Admissions 2025-26"
        highlight="Begin Your Journey of Excellence"
        subtitle="Admissions are open from Nursery to Class 6 with a simple process and clear class-wise fee structure."
        primaryBtn="Start Application"
        primaryLink="/enroll"
        secondaryBtn="View Fee Structure"
        secondaryLink="/admissions#FeeStructure"
      />

      <Box component="section" sx={{ bgcolor: PRIMARY_CONTAINER, py: { xs: 5, md: 6 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 8 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: { xs: 3, md: 4 },
            }}
          >
            {admissionStats.map((stat) => (
              <Box key={stat.label} sx={{ textAlign: "center" }}>
                <Typography sx={{ color: SECONDARY, fontSize: { xs: 32, md: 40 }, fontWeight: 800 }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ color: alpha("#fff", 0.82), fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" id="guide" sx={{ py: { xs: 9, md: 15 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 8 } }}>
          <SectionHeading
            eyebrow="Admission Guide"
            title="Step-by-Step Admission Process"
            subtitle="Every step is designed to be simple for parents and comfortable for children."
          />

          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: 2,
                bgcolor: OUTLINE,
                transform: "translateX(-50%)",
              }}
            />

            <Stack spacing={{ xs: 3, md: 7 }}>
              {admissionSteps.map(({ icon, text }, index) => {
                const Icon = admissionStepIcons[icon];
                const reverse = index % 2 === 1;
                return (
                  <Box
                    key={text}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 64px 1fr" },
                      alignItems: "center",
                      gap: { xs: 2, md: 4 },
                    }}
                  >
                    <Box sx={{ order: { xs: 2, md: reverse ? 3 : 1 } }}>
                      <CardPaper sx={{ textAlign: { xs: "left", md: reverse ? "left" : "right" } }}>
                        <Typography sx={{ color: PRIMARY, fontSize: 24, fontWeight: 800, mb: 1 }}>
                          {String(index + 1).padStart(2, "0")}.{" "}
                          {["Application", "Documents", "Interaction", "Confirmation"][index]}
                        </Typography>
                        <Typography sx={{ color: TEXT_MUTED, lineHeight: "26px" }}>{text}</Typography>
                      </CardPaper>
                    </Box>

                    <Box
                      sx={{
                        order: { xs: 1, md: 2 },
                        width: 56,
                        height: 56,
                        mx: { xs: 0, md: "auto" },
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: SECONDARY,
                        color: ON_SECONDARY,
                        border: `5px solid ${SURFACE}`,
                        zIndex: 1,
                      }}
                    >
                      <Icon />
                    </Box>

                    <Box sx={{ display: { xs: "none", md: "block" }, order: reverse ? 1 : 3 }} />
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: SURFACE_CONTAINER, py: { xs: 9, md: 15 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 8 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
              gap: { xs: 5, md: 8 },
              alignItems: "center",
            }}
          >
            <Box>
              <SectionHeading
                align="left"
                eyebrow="Requirements"
                title="Documents Needed"
                subtitle="Keep these documents ready before submitting the application."
              />
              <Stack spacing={2}>
                {documentRequirements.map((item) => (
                  <Stack key={item.title} direction="row" spacing={2} alignItems="flex-start">
                    <CheckCircleIcon sx={{ color: SECONDARY, mt: 0.3 }} />
                    <Box>
                      <Typography sx={{ color: TEXT, fontWeight: 800 }}>{item.title}</Typography>
                      <Typography sx={{ color: TEXT_MUTED, lineHeight: "24px" }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
              }}
            >
              {["Nursery", "KG", "Class 1-3", "Class 4-6"].map((label, index) => (
                <CardPaper
                  key={label}
                  sx={{
                    minHeight: { xs: 150, md: index % 2 === 0 ? 190 : 230 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    mt: { md: index === 0 || index === 3 ? 3 : 0 },
                  }}
                >
                  <SchoolIcon sx={{ color: PRIMARY, fontSize: 34 }} />
                  <Box>
                    <Typography sx={{ color: PRIMARY, fontSize: 22, fontWeight: 800 }}>{label}</Typography>
                    <Typography sx={{ color: TEXT_MUTED }}>Admissions open</Typography>
                  </Box>
                </CardPaper>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="FeeStructure" sx={{ py: { xs: 9, md: 15 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2.5, md: 8 } }}>
          <SectionHeading
            eyebrow="Transparent Fees"
            title="Fee Structure"
            subtitle="Class-wise fee details for the current admission cycle. The school is open up to Class 6 only."
          />

          <CardPaper sx={{ p: 0, overflow: "hidden" }}>
            <TableContainer>
              <Table aria-label="Class-wise fee structure">
                <TableHead>
                  <TableRow sx={{ bgcolor: PRIMARY }}>
                    {["Class", "Admission Fee", "Monthly Fee", "Annual Charges"].map((heading) => (
                      <TableCell
                        key={heading}
                        align={heading === "Class" ? "left" : "right"}
                        sx={{
                          color: "#fff",
                          fontWeight: 800,
                          fontFamily: "'Hanken Grotesk', sans-serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {heading}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feeStructure.map((row, index) => (
                    <TableRow
                      key={row.className}
                      sx={{ bgcolor: index % 2 === 0 ? "#fff" : alpha(PRIMARY_CONTAINER, 0.04) }}
                    >
                      <TableCell sx={{ color: PRIMARY, fontWeight: 800 }}>{row.className}</TableCell>
                      <TableCell align="right">{row.admissionFee}</TableCell>
                      <TableCell align="right">{row.monthlyFee}</TableCell>
                      <TableCell align="right">{row.annualCharges}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardPaper>

          <Typography sx={{ color: TEXT_MUTED, mt: 2, textAlign: "center", lineHeight: "24px" }}>
            Transport and optional services are charged separately as per route and availability.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "#e2e2e5", py: { xs: 9, md: 12 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 2.5, md: 4 }, textAlign: "center" }}>
          <Typography sx={{ color: PRIMARY, fontSize: { xs: 32, md: 40 }, fontWeight: 800, mb: 2 }}>
            Ready to Apply?
          </Typography>
          <Typography sx={{ color: TEXT_MUTED, fontSize: 18, lineHeight: "28px", mb: 4 }}>
            Applications are open for Nursery to Class 6. Seats are allotted after document review,
            interaction, and fee confirmation.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" spacing={2}>
            <Button
              component={Link}
              to="/enroll"
              variant="contained"
              sx={{
                bgcolor: SECONDARY,
                color: ON_SECONDARY,
                px: 5,
                py: 1.5,
                borderRadius: 999,
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { bgcolor: SECONDARY, filter: "brightness(1.04)" },
              }}
            >
              Apply Online Today
            </Button>
            <Button
              component="a"
              href="#guide"
              startIcon={<CalendarMonthIcon />}
              sx={{
                bgcolor: TEXT,
                color: "#fff",
                px: 5,
                py: 1.5,
                borderRadius: 999,
                fontWeight: 800,
                textTransform: "none",
                "&:hover": { bgcolor: alpha(TEXT, 0.9) },
              }}
            >
              View Process
            </Button>
          </Stack>

          <Divider sx={{ my: 5 }} />

          <List sx={{ textAlign: "left", maxWidth: 720, mx: "auto" }}>
            {importantDates.map((date) => (
              <ListItem key={date.label} disableGutters>
                <ListItemIcon>
                  <EventNoteIcon sx={{ color: PRIMARY }} />
                </ListItemIcon>
                <ListItemText primary={date.label} secondary={date.value} />
              </ListItem>
            ))}
            {admissionFaqs.slice(0, 2).map((faq) => (
              <ListItem key={faq.question} disableGutters>
                <ListItemIcon>
                  <QuestionAnswerIcon sx={{ color: PRIMARY }} />
                </ListItemIcon>
                <ListItemText primary={faq.question} secondary={faq.answer} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </Box>
  );
}

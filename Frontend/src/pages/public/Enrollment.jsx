import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import SEO from "../../components/common/SEO";
import EnrollmentFormSection from "../../components/sections/enrollment/EnrollmentFormSection";
import EnrollmentHero from "../../components/sections/enrollment/EnrollmentHero";
import EnrollmentProgress from "../../components/sections/enrollment/EnrollmentProgress";
import EnrollmentSidebar from "../../components/sections/enrollment/EnrollmentSidebar";
import EnrollmentWhySection from "../../components/sections/enrollment/EnrollmentWhySection";
import { pageSeo } from "../../constants/common/seo";
import {
  enrollmentUi,
  initialEnrollmentForm,
} from "../../constants/enrollment/enrollmentData";
import { submitEnrollment } from "../../utils/api";

export default function Enrollment() {
  const [form, setForm] = useState(initialEnrollmentForm);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Keep field names aligned with Backend/models/Enrollment.js and submitEnrollment().
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setSubmitting(true);

    try {
      await submitEnrollment(form);
      setForm(initialEnrollmentForm);
      setSuccess(true);
      window.setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO {...pageSeo.enroll} />
      <Box
        component="main"
        sx={{
          bgcolor: enrollmentUi.bg,
          color: enrollmentUi.text,
          fontFamily: "Manrope, Arial, sans-serif",
          pb: { xs: 8, md: 0 },
        }}
      >
        <EnrollmentHero />
        <EnrollmentProgress />

        <Container maxWidth="xl" sx={{ py: { xs: 4 , md: 6 } , px: { xs: 2.5, md: 8 }}}>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12} lg={8}>
              <EnrollmentFormSection
                form={form}
                success={success}
                error={error}
                submitting={submitting}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <EnrollmentSidebar />
            </Grid>
          </Grid>
        </Container>

        <EnrollmentWhySection />
      </Box>
    </>
  );
}

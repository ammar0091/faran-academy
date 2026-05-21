import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  Group,
  School,
  Event,
  Notifications,
  ContactMail,
} from "@mui/icons-material";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { apiClient } from "../../utils/api";
import { dashboardApis } from "../../constants/admin/dashboardData";

/* ---------- CONFIG ---------- */

const ICONS = {
  students: <Group />,
  faculty: <School />,
  events: <Event />,
  notifications: <Notifications />,
  contacts: <ContactMail />,
};

/* ---------- MAIN ---------- */

export default function AdminCommandCenter() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const responses = await Promise.all(
          Object.entries(dashboardApis).map(([key, url]) =>
            apiClient
              .get(`/${url}`, {
                signal: controller.signal,
              })
              .then((res) => [
                key,
                Array.isArray(res.data)
                  ? res.data.length
                  : res.data?.count ?? 0,
              ])
          )
        );

        setStats(Object.fromEntries(responses));
      } catch {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, []);

  const barData = ["students", "faculty"].map((k) => ({
    name: k[0].toUpperCase() + k.slice(1),
    value: stats[k] || 0,
  }));

  /* ---------- RENDER ---------- */

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={900} mb={3}>
        ADMIN COMMAND CENTER
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      {loading ? (
        <CenterLoader />
      ) : (
        <Box sx={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 4 }}>
          {/* METRICS */}
          <Box sx={{ borderRight: "1px solid", borderColor: "divider", pr: 3 }}>
            {Object.keys(dashboardApis).map((key) => (
              <Metric
                key={key}
                icon={ICONS[key]}
                label={key}
                value={stats[key]}
              />
            ))}
          </Box>

          {/* OVERVIEW */}
          <Box>
            <Typography fontWeight={700} mb={2}>
              OVERVIEW
            </Typography>

            <Chart data={barData} />

            <Typography fontWeight={700} mb={2}>
              ACTION REQUIRED
            </Typography>

            <Action
              label="Unread Notifications"
              value={stats.notifications}
            />
            <Action label="Pending Contacts" value={stats.contacts} />

            <Divider sx={{ my: 3 }} />

            <Typography variant="caption" color="text.secondary">
              Last updated: {new Date().toLocaleString()}
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

const CenterLoader = () => (
  <Box display="flex" justifyContent="center" mt={8}>
    <CircularProgress />
  </Box>
);

const Metric = ({ icon, label, value }) => (
  <Box mb={3}>
    <Box display="flex" alignItems="center" gap={1}>
      {icon}
      <Typography fontWeight={600}>
        {label.charAt(0).toUpperCase() + label.slice(1)}
      </Typography>
    </Box>
    <Typography variant="h4" fontWeight={900}>
      {value ?? 0}
    </Typography>
  </Box>
);

const Action = ({ label, value }) => (
  <Typography
    sx={{
      fontSize: 15,
      mb: 1.5,
      color: value > 0 ? "warning.main" : "text.primary",
    }}
  >
    • {label}: <strong>{value ?? 0}</strong>
  </Typography>
);

const Chart = ({ data }) => (
  <Box sx={{ height: 260, border: "1px solid", borderColor: "divider", mb: 3 }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="value" fill="#1976d2" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </Box>
);

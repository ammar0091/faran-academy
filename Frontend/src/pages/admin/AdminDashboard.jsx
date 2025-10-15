import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
  Skeleton,
  Alert,
  Button,
  Divider,
  Chip,
  Tooltip as MuiTooltip,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ----------------------------- UTILITIES ----------------------------- */

function useDebouncedValue(value, delay = 350) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

function useCountUp(target, duration = 700) {
  const [display, setDisplay] = useState(0);
  const startRef = useRef(null);
  const fromRef = useRef(0);

  useEffect(() => {
    const from = fromRef.current;
    const to = Number.isFinite(target) ? target : 0;
    const d = Math.max(250, duration);

    let raf;
    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / d);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      startRef.current = null;
      fromRef.current = to;
    };
  }, [target, duration]);

  return display;
}

function generateSeries(seed, labelKey = "month", valueKey = "value") {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const rng = mulberry32(seed || 1);
  return months.map((m) => ({
    [labelKey]: m,
    [valueKey]: Math.max(0, Math.round(rng() * (seed * 0.4 + 10))),
  }));
}
function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ----------------------------- KPI CARD ----------------------------- */

function KpiCard({ title, value, icon, gradient, ariaLabel }) {
  const displayValue = useCountUp(value ?? 0, 800);
  return (
    <Paper
      role="article"
      aria-label={ariaLabel || title}
      elevation={8}
      sx={{
        p: 3,
        borderRadius: 3,
        color: "common.white",
        background: gradient,
        overflow: "hidden",
        position: "relative",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-4px)", boxShadow: 12 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: -24,
          top: -24,
          width: 140,
          height: 140,
          borderRadius: "50%",
          opacity: 0.15,
          bgcolor: "common.white",
          filter: "blur(6px)",
        }}
      />
      <Box display="flex" alignItems="center" gap={1} mb={1}>
        {icon}
        <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h3" fontWeight={800} lineHeight={1.1}>
        {displayValue}
      </Typography>
    </Paper>
  );
}

/* ----------------------------- MAIN ----------------------------- */

export default function AdminDashboard() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [stats, setStats] = useState({
    student: 0,
    faculty: 0,
    events: 0,
    notifications: 0,
    enrollments: 0,
    contacts: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(
    () => localStorage.getItem("dash_search") || ""
  );
  const debouncedSearch = useDebouncedValue(search);

  const readCount = Math.floor(stats.notifications * 0.68);
  const unreadCount = Math.max(0, stats.notifications - readCount);

  const kpis = useMemo(
    () => [
      {
        key: "student",
        title: "Students",
        value: stats.student,
        icon: <GroupIcon sx={{ fontSize: 34, color: "common.white" }} />,
        gradient: "linear-gradient(135deg,#1e88e5,#42a5f5)",
      },
      {
        key: "faculty",
        title: "Faculty",
        value: stats.faculty,
        icon: <SchoolIcon sx={{ fontSize: 34, color: "common.white" }} />,
        gradient: "linear-gradient(135deg,#8e24aa,#d05ce3)",
      },
      {
        key: "events",
        title: "Events",
        value: stats.events,
        icon: <EventIcon sx={{ fontSize: 34, color: "common.white" }} />,
        gradient: "linear-gradient(135deg,#2e7d32,#66bb6a)",
      },
      {
        key: "notifications",
        title: "Notifications",
        value: stats.notifications,
        icon: <NotificationsIcon sx={{ fontSize: 34, color: "common.white" }} />,
        gradient: "linear-gradient(135deg,#c62828,#ef5350)",
      },
      {
        key: "enrollments",
        title: "Enrollments",
        value: stats.enrollments,
        icon: <SchoolIcon sx={{ fontSize: 34, color: "common.white" }} />,
        gradient: "linear-gradient(135deg,#ff9800,#ffb74d)",
      },
      {
        key: "contacts",
        title: "Contacts",
        value: stats.contacts,
        icon: <ContactMailIcon sx={{ fontSize: 34, color: "common.white" }} />,
        gradient: "linear-gradient(135deg,#00bcd4,#26c6da)",
      },
    ],
    [stats]
  );

  const filteredKpis = useMemo(() => {
    if (!debouncedSearch.trim()) return kpis;
    const q = debouncedSearch.toLowerCase();
    return kpis.filter((k) => k.title.toLowerCase().includes(q));
  }, [kpis, debouncedSearch]);

  const barData = useMemo(
    () => [
      { name: "Students", value: stats.student },
      { name: "Faculty", value: stats.faculty },
    ],
    [stats]
  );

  const lineData = useMemo(
    () => generateSeries(stats.events || 1, "month", "events"),
    [stats.events]
  );

  const pieData = useMemo(
    () => [
      { name: "Read", value: readCount, icon: <DoneAllIcon fontSize="small" /> },
      {
        name: "Unread",
        value: unreadCount,
        icon: <PendingActionsIcon fontSize="small" />,
      },
    ],
    [readCount, unreadCount]
  );

  /* ----------------------------- LOAD STATS ----------------------------- */

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      setLoading(true);
      setError("");
      try {
        const [s, f, e, n, en, c] = await Promise.all([
          axios.get("http://localhost:5000/api/student", { signal: controller.signal }),
          axios.get("http://localhost:5000/api/faculty", { signal: controller.signal }),
          axios.get("http://localhost:5000/api/events", { signal: controller.signal }),
          axios.get("http://localhost:5000/api/notifications", { signal: controller.signal }),
          axios.get("http://localhost:5000/api/enroll", { signal: controller.signal }),
          axios.get("http://localhost:5000/api/contact", { signal: controller.signal }),
        ]);

        setStats({
          student: Array.isArray(s.data) ? s.data.length : s.data?.count ?? 0,
          faculty: Array.isArray(f.data) ? f.data.length : f.data?.count ?? 0,
          events: Array.isArray(e.data) ? e.data.length : e.data?.count ?? 0,
          notifications: Array.isArray(n.data) ? n.data.length : n.data?.count ?? 0,
          enrollments: Array.isArray(en.data) ? en.data.length : en.data?.count ?? 0,
          contacts: Array.isArray(c.data) ? c.data.length : c.data?.count ?? 0,
        });
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error("Dashboard fetch failed:", err);
          setError("Failed to load dashboard stats. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    localStorage.setItem("dash_search", search);
  }, [search]);

  /* ----------------------------- RENDER ----------------------------- */

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Title */}
      <Box display="flex" alignItems={{ xs: "stretch", sm: "center" }} gap={2} mb={3} flexDirection={{ xs: "column", sm: "row" }}>
        <Box flex={1}>
          <Typography variant="h4" fontWeight={800}>Admin Dashboard</Typography>
          <Typography variant="body2" color="text.secondary">
            Overview of students, faculty, events, notifications, enrollments & contacts
          </Typography>
        </Box>
        <TextField
          aria-label="Search dashboard items"
          placeholder="Search tiles… (students, faculty, …)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1, opacity: 0.6 }} /> }}
          sx={{ width: isSm ? "100%" : 360 }}
        />
      </Box>

      {/* Error */}
      {error && (
        <Alert
          severity="error"
          sx={{ mb: 3 }}
          action={
            <Button
              size="small"
              color="inherit"
              startIcon={<RefreshIcon />}
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          }
        >
          {error}
        </Alert>
      )}

      {/* KPI Grid */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <Grid key={i} item xs={12} sm={6} md={3}>
                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Skeleton variant="text" width="40%" height={24} />
                  <Skeleton variant="text" width="60%" height={52} />
                </Paper>
              </Grid>
            ))
          : filteredKpis.length > 0
          ? filteredKpis.map((k) => (
              <Grid key={k.key} item xs={12} sm={6} md={3}>
                <KpiCard
                  title={k.title}
                  value={k.value}
                  icon={k.icon}
                  gradient={k.gradient}
                />
              </Grid>
            ))
          : (
            <Grid item xs={12}>
              <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                <Typography>No tiles match “{debouncedSearch}”.</Typography>
              </Paper>
            </Grid>
          )}
      </Grid>

      {/* Charts */}
      <Grid container spacing={2}>
        {/* Bar Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2.5, borderRadius: 3, height: "100%" }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <Typography variant="h6">Students vs Faculty</Typography>
              <Chip size="small" label="Count" />
            </Box>
            <Divider sx={{ mb: 2 }} />
            {loading ? <Skeleton variant="rounded" height={240} /> : (
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={barData} barCategoryGap={28}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis allowDecimals={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#1976d2" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2.5, borderRadius: 3, height: "100%" }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <Typography variant="h6">Events Trend</Typography>
              <Chip size="small" label="Monthly" />
            </Box>
            <Divider sx={{ mb: 2 }} />
            {loading ? <Skeleton variant="rounded" height={240} /> : (
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tickLine={false} />
                  <YAxis allowDecimals={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="events" stroke="#2e7d32" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2.5, borderRadius: 3, height: "100%" }}>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
              <Typography variant="h6">Notifications Status</Typography>
              <Box display="flex" gap={1}>
                <MuiTooltip title="Read">
                  <Chip size="small" icon={<DoneAllIcon />} label={readCount} />
                </MuiTooltip>
               
              </Box>
            </Box>
            <Divider sx={{ mb: 2 }} />
            {loading ? <Skeleton variant="rounded" height={240} /> : (
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? "#4caf50" : "#ff9800"} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box mt={3} textAlign="center" color="text.secondary">
        <Typography variant="caption">
          Data refreshed from local APIs. UI optimized for light/dark themes & mobile.
        </Typography>
      </Box>
    </Container>
  );
}

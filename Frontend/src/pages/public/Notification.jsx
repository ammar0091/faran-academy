// OptionD_Timeline.jsx
import React, { useEffect, useState } from 'react';
import {
  Container, Box, Typography, CircularProgress
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { getNotifications } from '../../utils/api';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetch = async () => {
      try {
        const res = await getNotifications();
        if (mounted) setNotifications(res?.data || []);
      } catch (err) {
        console.error(err);
        if (mounted) setNotifications([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetch();
    return () => (mounted = false);
  }, []);

  const safe = (t) => (t && typeof t === 'string' ? t : '');
  const formatDate = (date) => {
    const parsed = new Date(date);
    if (Number.isNaN(parsed.getTime())) return '-';

    return parsed.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" fontWeight={700}>Notifications</Typography>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={6}><CircularProgress /></Box>
      ) : notifications.length === 0 ? (
        <Typography align="center" color="text.secondary" mt={4}>No notifications.</Typography>
      ) : (
        <Box sx={{ position: 'relative', pl: 3 }}>
          <Box sx={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 2, bgcolor: 'grey.200' }} />
          {notifications.map((note, idx) => (
            <Box key={note?._id || idx} sx={{ mb: 4, position: 'relative' }}>
              <Box sx={{ position: 'absolute', left: 4, top: 2 }}>
                <CircleIcon sx={{ fontSize: 12, color: 'primary.main' }} />
              </Box>
              <Box sx={{ pl: 4 }}>
                <Typography variant="caption" color="text.secondary">
                  {note?.pushDate ? formatDate(note.pushDate) : '-'}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{safe(note?.message) || 'No message available.'}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Notification;

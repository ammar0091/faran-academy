// import React, { useEffect, useState } from "react";
// import { Box, Grid, Card, Typography, Avatar } from "@mui/material";
// import { getFaculty } from "../utils/api";

// export default function FacultySection({ limit }) {  // <-- limit prop added
//   const [faculty, setFaculty] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchFaculty() {
//       try {
//         const res = await getFaculty();
//         setFaculty(res.data || []);
//       } catch (err) {
//         console.error("Error fetching faculty:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchFaculty();
//   }, []);

//   if (loading) {
//     return (
//       <Box sx={{ textAlign: "center", py: 10 }}>
//         <Typography variant="h5" color="primary">Loading faculty...</Typography>
//       </Box>
//     );
//   }

//   const displayedFaculty = limit ? faculty.slice(0, limit) : faculty;  // apply limit here

//   return (
//     <Box>
//       <Grid container spacing={6} justifyContent="center">
//         {displayedFaculty.map((member, idx) => (
//           <Grid item xs={12} sm={6} md={3} key={member._id || idx} sx={{ display: "flex", justifyContent: "center" }}>
//             <Card
//               sx={{
//                 position: "relative",
//                 width: 300,
//                 minHeight: 240,
//                 borderRadius: 4,
//                 textAlign: "center",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 boxShadow: "0px 6px 20px rgba(40,120,250,0.07)",
//                 background: "linear-gradient(135deg,#f7fbfc 0%,#fff 100%)",
//                 border: "1px solid #eaf1fa",
//                 p: 3,
//                 transition: "transform 0.2s, box-shadow 0.2s",
//                 "&:hover": {
//                   transform: "translateY(-3px) scale(1.04)",
//                   boxShadow: "0px 12px 32px rgba(66,140,240,0.18)",
//                 },
//               }}
//             >
//               <Avatar
//                 src={member.image || "/assets/faculty/default.jpg"}
//                 sx={{
//                   width: 82,
//                   height: 82,
//                   mx: "auto",
//                   mb: 3,
//                   border: "3px solid",
//                   borderColor: "primary.main",
//                   boxShadow: "0 2px 24px rgba(34,124,197,0.17)",
//                   background: "linear-gradient(135deg,#e3f0fc 0%,#ffd0d0 100%)"
//                 }}
//               />
//               <Typography fontWeight={600} fontSize={17} sx={{ mb: 1 }}>{member.name}</Typography>
//               <Typography color="text.secondary" fontSize={15} sx={{ mb: 1 }}>
//                 {member.role || member.designation}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 sx={{
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                   display: "-webkit-box",
//                   WebkitLineClamp: 3,
//                   WebkitBoxOrient: "vertical",
//                   fontSize: 14,
//                 }}
//               >
//                 {member.bio || member.subject}
//               </Typography>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }



import React, { useEffect, useState } from "react";
import { Box, Grid, Card, Typography, Avatar, Skeleton, CardContent } from "@mui/material";
import { getFaculty } from "../utils/api";

export default function FacultySection({ limit }) {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const res = await getFaculty();
        setFaculty(res.data || []);
      } catch (err) {
        console.error("Error fetching faculty:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFaculty();
  }, []);

  // Modern Skeleton Loading State
  if (loading) {
    return (
      <Box sx={{ px: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          {Array.from(new Array(limit || 4)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Card sx={{ width: 310, height: 360, borderRadius: "20px", boxSizing: "border-box" }}>
                <Box sx={{ height: 100, bgcolor: "grey.100" }} />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: -6, p: 3 }}>
                  <Skeleton variant="circular" width={90} height={90} sx={{ border: "4px solid #fff" }} />
                  <Skeleton variant="text" width="60%" height={28} sx={{ mt: 2 }} />
                  <Skeleton variant="text" width="40%" height={20} sx={{ mt: 0.5 }} />
                  <Skeleton variant="rectangular" width="90%" height={45} sx={{ mt: 2, borderRadius: 1 }} />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  const displayedFaculty = limit ? faculty.slice(0, limit) : faculty;

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {displayedFaculty.map((member, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={member._id || idx} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                width: 310,
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.04)",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)",
                  "& .faculty-avatar": {
                    borderColor: "primary.main",
                    transform: "scale(1.2)"
                  },
                  "& .card-banner": {
                    opacity: 0.95,
                    filter: "grayscale(0%)"
                  }
                },
              }}
            >
              {/*  Top Background   */}
              <Box 
                className="card-banner"
                sx={{ 
                  height: 100, 
                  background: "linear-gradient(135deg, #f5f7fa 10%, #c3cfe2 100%)",
                  opacity: 0.6,
                  transition: "all 0.35s ease"
                }} 
              />

              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: -6, p: 3, pt: 0, flexGrow: 1 }}>
                <Avatar
                  className="faculty-avatar"
                  src={member.image || "/assets/faculty/default.jpg"}
                  sx={{
                    width: 90,
                    height: 90,
                    border: "4px solid #ffffff",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.35s ease",
                    backgroundColor: "#fff"
                  }}
                />

                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    fontSize: "1.1rem", 
                    color: "text.primary", 
                    mt: 2,
                    letterSpacing: "-0.01em",
                    textAlign: "center"
                  }}
                >
                  {member.name}
                </Typography>

                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    color: "primary.main", 
                    fontWeight: 600, 
                    fontSize: "0.85rem", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    mt: 0.5,
                    mb: 2,
                    textAlign: "center"
                  }}
                >
                  {member.role || member.designation}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    textAlign: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {member.bio || member.subject || "No bio description provided."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

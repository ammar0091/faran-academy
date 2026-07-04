import React, { useState } from "react";
import {
  Box,
  Chip,
  Container,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function GalleryGrid({
  images,
  category,
}) {
  const [active, setActive] = useState(null);

  if (!images?.length) return null;

  const showPrev = () =>
    setActive((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  const showNext = () =>
    setActive((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );

  return (
    <Box
      sx={{
        py: 5,
        bgcolor: "#f8fbff",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
            },

            gridAutoRows: 180,

            gap: 2,
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              onClick={() => setActive(index)}
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                cursor: "pointer",

                boxShadow:
                  "0 15px 40px rgba(0,0,0,.08)",

                transition: ".35s",

                "&:hover img": {
                  transform: "scale(1.08)",
                },

                "& img": {
                  transition: ".6s",
                },

                ...(index === 0 && {
                  gridColumn: {
                    md: "span 2",
                  },
                  gridRow: "span 2",
                }),

                ...(index === 3 && {
                  gridRow: "span 2",
                }),

                ...(index === 5 && {
                  gridColumn: {
                    md: "span 2",
                  },
                }),
              }}
            >
              <Box
                component="img"
                src={`https://picsum.photos/800/600?random=${img}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,

                  background:
                    "linear-gradient(to top,rgba(0,0,0,.75),transparent 60%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: 18,
                  bottom: 18,
                  color: "#fff",
                }}
              >
                <Chip
                  size="small"
                  label={category}
                  sx={{
                    mb: 1,
                    bgcolor: "#FDB515",
                    color: "#003B73",
                    fontWeight: 700,
                  }}
                />

                <Typography
                  fontWeight={700}
                  variant={
                    index === 0 ? "h5" : "body1"
                  }
                >
                  Gallery Image {index + 1}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Dialog
        open={active !== null}
        onClose={() => setActive(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "visible",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            bgcolor: "#050505",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <IconButton
            aria-label="Close image"
            onClick={() => setActive(null)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 2,
              color: "#fff",
              bgcolor: "rgba(0,0,0,.45)",
              "&:hover": { bgcolor: "rgba(0,0,0,.65)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            aria-label="Previous image"
            onClick={showPrev}
            sx={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "#fff",
              bgcolor: "rgba(0,0,0,.45)",
              "&:hover": { bgcolor: "rgba(0,0,0,.65)" },
            }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>

          <Box
            component="img"
            src={`https://picsum.photos/1200/850?random=${images[active]}`}
            alt={`${category} gallery ${active + 1}`}
            sx={{
              display: "block",
              width: "100%",
              maxHeight: "82vh",
              objectFit: "contain",
            }}
          />

          <IconButton
            aria-label="Next image"
            onClick={showNext}
            sx={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "#fff",
              bgcolor: "rgba(0,0,0,.45)",
              "&:hover": { bgcolor: "rgba(0,0,0,.65)" },
            }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
}

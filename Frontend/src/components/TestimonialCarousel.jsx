import React from "react";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { name: "Student: Sara M.", img: "/assets/student1.jpg", quote: "Faran Academy transformed my learning experience—supportive staff and great friends!" },
  { name: "Parent: Mr. Rahman", img: "/assets/staff1.jpg", quote: "The teachers’ dedication and hands-on curriculum set this school apart." },
  { name: "Parent: Mrs. Sharma", img: "/assets/staff2.jpg", quote: "My son’s confidence and results have improved so much." }
];

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <Box my={7}>
      <Typography variant="h4" align="center" fontWeight={700} mb={4} color="primary.main">
        What People Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <Card key={i} sx={{ maxWidth: 460, mx: 'auto', p: 2, minHeight: 200 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar src={t.img} alt={t.name} sx={{ width: 64, height: 64, mx: "auto", mb: 1.5 }} />
              <Typography variant="h6" color="text.primary" gutterBottom>{t.name}</Typography>
              <Typography fontStyle="italic" color="text.secondary">
                “{t.quote}”
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export const homeUi = {
  primary: "#004379",
  primaryContainer: "#005ba1",
  gold: "#feb316",
  goldText: "#6a4800",
  bg: "#f9f9fc",
  low: "#f3f3f6",
  text: "#1a1c1e",
  muted: "#414751",
  outline: "#c1c7d2",
  sky: "#d3e4ff",
};

export const homeImages = {
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8VVNf_ocmv2EMFMMyK-I9PJl3UJZ82I49sxnOXKZnLNcCpGsxGiuCF5YNKF10sOO8Uybb8ya4wXReJKTGqYvUsFN7cwNqMS2gJ5q_Pj8NHCZEUgEjN5YwGlVxB9rJOy53QmNvOvwweCViN6WyK_7pAhgXFkPt3m336cebj_6Xx2zLGjAcFFkL2KQZwG44411LVRn72TN-iAA7DzMOytRk1WAZSLe0Lpj-tdb2Id7WZWD1VL1gX8LWTKo1-ANwhP1pJJXU_bGpG4JH",
  students:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5xKWcdt1jSU9rlcwcYtegx7sB1bN9Kh3q_AyakSHkD2xfSixWe3OLtz68NK-JeIwY-WoktFWOfDCOzwyaWr8IyFwYqC8qMcYx8FoIj41_EqLSYuPo2XeKDoa4PV7BRRJI7pdUt_h6pHEUdzwQSiKlJw55ue41uIqhiCSKRWCkViEVnsAOJOiQKszZKyle4EmiUG8S1klHDcc9wNEXmYRW4EB8FnW4l5YGmFuNKMR6S2URrbnlWwrt770uJxbaojXrved8UUIRyWcs",
  lab:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuConIl-XCcM7CYIjNTw0tqVpj1qC88iN00AqCaa94_iDid-kWQQyssEmvJNVJN6cEcRxt17gRTWzulPVWQElTEBpDco73EGshK_ztuQvYU2Mvgb2_6sh-c2zcLhbhVQTNKjLWdAxJ7NGnMhY26CipqFmOgBtlIBIGpPTMBgUsNXwh-1S2T7OczeQ3Ikk9ZjtEYKkYPYkatN5jMtfKK0jSAUtbnwesV-aCv2HziXNDl3ehBbp5gRplzyQif8AlJKZihY-ie2uSRc0pOB",
  news:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3sZjk0hllpt9I4AuUYeiibKG62wDLzDbNLCoeEVQvxVww_-8S-9GcUmt7YYisH6w8U9OsetybkNCEqjMfv_skf9jfcBAE4VBK61Ai7D1sRznOhV__bQqDC990Uh_la2XNKiQPaBAsVhgrni1q0Ny7XE99UQnRxcL9uZj9CuVkctw41uOXjhMbtArBfDABlLJG0UP-AVYq7-aZLcrW1A_p6X0-6VItroMpFXKlLT92GR_irUQkqnBx-Y2ojEfAfX2hvyr2n0ux7Cu_",
  campus:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBwdHWhRj3-dD0QFgcRAqmXrYAjT3P-Xf3U-t5YlI3IYkDRuBfyHrrmglX0M5OuiwdLmqZG1eRykBNv0tvW5U_Zg6A_rpYe5_Kxh_o8MM4l_VkpFo7ep5FsgnhEBOlwlA38hdpcOWlkQSRtQ8ayRAy4fCjrZtjgouVQsDvvMFm4MYika7DMlZCzaaVIO8_jiKQsDrvUoMNGVoZk6eNZf8Gz_T3csTV44QPGXNFHUBqEINLlF0nu7Cm2gYJhqbY9tC2CsVKgmBTGbErn",
};

export const fallbackFaculty = [
  { name: "Sarah Jamshed", role: "Head of Sciences", image: homeImages.hero },
  { name: "Bilal Ahmed", role: "Math Lead", image: homeImages.lab },
  { name: "Maria Khan", role: "Literature & Arts", image: homeImages.students },
  { name: "Omar Farooq", role: "Social Studies", image: homeImages.campus },
];

export const fallbackUpdates = [
  {
    title: "Annual Excellence Awards Ceremony Announced",
    description: "Join us as we celebrate outstanding academic and extracurricular achievements.",
    date: "October 15, 2024",
    image: homeImages.news,
  },
  {
    title: "New STEM Innovation Hub Opens its Doors",
    description: "The state-of-the-art laboratory features robotics kits and advanced computing resources.",
    date: "October 08, 2024",
    image: homeImages.lab,
  },
];

export const valueCards = [
  {
    title: "Ethical Innovation",
    body: "Developing strong character alongside future-ready knowledge.",
    icon: "bolt",
  },
  {
    title: "Global Vision",
    body: "Experienced faculty shaping confident world citizens.",
    icon: "public",
  },
];

export const alumniCards = [
  {
    title: "University Success",
    body: "Graduates secured placements at top universities and professional colleges.",
    tags: ["Stanford", "Oxford", "AKU"],
  },
  {
    title: "Career Excellence",
    body: "Faran alumni are making an impact across industries worldwide.",
    featured: true,
  },
  {
    title: "Legacy of Giving",
    body: "Alumni actively mentor current students through our future leaders workshops.",
    icon: "groups",
  },
];

export const testimonials = [
  {
    initials: "RS",
    name: "Rahat Salman",
    role: "Parent",
    quote:
      "Faran Academy has completely transformed my son's attitude towards learning. The teachers go above and beyond.",
  },
  {
    initials: "ZA",
    name: "Zaid Ali",
    role: "Grade 12 Student",
    quote:
      "The science labs are world-class. I have had the opportunity to conduct work that once felt impossible.",
    dark: true,
  },
];

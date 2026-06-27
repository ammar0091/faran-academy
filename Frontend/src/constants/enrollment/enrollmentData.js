export const enrollmentUi = {
  primary: "#004379",
  primaryContainer: "#005ba1",
  gold: "#feb316",
  goldText: "#6a4800",
  bg: "#f9f9fc",
  surface: "#ffffff",
  low: "#f3f3f6",
  text: "#1a1c1e",
  muted: "#414751",
  outline: "#c1c7d2",
};

export const initialEnrollmentForm = {
  name: "",
  dob: "",
  class: "",
  session: "",
  parent: "",
  phone: "",
  email: "",
  address: "",
};

export const enrollmentSteps = [
  { number: 1, title: "Personal Info", status: "Completed", state: "complete" },
  { number: 2, title: "Academics", status: "In Progress", state: "active" },
  { number: 3, title: "Documents", status: "Pending", state: "inactive" },
  { number: 4, title: "Confirmation", status: "Review", state: "inactive" },
];



export const applicationStatus = [
  { label: "Account Created", complete: true },
  { label: "Personal Profile", complete: true },
  { label: "Academic Records", complete: false },
  { label: "Document Verification", complete: false, muted: true },
];

export const whyEnrollmentCards = [
  {
    title: "World-Class Faculty",
    body:
      "Learn from dedicated educators and mentors. Our curriculum is designed to build confidence, discipline, and innovative thinking.",
    tags: ["98% Graduate Success", "Global Network"],
    variant: "wide",
  },
  {
    title: "Innovation Hub",
    body:
      "Access to modern labs and project-based learning designed to bring student ideas to life.",
    variant: "gold",
  },
];

export const enrollmentImages = {
  campus:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcTjLMyXn5agQVAcr7VLNwuQNnljFm2ysHXaPLxbo-IGvr4cx_YiH9yno9IIjhjgXzhi1_ws6evO2rH4ZZuLEr_Xmh37NH7kiN3_FqNhvAHyGTgl-98TUe5uOWgfwmjPt_0lxQuSythgZJy_QSMkM_C_RH2ZGzWmgngF4RGQXTPIa5Eu7zeENqC9TU0zG1WTaMKYRmPEyoK9DjPyF3rDKkwezYl-QzPIwPBO-D6y7veB83iwsWSRA_JNteqSQSbwlyJP8I1_rN8F_T",
};

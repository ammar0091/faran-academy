import { fallbackFaculty, fallbackUpdates, homeImages } from "../constants/home/modernHomeData";

export function formatHomeDate(value) {
  if (!value) return "Latest Update";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}

function getUpdateTitle(item) {
  return item?.title || item?.name || item?.heading || item?.subject || "Faran Academy Update";
}

function getUpdateDescription(item) {
  return (
    item?.description ||
    item?.message ||
    item?.details ||
    item?.content ||
    "Stay connected with the latest news, notices, and campus moments from Faran Academy."
  );
}

export function normalizeFaculty(rawFaculty = []) {
  const source = rawFaculty.length ? rawFaculty : fallbackFaculty;

  return source.slice(0, 4).map((member, index) => {
    const fallback = fallbackFaculty[index] || fallbackFaculty[0];

    return {
      name: member.name || fallback.name,
      role: member.role || member.designation || fallback.role,
      image: member.image || fallback.image,
      message: member.message,
    };
  });
}

export function normalizePrincipal(rawFaculty = []) {
  const principal = rawFaculty[0] || fallbackFaculty[0];

  return {
    name: principal.name || "Principal",
    role: principal.role || principal.designation || "Principal, Faran Academy",
    image: principal.image || fallbackFaculty[0].image,
    message:
      principal.message ||
      "Our mission is to cultivate a learning environment that transforms curiosity into wisdom, preparing leaders for a world of constant change.",
  };
}

export function normalizeUpdates(events = [], notifications = []) {
  const liveUpdates = [...events, ...notifications].slice(0, 2).map((item, index) => ({
    title: getUpdateTitle(item),
    description: getUpdateDescription(item),
    date: formatHomeDate(item.date || item.createdAt || item.updatedAt),
    image: item.image || item.img || (index === 0 ? homeImages.news : homeImages.lab),
  }));

  return liveUpdates.length ? liveUpdates : fallbackUpdates;
}

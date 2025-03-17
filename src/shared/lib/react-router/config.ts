export const pathKeys = {
  root: "/",
  home() {
    return pathKeys.root;
  },
  speciality: {
    root() {
      return pathKeys.root.concat("speciality/");
    },
    bySlug(slug: string) {
      return pathKeys.speciality.root().concat(`${slug}/`);
    },
  },
  reviews: {
    root() {
      return pathKeys.root.concat("reviews/");
    },
    bySlug(slug: string) {
      return pathKeys.reviews.root().concat(`${slug}`);
    },
  },
  about() {
    return pathKeys.root.concat("about/");
  },
  dashboard() {
    return pathKeys.root.concat("dashboard/");
  },
  timetable() {
    return pathKeys.root.concat("timetable/");
  },
  partner() {
    return pathKeys.root.concat("partner/");
  },
  parlaments() {
    return pathKeys.root.concat("parlaments/");
  },
  error() {
    return pathKeys.root.concat("*");
  },
  course: {
    root() {
      return pathKeys.root.concat("courses/");
    },
    bySlug(slug: string) {
      return pathKeys.course.root().concat(`${slug}/`);
    },
  },
  news: {
    root() {
      return pathKeys.root.concat("news/");
    },
    bySlug(slug: string) {
      return pathKeys.news.root().concat(`${slug}`);
    },
  },
  event: {
    root() {
      return pathKeys.root.concat("event/");
    },
    bySlug(slug: string) {
      return pathKeys.event.root().concat(`${slug}`);
    },
  },
};

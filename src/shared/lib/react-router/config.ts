export const pathKeys = {
  root: '/',
  home() {
    return pathKeys.root
  },
  speciality: {
    root() {
      return pathKeys.root.concat('speciality/')
    },
    bySlug(slug: string) {
      return pathKeys.speciality.root().concat(`${slug}/`)
    },
  },
  reviews() {
    return pathKeys.root.concat('reviews/')
  },
  about() {
    return pathKeys.root.concat('about/')
  },
  dashboard() {
    return pathKeys.root.concat('dashboard/')
  },
  error() {
    return pathKeys.root.concat('*')
  },
  event: {
    root() {
      return pathKeys.root.concat('event/')
    },
    bySlug(slug: string) {
      return pathKeys.event.root().concat(`${slug}`)
    },
  },
  course: {
    root() {
      return pathKeys.root.concat('courses/')
    },
    bySlug(slug: string) {
      return pathKeys.course.root().concat(`${slug}/`)
    },
  },
  news: {
    root() {
      return pathKeys.root.concat('news/')
    },
    bySlug(slug: string) {
      return pathKeys.news.root().concat(`${slug}`)
    },
  },
}

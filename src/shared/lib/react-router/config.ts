export const pathKeys = {
  root: '/',
  home() {
    return pathKeys.root;
  },
  about(){
    return pathKeys.root.concat('about/')
  },
  dashboard() {
    return pathKeys.root.concat('dashboard/')
  },
  error() {
    return pathKeys.root.concat('error/');
  },
  // group({ params }: { params: { slug: string } }) {
  //   return pathKeys.root.concat(`group/${params.slug}/`);
  // },
  course :{
    root(){
      return pathKeys.root.concat('courses/')
    },
    bySlug(slug: string){
      return pathKeys.course.root().concat(`${slug}/`)
    }
  },
  profile: {
    root() {
      return pathKeys.root.concat('profile/');
    },
    badges() {
      return pathKeys.profile.root().concat('badges/')
    }
  },
};

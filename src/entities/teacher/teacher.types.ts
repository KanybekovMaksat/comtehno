export interface Department {
  name: string;
}

export interface Achievement {
  name: string;
}

export interface StaffMember {
  fullName: string;
  specialization: string;
  photo: string;
  aboutMe: string;
  department: Department;
  achievements: Achievement[];
}

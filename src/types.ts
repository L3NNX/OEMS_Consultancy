export interface University {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  ranking: number;
  website: string;
  programs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  course: string;
  image: string;
  content: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Inquiry {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredUniversity?: string;
  preferredCourse?: string;
}

export interface ConsultationBooking {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  consultationType: string;
}
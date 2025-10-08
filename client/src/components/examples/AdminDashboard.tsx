import AdminDashboard from '../AdminDashboard';
import type { Reservation } from '@shared/schema';

//todo: remove mock functionality
const mockReservations: Reservation[] = [
  {
    id: "1",
    date: "2024-10-15",
    time: "14:00",
    name: "김철수",
    school: "고려대학교",
    phone: "010-1234-5678",
    location: "안암동",
    priceRange: "2만원대",
    service: "커트",
    email: "student1@example.com",
    studentId: "2024001",
    additionalNotes: null,
    photoUrl: null,
    createdAt: new Date()
  },
  {
    id: "2",
    date: "2024-10-16",
    time: "15:30",
    name: "이영희",
    school: "성신여자대학교",
    phone: "010-9876-5432",
    location: "정릉1동",
    priceRange: "3만원대",
    service: "염색",
    email: "student2@example.com",
    studentId: "2024002",
    additionalNotes: null,
    photoUrl: null,
    createdAt: new Date()
  }
];

export default function AdminDashboardExample() {
  return (
    <AdminDashboard 
      reservations={mockReservations}
      onLogout={() => console.log('Logout clicked')} 
    />
  );
}

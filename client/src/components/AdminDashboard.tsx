import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LogOut } from "lucide-react";

interface Reservation {
  id: number;
  date: string;
  time: string;
  name: string;
  school: string;
  phone: string;
  location: string;
  priceRange: string;
  service: string;
  email: string;
  studentId: string;
  additionalNotes?: string;
  photoUrl?: string;
}

interface AdminDashboardProps {
  reservations: Reservation[];
  onLogout: () => void;
}

export default function AdminDashboard({ reservations, onLogout }: AdminDashboardProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b border-card-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">예약 관리</h1>
          <Button 
            variant="outline" 
            onClick={onLogout}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-muted-foreground">
            총 {reservations.length}개의 예약
          </h2>
        </div>

        {reservations.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">아직 예약이 없습니다.</p>
          </Card>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold">날짜</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">시간</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">이름</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">학교</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">전화번호</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">위치</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">가격대</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">시술</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation, index) => (
                    <tr 
                      key={reservation.id} 
                      className={`border-b border-border ${index % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}
                      data-testid={`row-reservation-${reservation.id}`}
                    >
                      <td className="py-3 px-4 text-sm" data-testid={`text-date-${reservation.id}`}>{reservation.date}</td>
                      <td className="py-3 px-4 text-sm">{reservation.time}</td>
                      <td className="py-3 px-4 text-sm font-medium">{reservation.name}</td>
                      <td className="py-3 px-4 text-sm">{reservation.school}</td>
                      <td className="py-3 px-4 text-sm">{reservation.phone}</td>
                      <td className="py-3 px-4 text-sm">{reservation.location}</td>
                      <td className="py-3 px-4 text-sm">{reservation.priceRange}</td>
                      <td className="py-3 px-4 text-sm">{reservation.service}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {reservations.map((reservation) => (
                <Card key={reservation.id} className="p-4" data-testid={`card-reservation-${reservation.id}`}>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold">{reservation.name}</p>
                        <p className="text-sm text-muted-foreground">{reservation.school}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{reservation.date}</p>
                        <p className="text-sm text-muted-foreground">{reservation.time}</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm"><span className="text-muted-foreground">전화:</span> {reservation.phone}</p>
                      <p className="text-sm"><span className="text-muted-foreground">위치:</span> {reservation.location}</p>
                      <p className="text-sm"><span className="text-muted-foreground">가격대:</span> {reservation.priceRange}</p>
                      <p className="text-sm"><span className="text-muted-foreground">시술:</span> {reservation.service}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

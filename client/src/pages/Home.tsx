import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ReservationForm from "@/components/ReservationForm";
import Benefits from "@/components/Benefits";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const scrollToForm = () => {
    const formElement = document.getElementById('reservation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReservationSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      
      formData.append('date', data.date);
      formData.append('time', data.time);
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('school', data.school);
      formData.append('studentId', data.studentId);
      formData.append('email', data.email);
      formData.append('location', data.location);
      formData.append('priceRange', data.priceRange);
      formData.append('service', data.service);
      
      if (data.additionalNotes) {
        formData.append('additionalNotes', data.additionalNotes);
      }
      
      if (data.photo) {
        formData.append('photo', data.photo);
      }

      const response = await fetch('/api/reservations', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create reservation');
      }

      toast({
        title: "예약 신청 완료!",
        description: "곧 연락드리겠습니다.",
      });
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast({
        title: "예약 신청 실패",
        description: "다시 시도해주세요.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Hero onBookNowClick={scrollToForm} />
      <HowItWorks />
      <Benefits />
      <ReservationForm onSubmit={handleReservationSubmit} />
      
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 성북구 대학생 미용실 예약 서비스. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { DollarSign, Clock, MapPin, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "학생 할인",
    description: "대학생 전용 할인가로 부담 없이 이용하세요"
  },
  {
    icon: Clock,
    title: "빠른 예약",
    description: "몇 번의 클릭으로 간편하게 예약 완료"
  },
  {
    icon: MapPin,
    title: "다양한 선택",
    description: "성북구 전역의 미용실 중 선택 가능"
  },
  {
    icon: Sparkles,
    title: "맞춤 추천",
    description: "원하는 위치, 가격, 시술로 필터링"
  }
];

export default function Benefits() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          왜 우리 서비스인가?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover-elevate">
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle, MapPin } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "정보 입력",
    description: "예약 날짜, 시간, 개인정보를 입력하세요"
  },
  {
    number: 2,
    icon: MapPin,
    title: "조건 선택",
    description: "원하는 위치, 가격대, 시술을 선택하세요"
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "예약 완료",
    description: "제출하면 예약이 완료됩니다"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          간편한 예약 과정
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="p-6 text-center hover-elevate">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <step.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

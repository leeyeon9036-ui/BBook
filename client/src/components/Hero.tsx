import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onBookNowClick: () => void;
}

export default function Hero({ onBookNowClick }: HeroProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>이미 500+ 학생들이 이용 중</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            성북구 대학생 전용<br />미용실 예약
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            학생 할인 가능한 미용실을 쉽게 예약하세요
          </p>
          
          <Button 
            size="lg" 
            className="h-12 px-8 text-base"
            onClick={onBookNowClick}
            data-testid="button-book-now"
          >
            지금 예약하기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

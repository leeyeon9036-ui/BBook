import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { useToast } from "@/hooks/use-toast";
import type { Reservation } from "@shared/schema";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const { data: reservations = [], refetch } = useQuery<Reservation[]>({
    queryKey: ['/api/reservations'],
    enabled: isLoggedIn,
    refetchInterval: 3000, // Poll every 3 seconds for real-time updates
  });

  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      toast({
        title: "로그인 성공",
        description: "관리자 페이지에 오신 것을 환영합니다.",
      });
      refetch();
    } else {
      toast({
        title: "로그인 실패",
        description: "아이디 또는 비밀번호가 올바르지 않습니다.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLocation("/admin");
    toast({
      title: "로그아웃 완료",
      description: "성공적으로 로그아웃되었습니다.",
    });
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard reservations={reservations} onLogout={handleLogout} />;
}

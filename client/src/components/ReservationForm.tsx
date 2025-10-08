import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Upload } from "lucide-react";

const seongbukDistricts = [
  "정릉1동", "정릉2동", "정릉3동", "정릉4동",
  "길음1동", "길음2동", "돈암1동", "돈암2동",
  "안암동", "보문동", "성북동", "삼선동", "종암동"
];

const priceRanges = ["1만원대", "2만원대", "3만원대", "4만원 이상"];

const timeSlots = Array.from({ length: 21 }, (_, i) => {
  const hour = Math.floor(i / 2) + 10;
  const minute = i % 2 === 0 ? "00" : "30";
  return `${hour}:${minute}`;
});

const formSchema = z.object({
  date: z.string().min(1, "날짜를 선택해주세요"),
  time: z.string().min(1, "시간을 선택해주세요"),
  name: z.string().min(1, "이름을 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
  school: z.string().min(1, "학교를 입력해주세요"),
  studentId: z.string().min(1, "학번을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  location: z.string().min(1, "위치를 선택해주세요"),
  priceRange: z.string().min(1, "가격대를 선택해주세요"),
  service: z.string().min(1, "희망 시술을 입력해주세요"),
  additionalNotes: z.string().optional(),
  photo: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ReservationFormProps {
  onSubmit: (data: FormValues) => void;
}

export default function ReservationForm({ onSubmit }: ReservationFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: "",
      time: "",
      name: "",
      phone: "",
      school: "",
      studentId: "",
      email: "",
      location: "",
      priceRange: "",
      service: "",
      additionalNotes: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (data: FormValues) => {
    onSubmit({ ...data, photo: selectedFile });
  };

  return (
    <section id="reservation-form" className="py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          예약 신청하기
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 예약 정보 */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6">예약 정보</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>날짜 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            {...field} 
                            data-testid="input-date"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>시간 <span className="text-destructive">*</span></FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-time" className="h-12">
                              <SelectValue placeholder="시간 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="홍길동"
                            data-testid="input-name"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>전화번호 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel"
                            placeholder="010-1234-5678"
                            data-testid="input-phone"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="school"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>학교 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="고려대학교"
                            data-testid="input-school"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="studentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>학번 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="2024123456"
                            data-testid="input-student-id"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이메일 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email"
                            placeholder="example@email.com"
                            data-testid="input-email"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>

              {/* 요구사항 */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6">요구사항</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>위치 <span className="text-destructive">*</span></FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-location" className="h-12">
                              <SelectValue placeholder="동 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {seongbukDistricts.map((district) => (
                              <SelectItem key={district} value={district}>
                                {district}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="priceRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>가격대 <span className="text-destructive">*</span></FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-price" className="h-12">
                              <SelectValue placeholder="가격대 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {priceRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>희망 시술 <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="커트, 펌, 염색, 클리닉 등"
                            data-testid="input-service"
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>기타 요구사항 <span className="text-muted-foreground text-sm">(선택)</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            placeholder="추가로 요청하실 사항이 있으시면 작성해주세요"
                            data-testid="textarea-notes"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      사진 업로드 <span className="text-muted-foreground text-sm">(선택)</span>
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover-elevate">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="photo-upload"
                        data-testid="input-photo"
                      />
                      <label htmlFor="photo-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          {selectedFile ? selectedFile.name : "클릭하여 파일 선택"}
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button 
                type="submit" 
                size="lg" 
                className="h-12 px-12 text-base max-w-md w-full"
                data-testid="button-submit"
              >
                예약 신청하기
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}

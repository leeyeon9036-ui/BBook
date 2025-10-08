# Design Guidelines: Seongbuk-gu University Student Beauty Salon Reservation Service

## Design Approach

**Selected Approach**: Modern Service Platform with Form-Centric Design
- Primary inspiration: Clean, trustworthy booking platforms like Naver Booking, Zigzag's service forms
- Focus on clarity, ease of use, and building trust with university students
- Balances professional credibility with approachable, youthful energy

## Core Design Elements

### A. Color Palette

**Light Mode (Primary)**
- Primary: 260 60% 50% (Modern purple - professional yet approachable for beauty services)
- Primary Hover: 260 60% 45%
- Background: 0 0% 98% (Soft off-white)
- Surface: 0 0% 100% (Pure white for cards/forms)
- Text Primary: 220 15% 20%
- Text Secondary: 220 10% 50%
- Border: 220 10% 88%
- Success: 145 60% 45%
- Error: 0 70% 55%

**Dark Mode**
- Primary: 260 55% 60%
- Background: 220 15% 10%
- Surface: 220 12% 14%
- Text Primary: 0 0% 95%
- Border: 220 10% 25%

### B. Typography

**Font Families**
```
Primary: 'Noto Sans KR', sans-serif (excellent Korean support)
Accent: 'Inter', sans-serif (for numbers, form labels)
```

**Scale**
- Hero Title: text-5xl md:text-6xl font-bold (48-60px)
- Section Heading: text-3xl md:text-4xl font-bold (30-36px)
- Card Title: text-xl font-semibold (20px)
- Body: text-base (16px)
- Small: text-sm (14px)
- Form Labels: text-sm font-medium (14px)

### C. Layout System

**Spacing Units**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: p-2, gap-2 (8px)
- Standard spacing: p-4, p-6, gap-4 (16-24px)
- Section spacing: py-12, py-16, py-20 (48-80px)
- Major spacing: py-24 (96px for section separators)

**Container Strategy**
- Page container: max-w-7xl mx-auto px-4 md:px-6
- Form container: max-w-4xl mx-auto
- Content max-width: max-w-3xl for text-heavy sections

### D. Component Library

**Landing Page Structure** (5 sections minimum)

1. **Hero Section** (h-auto py-16 md:py-24)
   - Large heading: "성북구 대학생 전용 미용실 예약"
   - Subtitle: "학생 할인 가능한 미용실을 쉽게 예약하세요"
   - Trust indicators: "이미 500+ 학생들이 이용 중" badge
   - Soft gradient background (purple to blue, subtle)
   - CTA button: "지금 예약하기" (smooth scroll to form)
   - Light decorative elements (abstract shapes or subtle patterns)

2. **How It Works Section** (py-16)
   - 3-column grid (stack on mobile)
   - Icons + Title + Description for each step
   - Step 1: 정보 입력 / Step 2: 조건 선택 / Step 3: 예약 완료
   - Use numbered badges (1, 2, 3) with primary color

3. **Main Form Section** (py-20, most important)
   - Two-panel layout on desktop (grid-cols-1 lg:grid-cols-2)
   - Left panel: "예약 정보" (Reservation Info)
   - Right panel: "요구 사항" (Requirements)
   - Single submit button below both panels, centered
   - Form card with shadow-lg, rounded-2xl, bg-white

4. **Benefits Section** (py-16)
   - 2x2 grid of benefit cards (stack on mobile)
   - Benefits: "학생 할인", "빠른 예약", "다양한 선택", "맞춤 추천"
   - Icon + Title + Short description per card
   - Subtle hover effects (scale-105 transition)

5. **FAQ or Reassurance Section** (py-12)
   - Address common concerns
   - "예약 취소는 어떻게 하나요?" etc.
   - Accordion-style or simple Q&A list

**Form Design Specifications**

*Reservation Info Panel:*
- Date picker: Full-width, calendar icon
- Time select: Dropdown, 10:00 AM - 8:00 PM, 30-min intervals
- Name: Single line input
- Phone: Tel input with placeholder (010-XXXX-XXXX)
- School: Text input with datalist suggestions
- Student ID: Number input
- Email: Email input with validation

*Requirements Panel:*
- Location: Select dropdown with all 성북구 동 options (정릉동, 안암동, 보문동, etc.)
- Price range: Select dropdown (1만원대, 2만원대, 3만원대, 4만원 이상)
- Desired service: Text input or checkboxes (커트, 펌, 염색, 클리닉)
- Additional notes: Textarea (rows: 4, optional label clearly marked)
- Photo upload: File input with drag-drop zone, "선택사항" tag, preview thumbnails

*Submit Button:*
- Full-width on mobile, max-w-md centered on desktop
- Height: h-12
- Text: "예약 신청하기" with arrow icon
- Primary color background with hover state

**Admin Page Design**

*Login Screen:*
- Centered card (max-w-md)
- Simple, minimal design
- Logo/title at top
- Username and password inputs
- Login button

*Admin Dashboard:*
- Header with logout button
- Title: "예약 관리"
- Table view with alternating row colors
- Columns: Date, Time, Name, School, Phone, Location, Price Range, Service, Status
- Responsive: Card layout on mobile, table on desktop
- Search/filter controls at top
- Badge colors for different statuses
- Export to CSV button

**Shared UI Elements**

*Buttons*
- Primary: bg-primary text-white, rounded-lg, px-6 py-3
- Secondary: border-2 border-primary text-primary, rounded-lg
- Icon buttons: w-10 h-10, rounded-full, centered icon

*Input Fields*
- Height: h-12
- Border: border border-gray-300, focus:border-primary focus:ring-2 focus:ring-primary/20
- Rounded: rounded-lg
- Padding: px-4
- Font: text-base
- Labels: Above input, text-sm font-medium mb-2
- Required indicator: Red asterisk (*) next to label

*Cards*
- Background: bg-white dark:bg-surface
- Border: border border-gray-200 or shadow-md
- Rounded: rounded-xl or rounded-2xl
- Padding: p-6 md:p-8

### E. Animations

**Minimal, Purposeful Only**
- Button hover: Subtle scale (scale-105) and brightness change
- Form focus: Border color transition (duration-200)
- Card hover: Shadow increase (hover:shadow-xl transition-shadow)
- Scroll-triggered: Fade-in for sections (use Intersection Observer)
- NO complex animations, page transitions, or parallax effects

## Images

**Hero Section Background**
- Semi-transparent gradient overlay with abstract geometric patterns or soft bokeh effect
- OR: Blurred background image of modern, clean salon interior (bright, welcoming)
- Subtle, not distracting from content

**Benefits/Features Icons**
- Use icon library (Heroicons or Lucide) for consistent style
- Sizes: w-12 h-12 for feature icons, w-6 h-6 for inline icons

**No large hero image** - This is a form-focused service page, not a visual showcase

## Mobile-First Approach

- All forms stack vertically on mobile
- Touch-friendly tap targets (minimum 44x44px)
- Bottom-anchored submit button on mobile for easy thumb reach
- Collapsible sections for long forms
- Optimized select dropdowns for mobile (native pickers)

## Accessibility & Korean Language Support

- All labels in Korean with clear hierarchy
- High contrast ratios (WCAG AA minimum)
- Form validation messages in Korean
- Error states clearly visible (red border + icon + message)
- Keyboard navigation fully supported
- Screen reader friendly (proper ARIA labels in Korean)
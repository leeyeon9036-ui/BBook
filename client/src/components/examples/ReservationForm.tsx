import ReservationForm from '../ReservationForm';

export default function ReservationFormExample() {
  return (
    <ReservationForm 
      onSubmit={(data) => console.log('Form submitted:', data)} 
    />
  );
}

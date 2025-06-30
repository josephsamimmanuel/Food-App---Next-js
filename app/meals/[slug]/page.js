import Link from "next/link";

export default function MealDetail({ params }) {
  const { slug } = params;

  return (
    <div>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', textDecoration: 'underline', textAlign: 'center' }}>Meal Detail</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
        <p style={{ color: 'white' }}>Meal ID: {slug}</p>
        <Link style={{ color: 'white' }} href="/meals">Back to Meals</Link>
      </div>
    </div>
  );
}
import Link from "next/link";

export default function Share() {
  return (
    <div>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', textDecoration: 'underline', textAlign: 'center' }}>Share Your Meal</h1>
      <div style={{ display: 'flex', gap: '30px', padding: '20px' }}>
        <Link style={{ color: 'white' }} href="/meals">Back to Meals</Link>
      </div>
    </div>
  );
}
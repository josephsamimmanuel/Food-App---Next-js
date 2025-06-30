import Link from "next/link";

export default function Meals() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', textDecoration: 'underline', textAlign: 'center' }}>Meals</h1>
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link style={{ color: 'white' }} href="/meals/chicken-biryani">Chicken Biryani</Link>
        <Link style={{ color: 'white' }} href="/meals/chicken-tikka">Chicken Tikka</Link>
        <Link style={{ color: 'white' }} href="/meals/chicken-karahi">Chicken Karahi</Link>
        <Link style={{ color: 'white' }} href="/meals/share">Share</Link>
      </div>
    </div>
  );
}
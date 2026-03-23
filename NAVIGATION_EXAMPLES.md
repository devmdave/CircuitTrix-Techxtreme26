// Add this to your Navbar.jsx or any component where you want to link to the About CircuitTrix page

// Example usage in Navbar:
import Link from 'next/link';

// In your navigation items, add:
<Link href="/about-circuittrix" className="font-body text-sm font-medium text-text-secondary hover:text-gold-primary transition-colors duration-150">
  About CircuitTrix
</Link>

// Or as a button:
<Link href="/about-circuittrix">
  <button className="btn btn-outline">
    Learn More About CircuitTrix
  </button>
</Link>

// For the Hero section CTA, update the "Learn More" button:
<Link href="/about-circuittrix">
  <button className="btn btn-outline min-w-[180px]">
    Learn More
  </button>
</Link>

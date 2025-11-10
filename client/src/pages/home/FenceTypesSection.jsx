import { Link } from 'wouter';
import './FenceTypesSection.css';

const fenceTypes = [
  { name: 'Arbor and Pergola', path: '/fence-options/arbor-pergola', image: 'arbor-pergola' },
  { name: 'Chain Link Fences', path: '/fence-options/chain-link', image: 'chain-link' },
  { name: 'Metal Fences', path: '/fence-options/metal', image: 'metal' },
  { name: 'Vinyl Fences', path: '/fence-options/vinyl', image: 'vinyl' },
  { name: 'Wood Fences', path: '/fence-options/wood', image: 'wood' },
  { name: 'Outdoor Shower', path: '/fence-options/outdoor-shower', image: 'outdoor-shower' },
];

export default function FenceTypesSection() {
  return (
    <section className="fence-types-section" data-testid="section-fence-types">
      <div className="fence-types-container">
        <h2 className="fence-types-title" data-testid="text-fence-types-title">
          Fence Types and Services
        </h2>
        <div className="fence-types-grid">
          {fenceTypes.map((type) => (
            <Link 
              key={type.path} 
              href={type.path}
              data-testid={`link-fence-type-${type.image}`}
            >
              <div className="fence-type-card" data-testid={`card-${type.image}`}>
                <div className="fence-type-image-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 300">
                    <rect fill="#94a3b8" width="400" height="300"/>
                    <text x="50%" y="50%" fontSize="18" fill="#fff" textAnchor="middle" dominantBaseline="middle">
                      {type.name}
                    </text>
                  </svg>
                </div>
                <h3 className="fence-type-name">{type.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

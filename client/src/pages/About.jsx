import './Pages.css';

export default function About() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title" data-testid="text-page-title">About Us</h1>
        <p className="page-description" data-testid="text-page-description">
          Learn more about All State Fence and our commitment to quality craftsmanship.
        </p>
      </div>
    </div>
  );
}

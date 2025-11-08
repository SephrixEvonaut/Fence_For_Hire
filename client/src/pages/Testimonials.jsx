import './Pages.css';

export default function Testimonials() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title" data-testid="text-page-title">Testimonials</h1>
        <p className="page-description" data-testid="text-page-description">
          Read what our satisfied customers have to say about our fencing services.
        </p>
      </div>
    </div>
  );
}

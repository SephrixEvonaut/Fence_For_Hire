import './Pages.css';

export default function Catalog() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title" data-testid="text-page-title">Catalog</h1>
        <p className="page-description" data-testid="text-page-description">
          Browse our complete catalog of fencing products and accessories.
        </p>
      </div>
    </div>
  );
}

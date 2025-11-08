import './Pages.css';

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title" data-testid="text-page-title">Home</h1>
        <p className="page-description" data-testid="text-page-description">
          Welcome to All State Fence. We provide quality fencing solutions for residential and commercial properties.
        </p>
      </div>
    </div>
  );
}

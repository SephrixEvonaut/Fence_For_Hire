export default function About() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4" data-testid="text-page-title">About Us</h1>
        <p className="text-lg text-muted-foreground" data-testid="text-page-description">
          Learn more about All State Fence and our commitment to quality craftsmanship.
        </p>
      </div>
    </div>
  );
}

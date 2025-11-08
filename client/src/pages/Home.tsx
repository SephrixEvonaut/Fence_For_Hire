export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4" data-testid="text-page-title">Home</h1>
        <p className="text-lg text-muted-foreground" data-testid="text-page-description">
          Welcome to All State Fence. We provide quality fencing solutions for residential and commercial properties.
        </p>
      </div>
    </div>
  );
}

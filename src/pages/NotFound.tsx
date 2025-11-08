export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <a
        href="/"
        className="text-blue-600 hover:underline font-medium"
      >
        Go back home
      </a>
    </div>
  );
}

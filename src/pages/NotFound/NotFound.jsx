import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <FaArrowLeft />
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

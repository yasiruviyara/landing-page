
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-9xl font-bold text-[--primary-color]">404</h1>
                <p className="text-2xl text-gray-800 mt-4">Oops! Page not found.</p>
                <p className="text-lg text-gray-600 mt-2">
                    The page you`re looking for doesn`t exist.
                </p>
                <Link
                    to="/"
                    className="mt-6 px-6 py-3 text-white bg-[--primary-color] hover:bg-[--analogous-color-1] rounded-lg transition"
                >
                    Go Back Home
                </Link>
            </div>
        </>
    );
}

export default NotFound;
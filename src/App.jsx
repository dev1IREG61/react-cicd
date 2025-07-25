import { useState } from 'react'


export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email.trim()) setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setEmail("");
    setIsSignedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">My Home Page</h1>
          {isSignedIn && (
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center py-20 px-4">
        {!isSignedIn ? (
          <form
            onSubmit={handleSignIn}
            className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome back, {email}!
            </h2>
            <p className="text-gray-600">You are now signed in.</p>
          </div>
        )}
      </main>
    </div>
  );
}
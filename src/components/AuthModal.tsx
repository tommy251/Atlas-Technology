import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const AuthModal = () => {
  const { isAuthOpen, setIsAuthOpen, signIn, signUp } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isAuthOpen) return null;

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    const result = isSignUp
      ? await signUp(email, password, fullName)
      : await signIn(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error.message);
    } else {
      setIsAuthOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg p-8 w-full max-w-md shadow-xl">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
          onClick={() => setIsAuthOpen(false)}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">{isSignUp ? "Create Account" : "Sign In"}</h2>

        {isSignUp && (
          <input
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}
        <input
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          className="w-full bg-black text-white py-2 rounded mb-3 hover:bg-gray-800 disabled:opacity-50"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Please wait..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <button
          className="w-full text-gray-500 text-sm hover:text-gray-700"
          onClick={() => { setIsSignUp(!isSignUp); setError(""); }}
        >
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
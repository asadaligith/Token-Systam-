"use client";
import { FcGoogle } from "react-icons/fc";
import {signInWithGoogle} from "../../../firebase/auth";
import { useState } from "react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  return (
     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-300 mb-2">Token Manager</h1>
          <p className="text-gray-600">Manage tokens efficiently</p>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-center text-gray-700 font-semibold">
            Sign in to continue
          </p>
        </div>

        <button
          onClick={signInWithGoogle}
          disabled={loading}
          className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg 
                hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-3 font-medium shadow-sm"
                >
          <FcGoogle size={20} />
          {loading ? 'Logging in...' : 'Continue with Google'}
        </button>

        <p className="text-center text-gray-600 text-sm mt-6">
          By logging in, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </div>
  );
}
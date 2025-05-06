export default function Home() {
    return (
      <main className="min-h-screen 
      bg-white text-gray-800 p-6 
      md:p-16 
      grid 
      md:grid-cols-2 
      items-center">
        {/* Left side */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="text-3xl text-blue-600">🌐</div>
            <h1 className="text-3xl font-bold text-blue-600">Acme</h1>
          </div>
  
          <h2 className="text-2xl font-semibold mb-4">Welcome to Acme.</h2>
          <p className="mb-6 text-lg">
            This is the example for the{" "}
            <a
              href="https://nextjs.org/learn"
              className="text-blue-600 underline"
            >
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
  
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700 transition">
            <span>Log in</span>
            <span>→</span>
          </button>
        </div>
  
        {/* Right side */}
        <div className="hidden md:block">
          <img
            src="/hero-mobile.png" // replace with your actual path
            alt="Screenshot of dashboard"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </main>
    );
  }
  
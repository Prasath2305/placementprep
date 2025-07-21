// import Head from 'next/head';
// import Aurora from '../ui/Aurora';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-black flex flex-col">
//       <main className="container mx-auto px-6 flex-grow flex items-center justify-center">
//         {/* Hero Section */}
//         <section className="text-center py-20">
//           <h1 className="text-5xl font-bold text-white mb-6">
//             Ace Your <span className="text-3xl pb-2 text-center md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Placement Interviews</span>
//           </h1>
//           <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
//             Comprehensive preparation platform with coding practice, interview questions, 
//             company-specific resources, and mock tests.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
//               Get Started
//             </button>
//             <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
//               Explore Resources
//             </button>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }





import Head from 'next/head';
import Aurora from '../ui/Aurora';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-10">
        <Aurora
          colorStops={["#c026d3", "#9333ea", "#5b21b6"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.5}
        />
      </div>
      
      <Head>
        <title>Placement Interview Preparation Platform</title>
        <meta name="description" content="Ace your placement interviews with our comprehensive preparation platform" />
      </Head>

      <main className="container mx-auto px-6 flex-grow flex items-center justify-center">
        <section className="text-center py-20 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            Ace Your <span className="text-3xl pb-2 text-center md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Placement Interviews</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Comprehensive preparation platform with coding practice, interview questions, 
            company-specific resources, and mock tests. Every company specific questions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Explore Resources
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
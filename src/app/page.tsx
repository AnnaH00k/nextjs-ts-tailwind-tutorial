
export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a202c] text-[#f7fafc] flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl text-center font-extrabold text-[#63b3ed] mb-6">
        Next.js + TypeScript + Tailwind CSS Tutorial
      </h1>
      <p className="text-xl text-[#e2e8f0] mb-8 max-w-3xl">
        Master the art of building modern web applications with Next.js, TypeScript, and Tailwind CSS. 
        Follow along and elevate your frontend skills.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap justify-center max-w-lg">
        <a
          href="https://github.com/AnnaH00k/nextjs-ts-tailwind-tutorial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3182ce] text-[#ffffff] py-2 px-6 rounded-lg hover:bg-[#2b6cb0] transition shadow-lg"
        >
          View GitHub Repository
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2b6cb0] text-[#ffffff] py-2 px-6 rounded-lg hover:bg-[#2b6cb0] transition shadow-lg"
        >
          Tailwind CSS Docs
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2c5282] text-[#ffffff] py-2 px-6 rounded-lg hover:bg-[#2a4365] transition shadow-lg"
        >
          TypeScript Docs
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2a4365] text-[#ffffff] py-2 px-6 rounded-lg hover:bg-[#1e293b] transition shadow-lg"
        >
          Next.js Docs
        </a>
        <a
          href="https://v0.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#63b3ed] text-[#1a202c] py-2 px-6 rounded-lg hover:bg-[#4fc3f7] transition shadow-lg"
        >
          Vercel V0 Dev
        </a>
        <a
          href="https://phosphoricons.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#90cdf4] text-[#1a202c] py-2 px-6 rounded-lg hover:bg-[#81e6d9] transition shadow-lg"
        >
          Phosphor Icons
        </a>
        <a
          href="https://nerdcave.com/tailwind-cheat-sheet"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#bee3f8] text-[#1a202c] py-2 px-6 rounded-lg hover:bg-[#b9fbc0] transition shadow-lg"
        >
          Tailwind Cheat Sheet
        </a>
      </div>

   
    </div>
  );
}

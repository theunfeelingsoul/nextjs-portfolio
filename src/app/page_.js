import Image from "next/image";
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6"
      >
        {/* Left Side - Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10 animate-fadeIn">
          <Image
            src="/me.jpg" // put your face image in /public/me.jpg
            alt="Victor Ngugi"
            width={200}
            height={200}
            className="rounded-full shadow-lg object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side - Text */}
        <div className="max-w-xl animate-slideUp">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Victor Ngugi
          </h1>

          {/* Tagline EN */}
          <p className="mt-4 text-xl md:text-2xl text-gray-700">
            Fullstack Developer & Graphic Designer
          </p>
          {/* JP Tagline - styled smaller/softer */}
          <p className="text-base text-gray-500">
            フルスタック開発者 ＆ グラフィックデザイナー
          </p>

          {/* Short description EN */}
          <p className="mt-2 text-gray-600">
            I build fast, responsive, and user-friendly websites with database
            integration using Next.js. I also create eye-catching designs such
            as banners, posters, and creative visuals.
          </p>
          {/* JP description */}
          <p className="text-sm text-gray-500 leading-relaxed">
            Next.jsで高速で使いやすいウェブサイトを作り、データベース連携も行います。
            また、バナーやポスターなどのデザインも得意です。
          </p>

          {/* CTA buttons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300"
            >
              View Projects / プロジェクト
            </a>
            <a
              href="#contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 hover:scale-105 transition transform duration-300"
            >
              Contact Me / 連絡
            </a>
          </div>
        </div>

        {/* Tailwind Keyframes (in globals.css) */}
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl mb-4">About Me</h2>
          <p>
            I’m a developer passionate about building clean and user-friendly
            applications.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600 mb-4">
                Short description of the project.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600 mb-4">
                Short description of the project.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project →
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600 mb-4">
                Short description of the project.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="max-w-xl text-center">
          <h2 className="text-3xl mb-4">Contact</h2>
          <p>Links to GitHub, LinkedIn, and email will go here.</p>
        </div>
      </section>
    </main>
  );
}

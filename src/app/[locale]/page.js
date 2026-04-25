import { getDictionary } from "@/lib/getDictionary";

export default async function HomePage({ params }) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6"
      >
        {/* Left Side - Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10 animate-fadeIn">
          <img
            src="/me.jpg"
            alt={dict.greeting}
            className="w-48 h-48 rounded-full shadow-lg object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side - Text */}
        <div className="max-w-xl animate-slideUp">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            {dict.greeting}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-700">
            {dict.tagline}
          </p>
          <p className="mt-2 text-gray-600">{dict.description}</p>

          {/* CTA */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              {dict.cta_projects}
            </a>
            <a
              href="#contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 hover:scale-105 transition"
            >
              {dict.cta_contact}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
     {/* <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl mb-4">{dict.about_title}</h2>
          <p>{dict.about_description}</p>
        </div>
      </section>*/}

      {/* Projects Section */}
      {/*<section id="projects" className="min-h-screen bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">{dict.projects_title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dict.projects.map((project, index) => (
              <div
                key={index}
                className="border p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Contact Section */}
    {/*  <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-50"
      >
        <div className="max-w-xl text-center">
          <h2 className="text-3xl mb-4">{dict.contact_title}</h2>
          <p>Links to GitHub, LinkedIn, and email will go here.</p>
        </div>
      </section>*/}
    </main>
  );
}

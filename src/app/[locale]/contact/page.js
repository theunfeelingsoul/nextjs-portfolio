import { getDictionary} from "@/lib/getDictionary";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default async function ContactPage({ params }){
  const { locale } = params;
  const dict = await getDictionary(locale);
  const email = "nvngugi@gmail.com";
  const linkedin = "https://www.linkedin.com/in/victor-njoroge-ngugi/";
  const github = "https://github.com/theunfeelingsoul";

  return(
    <main className="min-h-screen px-6 py-20 max-w-2xl mx-auto text-center">




<div className="flex justify-center gap-6 mt-6 text-5xl">

  <a
    href={`mailto:${email}`}
    title="Email"
    aria-label="Email"
    className="text-gray-700 hover:text-blue-600 transition"
  >
    <MdEmail />
  </a>

  <a
    href={linkedin}
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
    aria-label="LinkedIn"
    className="text-gray-700 hover:text-blue-600 transition"
  >
    <FaLinkedin/>
  </a>

  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    title="GitHub"
    aria-label="GitHub"
    className="text-gray-700 hover:text-blue-600 transition"
  >
    <FaGithub />
  </a>

</div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">
        {dict.contact_title}
      </h1>

      {/* message */}
      <p className="text-gray-600 mb-10 leading-relaxed">
        {dict.contact_message}
      </p>

     

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-8">
        {dict.contact_response_note}
      </p>
    </main>
  );

}



999
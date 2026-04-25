import { getDictionary } from "@/lib/getDictionary";
import { User, Code, Lightbulb } from "lucide-react";

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">

		{/*{Intro}*/}
		<section className="text-center animate-fadeIn">
			<h1 className="text-4xl font-bold mb-4">
					{dict.about_title}
			</h1>
			<p className="text-gray-700 leading-relaxed">
		        {dict.about_description}
		    </p>
		</section>

		{/*Who I Am*/}
		<section className="animate-slideUp"	>
			<h2 className="flex items-center gap-2 text-2x1 font-semibold mt-10 space-y-4 mb-2">
				<User size={20} />
				{dict.about_intro_title}
			</h2>
				{
					dict.about_intro_text.map((para, i)=>(

							<p key={i} className="text-gray-700 mb-4">
								{para}
							</p>

						))
				}
		</section>

		{/*Skills*/}
		<section className="animate-slideUp">
			<h2 className="flex items-center gap-2  text-2x1 font-semibold mt-10 space-y-4 mb-4">
				<Code size={20} />
				{dict.about_skills_title}
			</h2>
			{/*<p className="mb-4">*/}
			<ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
				{dict.about_skills.map((skill, i) => (
		            <li
		              key={i}
		              className="border rounded-lg px-4 py-2 text-center bg-gray-50"
		            >
		              {skill}
		            </li>
	            ))}
			</ul>
		{/*</p>*/}

		</section>

		 {/* Philosophy */}
      <section className="animate-slideUp">
        <h2 className="flex items-center gap-2 text-2x1 font-semibold mt-10 space-y-4 mb-2">
          <Lightbulb size={20} />
          {dict.about_philosophy_title}
        </h2>
          {dict.about_philosophy_text.map((para, i)=>(
          	<p key={i} className="text-gray-700 mb-4">
          		{para}
          	</p>
          	))}
      </section>
     <hr/>
      
    </main>
  );
}

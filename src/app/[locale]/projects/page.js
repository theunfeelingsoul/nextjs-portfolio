// import dictionary
import {getDictionary} from "@/lib/getDictionary";
import Link from "next/link";

export default async function ProjectsPage({params}){
	const {locale} = await params;
	const dict = await getDictionary(locale);

	return (
		<main className="min-h-screen px-6 py-16 max-w-5x1 mx-auto">
			<h1  className="text-4x1 font-bold text-center mb-12">
				{dict.projects_title}
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{dict.projects.map((project,index)=>(
					<div 
						key={index} className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
					>
						<h2 className="text-tx1 fint-semibold mb-2">
							{project.title }
						</h2>

						<p className="tetx-grey-600 mb-4">
							{project.description}
						</p>
						<Link 
							href={`/${locale}/projects/${project.slug}`}
							className="text-blue-600 hover:underline"
						>
							View Project -
						</Link>
					</div>
				))}
			</div>	
		</main>

	); 
}
import { Link } from 'react-router-dom';
import { Loader } from './'


import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { useGetKittiesQuery } from "../services/kittiesApi";



const Article = () => {
	const { data: catsList, isFetching } = useGetKittiesQuery();
	const cats = catsList?.data;
	
	
	if (isFetching) return (
		<div className="w-full items-center content-center justify-center">
			<Loader />
		</div>
	);

	return (
		<>
			<h1 className="text-3xl  mb-6 text-gradient">Kitties</h1>
			<p className="text-white mb-6 text-sm">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore
				molestiae distinctio cumque quo soluta voluptates tempore facilis. Alias
				excepturi dignissimos a dolorem ab deserunt fugiat recusandae
				reprehenderit esse quod.
			</p>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
				{cats.map((cat) => (
					<Link to={`/kitties/${cat.id}`}>
					<div className="card" key={cat.id}>
						<img
							src={`http://localhost:8055/assets/${cat.photos[0].directus_files_id}`}
							alt={cat.id}
							className="w-full h-32 sm:h-48 object-cover"
						></img>
						<div className="m-4">
							<span className="font-bold flex">
								{`${cat.name}`}
								{cat.genre == "male" ? (
									<span className="pl-2 pt-1">{<BiMaleSign />}</span>
								) : (
									<span className="pl-2 pt-1">{<BiFemaleSign />}</span>
								)}
							</span>
							<span className="block text-gray-500 text-sm h-14 truncate">
								{`${cat.description}`}
							</span>
							<div className="badge">
								{cat.adopted == "adopted" ? (
									<span>J'ai trouvé une maison</span>
								) : (
									<span>Recherche une famille</span>
								)}
							</div>
						</div>
					</div>
					</Link>
				))}
			</div>
		</>
	);		
};

export default Article;

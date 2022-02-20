import { useParams } from 'react-router-dom';
import { useGetKittyDetailsQuery } from "../services/kittiesApi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


import { Loader } from '../components';

const Kitty = () => {
	const { kittyId } = useParams();
	const { data: catDetail, isFetching } = useGetKittyDetailsQuery(kittyId);


	const cat = catDetail?.data;
	const slider = catDetail?.data?.photos;

	if (isFetching)
		return (
			<div className="w-full items-center content-center justify-center">
				<Loader />
			</div>
		);

	return (
		<div className="w-full h-screen gradient-bg-welcome">
			<Carousel>
				{ slider.map((slide) => (
					<div
						className="h-[600px] w-full bg-no-repeat bg-center bg-cover overflow-hidden select-none relative"
						key={slide?.id}
						style={{
							backgroundImage: `url(http://localhost:8055/assets/${slide?.directus_files_id})`,
						}}
					></div>
				))}
			</Carousel>
			<div className="text-white">
				<h1 className="">{cat?.name}</h1>
				<span>{cat?.tag}</span>
				<span>{cat?.adopted }</span>
				<p>{cat?.genre}</p>
				<p>{cat?.description}</p>
			</div>	
		</div>
	);
};;

export default Kitty;


import React from "react";
import { Loader } from "./"


import moment from 'moment';

import { useGetEventsQuery } from "../services/kittiesApi";


const Event = () => {

	const { data: eventsList, isFetching } = useGetEventsQuery();
	const events = eventsList?.data;

	if (isFetching)
		return (
			<div className="w-full items-center content-center justify-center">
				<Loader />
			</div>
		);


	return (
		<>
			<h1 className="text-3xl mt-6 mb-6 text-gradient">Events</h1>
			<p className="text-white mb-6 text-sm">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore
				molestiae distinctio cumque quo soluta voluptates tempore facilis. Alias
				excepturi dignissimos a dolorem ab deserunt fugiat recusandae
				reprehenderit esse quod.
			</p>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
				{events.map((event) => (
					<div className="card" key={event.id}>
						<img
							src={`http://localhost:8055/assets/${event.photos[0].directus_files_id}`}
							alt={event.id}
							className="w-full h-32 sm:h-48 object-cover"
						></img>
						<div className="m-4">
							<span className="font-bold">{`${event.name}`}</span>
							<span className="block text-gray-500 text-sm">{`${event.description}`}</span>
							<div className="badge">
								<span>{`${moment(event.date).fromNow()}`}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Event;

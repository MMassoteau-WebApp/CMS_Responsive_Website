import React from "react";
import chat from "../image/chats/chat1-3.jpg";

const Hero = () => {
	return (
		<>
			<div className="h-4/5 w-full">
				<img
					src={chat}
					alt="chat1"
					className="relative h-96 w-full object-cover bg-black opacity-100"
				></img>
			</div>
			<div className="absolute mt-[49px] h-[385px] w-full top-4 bg-black opacity-50"></div>
		</>
	);
};

export default Hero;

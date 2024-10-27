import React from 'react';

const About = () => {
	return (
		<div className="h-screen home-bg2 flex justify-center items-center">
			<div className="flex flex-col items-center gap-[20px] max-2xl:gap-[15px] max-md:gap-[10px] p-[100px_160px] max-2xl:p-[80px_140px] max-xl:p-[60px_100px] max-md:p-[20px] relative z-10">
				<h2 className="text-[48px] max-2xl:text-[36px] max-md:text-[20px] font-semibold text-white text-center uppercase">Welcome to DXA Concept Designs</h2>
				<div className="w-full flex flex-col items-center gap-[10px]">
					<p className="text-[20px] max-2xl:text-[18px] max-md:text-[14px] text-white text-center xl:w-2/3">
						Welcome to DXA Concept, a visionary in the world of architectural and interior design. Since our inception in 2022, we have dedicated ourselves to transforming spaces into bespoke
						environments that resonate with the needs, aspirations, and styles of our clients. Our journey is one of innovation, creativity, and unrelenting dedication to excellence in design.
					</p>
					<p className="text-[20px] max-2xl:text-[18px] max-md:text-[14px] text-white text-center xl:w-2/3">
						Founded in 2022, DXA Concept was born out of a passion for creating spaces that are not just structures but reflections of the people who inhabit them. With a deep understanding of both
						the art and science of design, our team embarked on a mission to offer personalized, innovative, and sustainable design solutions. We believe in the power of design to transform lives, and
						this belief is at the core of everything we do.
					</p>
				</div>
				<button className="bg-white hover:bg-transparent text-black hover:text-white border-2 border-white w-fit p-[15px_40px] max-2xl:p-[12px_30px] max-md:p-[12px_24px] text-[20px] max-2xl:text-[18px] max-md:text-[14px] uppercase font-medium mt-2">Know More</button>
			</div>
		</div>
	);
};

export default About;

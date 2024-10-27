import React from 'react';

const Services = () => {
	const serviceData = [
		{
			id: 1,
			title: '3D Architectural Renderings',
			desc: 'At DXA Concept, we believe in pushing the boundaries of architectural visualization. Established in 2022, our journey began with a passion for blending art and architecture. Today, we are a leading provider of 3D architectural renderings, helping architects, designers, and real estate developers bring their projects to life before the first brick is laid.',
		},
		{
			id: 2,
			title: 'Architectural Design Services',
			desc: "DXA Concept creates environments that inspire living, working, and thriving, not just buildings. Our architectural design services are tailored to our clients' specific needs and visions. From the first sketches to the final blueprint, we are committed to design and functionality excellence.",
		},
		{
			id: 3,
			title: 'Architectural Consultation',
			desc: "Begin your architectural journey with expert guidance at DXA Concept. Our architectural consultation services are the first step in transforming your vision into a tangible reality. Whether you're planning a new construction, a renovation, or seeking creative solutions for a unique space, our team is here to provide the expertise and insight you need.",
		},
		{
			id: 4,
			title: 'Interior Design',
			desc: 'DXA Concept believes that interior design is about creating environments that reflect and enhance the way people live, work, and interact. Our talented designers collaborate closely with clients to create interiors that are not only visually stunning, but also highly functional and tailored to individual requirements.',
		},
		{
			id: 5,
			title: 'Custom Home Design',
			desc: "Embark on a journey of architectural artistry with DXA Concept's Custom Home Design services. We specialize in creating homes that are as unique as the individuals who live in them. Our approach is to design not just houses, but personalized living spaces that resonate with the lifestyle, preferences, and dreams of our clients.",
		},
	];
	return (
		<div className="h-screen home-bg3 flex justify-center items-center">
			<div className="flex flex-col items-center gap-[20px] max-2xl:gap-[15px] max-md:gap-[10px] p-[100px_160px] max-2xl:p-[80px_140px] max-xl:p-[60px_100px] max-md:p-[20px] relative z-10">
				<h2 className="text-[48px] max-2xl:text-[36px] max-md:text-[20px] font-semibold text-white text-center uppercase">What Can We Offer For You</h2>
				<p className="text-[20px] max-2xl:text-[18px] max-md:text-[14px] text-white text-center xl:w-2/3">
					At DXA Concept, we offer a comprehensive suite of design services tailored to meet the diverse needs of our clients. Since 2022, our dedication to innovation, functionality, and aesthetic
					excellence has driven us to provide top-notch services in architectural and interior design. Explore our offerings and discover how we can transform your space.
				</p>
				<div className="grid grid-cols-10 gap-x-[30px] max-2xl:gap-x-[20px] overflow-hidden max-md:hidden">
					{serviceData?.map((item) => (
						<div className="col-span-2 border border-white bg-white/10 backdrop-blur-[16.2px] p-[30px_20px] max-2xl:p-[20px_15px] max-md:p-[15px] flex flex-col gap-[10px]">
							<h3 className="text-[22px] max-2xl:text-[18px] max-md:text-[16px] font-semibold max-md:font-medium text-white">{item?.title}</h3>
							<p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white line-clamp-4 max-2xl:line-clamp-3">{item?.desc}</p>
						</div>
					))}
				</div>
				<div className="grid grid-cols-10 gap-x-[30px] max-2xl:gap-x-[20px] overflow-hidden md:hidden">
					{serviceData?.slice(0,1).map((item) => (
						<div className="col-span-2 max-2xl:col-span-full border border-white bg-white/10 backdrop-blur-[16.2px] p-[30px_20px] max-2xl:p-[20px_15px] max-md:p-[15px] flex flex-col gap-[10px]">
							<h3 className="text-[22px] max-2xl:text-[18px] max-md:text-[16px] font-semibold max-md:font-medium text-white">{item?.title}</h3>
							<p className="text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-white line-clamp-4 max-2xl:line-clamp-3">{item?.desc}</p>
						</div>
					))}
				</div>
				<button className="bg-white hover:bg-transparent text-black hover:text-white border-2 border-white w-fit p-[15px_40px] max-2xl:p-[12px_30px] max-md:p-[12px_24px] text-[20px] max-2xl:text-[18px] max-md:text-[14px] uppercase font-medium mt-2">
					Discover More
				</button>
			</div>
		</div>
	);
};

export default Services;

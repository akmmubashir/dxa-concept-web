import React from 'react';
import Image from 'next/image';
import ProjectImg from '@/app/assets/home/projectImg.webp';

const Projects = () => {
	return (
		<div className="h-screen home-bg4 flex justify-center items-center">
			<div className="flex flex-col items-center gap-[20px] max-2xl:gap-[15px] max-md:gap-[10px] p-[100px_160px] max-2xl:p-[80px_140px] max-xl:p-[60px_100px] max-md:p-[20px] relative z-10">
				<div className="grid grid-cols-12 gap-[60px] max-2xl:gap-[40px]  max-md:gap-[10px_0] items-center">
					<div className="col-span-5 max-md:col-span-full rounded-[20px] overflow-hidden shadow-xl">
						<Image src={ProjectImg} alt="project-img" className="w-full object-fill" />
					</div>
					<div className="col-span-7 max-md:col-span-full flex flex-col gap-[20px] max-2xl:gap-[10px] max-md:gap-[5px]">
						<h2 className="text-[48px] max-2xl:text-[36px] max-md:text-[20px] font-semibold text-white uppercase">Our Latest Projects</h2>
						<p className="text-[20px] max-2xl:text-[18px] max-md:text-[14px] text-white">
							Explore our recent endeavors where creativity meets functionality. Each project, a testament to our commitment to innovative design and sustainability, reflects our expertise in
							transforming visions into tangible realities.
						</p>
						<button className="bg-white hover:bg-transparent text-black hover:text-white border-2 border-white w-fit p-[15px_40px] max-2xl:p-[12px_30px] max-md:p-[12px_24px] text-[20px] max-2xl:text-[18px] max-md:text-[14px] uppercase font-medium mt-2">
							Discover More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

import { ArrowDownICon } from '@/app/components/icons';
import React from 'react';

const Landing = () => {
	return (
		<div className="h-screen home-bg1 flex justify-center items-center">
			<div className="flex flex-col gap-[10px] p-[100px] max-2xl:p-[60px] max-md:p-[20px] relative z-10">
				<h1 className="text-[80px] max-2xl:text-[64px] max-md:text-[36px] font-medium text-white text-center uppercase">DXA Concept</h1>
				<h6 className="text-[32px] max-2xl:text-[26px] max-md:text-[18px] font-medium text-white text-center uppercase">UNLOCK THE POSSIBILITIES OF DESIGNING</h6>
			</div>
			<div className="absolute bottom-[90px] max-2xl:bottom-[60px] z-20">
				<button className="stroke-white hover:stroke-gray-200">
					<ArrowDownICon className={'w-[70px] max-2xl:w-[60px] h-fit'} stroke={1} />
				</button>
			</div>
		</div>
	);
};

export default Landing;

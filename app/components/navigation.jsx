import React from 'react';
import Link from 'next/link';

const Navigation = () => {
	const navigationData = [
		{ id: 1, title: 'Home', path: '/' },
		{ id: 2, title: 'Services', path: '/services' },
		{ id: 3, title: 'Gallery', path: '/gallery' },
		{ id: 4, title: '360 vista', path: '/360-vista' },
		{ id: 5, title: 'Packages', path: '/packages' },
		{ id: 6, title: 'About', path: '/about' },
		{ id: 7, title: 'Contact', path: '/contact' },
	];
	return (
		<div className="navigation-bg fixed bottom-0 z-20 py-[26px] flex justify-center items-center w-full max-md:hidden">
			<div className="flex gap-[50px] max-2xl:gap-[30px] max-lg:gap-[15px]">
				{navigationData?.map((item) => (
					<Link key={item?.id} href={`${item?.path?.toLowerCase().replace(' ', '-')}`} className="uppercase text-[22px] max-2xl:text-[18px] font-medium text-white hover:text-gray-300">
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navigation;

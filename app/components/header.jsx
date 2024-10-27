import React from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/common/logo.svg';
import Link from 'next/link';

const Header = () => {
	return (
		<div className="fixed top-0 z-40 pt-[60px] max-md:pt-[30px] flex justify-center items-center w-full">
			<Link href="/" className="w-[160px] max-2xl:w-[140px] max-md:w-[80px]">
				<Image src={Logo} alt="Logo" className="w-full" />
			</Link>
		</div>
	);
};

export default Header;

import React from 'react';
import { ArrowDownICon } from './icons';
import { InputField, TextAreaField } from './common';
const Footer = () => {
	return (
		<div className="h-screen bg-black relative z-30">
			<div className="grid grid-cols-12 h-full">
				<div className="col-span-full my-auto p-[100px_160px] max-2xl:p-[80px_140px] max-xl:p-[60px_100px] max-md:p-[20px]">
					<div className="grid grid-cols-12 pt-[20px]">
					<div className="col-span-full flex justify-center w-full">
						<button className="stroke-white hover:stroke-gray-200 rotate-180">
							<ArrowDownICon className={'w-[70px] max-2xl:w-[60px] h-fit'} stroke={1} />
						</button>
					</div>
						<div className="col-span-6">
							<div className="flex flex-col gap-[20px]">
								<InputField placeholder={'Enter the full name'} title={'Full Name*'} type={'text'} />
								<InputField placeholder={'Enter the phone number'} title={'Phone Number*'} type={'tel'} />
								<InputField placeholder={'Enter the email'} title={'Email*'} type={'email'} />
								<TextAreaField placeholder={'Enter the message'} title={'Message*'} rows={3} />
                                <button className="bg-white hover:bg-gray-800 text-[18px] max-2xl:text-[16px] max-md:text-[14px] text-black hover:text-white font-medium p-[10px_20px] w-fit">
                                    Submit
                                </button>
							</div>
						</div>
						<div className="col-span-6"></div>
					</div>
				</div>
				<div className="col-span-full w-full bg-zinc-900 py-[26px] text-center h-fit mt-auto">
					<p>© 2024 DXA Concept. Powered by GreenBug Designs</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

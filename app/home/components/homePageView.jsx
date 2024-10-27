'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Landing from './landing';
import About from './about';
import Services from './services';
import Projects from './projects';
import Testimonials from './testimonials';
import Footer from '@/app/components/footer';

const HomePageView = () => {
	const sectionVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
	};
	return (
		<div>
			<motion.div initial="initial" animate="visible" exit="exit" variants={sectionVariants} className="h-screen snap-start">
				<Landing />
			</motion.div>
			<motion.div initial="initial" animate="visible" exit="exit" variants={sectionVariants} className="h-screen snap-start">
				<About />
			</motion.div>
			<motion.div initial="initial" animate="visible" exit="exit" variants={sectionVariants} className="h-screen snap-start">
				<Services />
			</motion.div>
			<motion.div initial="initial" animate="visible" exit="exit" variants={sectionVariants} className="h-screen snap-start">
				<Projects />
			</motion.div>
			<motion.div initial="initial" animate="visible" exit="exit" variants={sectionVariants} className="h-screen snap-start">
				<Testimonials />
			</motion.div>
			<motion.div initial="initial" animate="visible" exit="exit" variants={sectionVariants} className="h-screen snap-start">
				<Footer />
			</motion.div>
		</div>
	);
};

export default HomePageView;

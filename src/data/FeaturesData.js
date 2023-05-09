import React from 'react';

import { AiFillIdcard,AiFillFile,AiOutlineGlobal } from 'react-icons/ai';
import {FaProjectDiagram } from 'react-icons/fa';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: ' File links',
		description: 'Generate dynamic, advanced & downloadable links to files.',
		icon: iconStyle(AiFillFile),
		imgClass: 'one',
	},
	{
		name: ' Vcard links',
		description: 'Create dynamic digital contact cards, tracked & downloadable.',
		icon: iconStyle(AiFillIdcard),
		imgClass: 'two',
	},
	{
		name: ' Event links',
		description: 'Dynamically create downloadable & tracked calendar files',
		icon: iconStyle(AiFillIdcard),
		imgClass: 'three',
	},
	{
		name: ' Tools',
		description: 'We are also offering you a set of 24 amount of useful web tools as a bonus',
		icon: iconStyle(AiFillIdcard),
		imgClass: 'four',
	},
	{
		name: 'Custom domains',
		description: 'Connect your own domain or use our predefined ones.',
		icon: iconStyle(AiOutlineGlobal),
		imgClass: 'five',
	},
	{
		name: 'Projects',
		description:
			'Easiest way to categorize your managed resources.',
		icon: iconStyle(FaProjectDiagram),
		imgClass: 'six',
	},
];

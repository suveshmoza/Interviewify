import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartColumn,
	faAddressCard,
	faClipboardList,
	faNotesMedical,
} from '@fortawesome/free-solid-svg-icons';

const links = [
	{
		id: 1,
		text: 'stats',
		path: '/',
		icons: <FontAwesomeIcon icon={faChartColumn} />,
	},
	{
		id: 2,
		text: 'all-jobs',
		path: 'all-jobs',
		icons: <FontAwesomeIcon icon={faClipboardList} />,
	},
	{
		id: 3,
		text: 'add-job',
		path: 'add-job',
		icons: <FontAwesomeIcon icon={faNotesMedical} />,
	},
	{
		id: 4,
		text: 'profile',
		path: 'profile',
		icons: <FontAwesomeIcon icon={faAddressCard} />,
	},
];

export default links;

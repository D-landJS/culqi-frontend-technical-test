export type StatusOption = {
	value: string;
	label: string;
};

export const statusOptions: StatusOption[] = [
	{ value: '', label: 'All Status' },
	{ value: 'alive', label: 'Alive' },
	{ value: 'dead', label: 'Dead' },
	{ value: 'unknown', label: 'Unknown' },
];

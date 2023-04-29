export interface Breeds {
	id: number;
	name: string;
	temperament: string;
}

export interface Breed extends Breeds {
	life_span: string;
	bred_for: string;
	breed_group: string;
	weight: {
		imperial: string;
		metric: string;
	};
	height: {
		imperial: string;
		metric: string;
	};
}

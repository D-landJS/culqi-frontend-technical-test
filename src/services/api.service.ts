// src/services/api.service.ts

import axios, { AxiosInstance } from 'axios';
import {
	ApiResponse,
	CharacterApiResponse,
	CharacterSearchParams,
} from '../interfaces';

class ApiService {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: 'https://rickandmortyapi.com/api',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	public async getCharacterByName(
		params: CharacterSearchParams
	): Promise<ApiResponse<CharacterApiResponse>> {
		try {
			const response = await this.api.get<ApiResponse<CharacterApiResponse>>(
				'/character/',
				{ params }
			);
			return response.data;
		} catch (error) {
			throw new Error('Error fetching character');
		}
	}
}

export default new ApiService();

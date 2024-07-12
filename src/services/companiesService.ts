import axios from "axios"
import { ICompany, ILocation } from "../interfaces/companies";

const BASE_URL = "https://fake-api.tractian.com";

export async function getAllCompanies() : Promise<ICompany[]> {
    try {
        const response  = await axios.get(`${BASE_URL}/companies`)
        return response.data;
    } catch(error) {
        throw new Error('Erro ao buscar as empresas');
    }
}

export async function getLocationsFromCompany(id: string) : Promise<ILocation[]> {
    try {
        const response  = await axios.get(`${BASE_URL}/companies/${id}/locations`)
        return response.data;
    } catch(error) {
        throw new Error('Erro ao buscar as Locations');
    }
}

export async function getAssetsFromCompany(id: string) : Promise<ILocation[]> {
    try {
        const response  = await axios.get(`${BASE_URL}/companies/${id}/assets`)
        return response.data;
    } catch(error) {
        throw new Error('Erro ao buscar os Ativos');
    }
}
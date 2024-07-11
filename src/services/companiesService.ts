import axios from "axios"
import { ICompany } from "../interfaces/companies";

const BASE_URL = "https://fake-api.tractian.com";

export async function getAllCompanies() : Promise<ICompany[]> {
    try {
        const response  = await axios.get(`${BASE_URL}/companies`)
        return response.data;
    } catch(error) {
        throw new Error('Erro ao buscar as empresas');
    }
}
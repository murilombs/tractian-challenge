import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompany } from "../interfaces/companies";
import { RootState } from "../store";

interface IInitialState {
    company: ICompany;
    listOfCompanies: ICompany[];
}

const initialState : IInitialState  = {
    company: {
        id: '',
        name: ''
    },
    listOfCompanies: []
};

export const companieSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        setCompanies: (state, action: PayloadAction<ICompany[]>) => {
            state.listOfCompanies = action.payload;
            
        },
        setcompanyInFocus: (state, action : PayloadAction<ICompany>) => {
            state.company = action.payload;
        }
    }
});

export const { setCompanies, setcompanyInFocus } = companieSlice.actions;

export const bringAllCompanies = (state: RootState) => state.companies.listOfCompanies;
export const bringSelectCompany = (state: RootState) => state.companies.company; 

export default companieSlice.reducer;

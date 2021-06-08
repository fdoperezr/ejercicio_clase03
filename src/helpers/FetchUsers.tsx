import { usersApi } from '../api/UsersApi';
import { Result, UsersResponse } from '../interfaces/UsersResponse';


export const fetchTenUsers = async(): Promise<Result[]> => {
    
    const resp = await usersApi.get<UsersResponse>('/?results=10');
    return resp.data.results; 
}
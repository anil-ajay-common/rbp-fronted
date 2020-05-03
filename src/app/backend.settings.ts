import { environment as env } from '../environments/environment';

export class BackendAppSettings {

    baseUrl:string = '';

    static endpoint = {
        getAllStates: {
            getUrl(pageNo = 0, pageSize = 10, sortBy = 'id'): string {
                const url = `states?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}`;
                return `${env.backend.baseUrl}/${url}`;
            }
        }
    };
}
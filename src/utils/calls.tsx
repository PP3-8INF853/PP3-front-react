import axios from 'axios'

const baseApi = (path: string | undefined) =>{
    let baseUrl = process.env.REACT_APP_BASEURL

    switch (path){
        case "account-service":
            baseUrl +=  process.env.REACT_APP_ACCOUNT_URL!;
            break;
        case "authentication-service":
            baseUrl +=  process.env.REACT_APP_AUTHENTICATION_URL!;
            break;
        case "transaction-service":
            baseUrl +=  process.env.REACT_APP_TRANSACTION_URL!;
            break;
        case "statement-service":
            baseUrl +=  process.env.REACT_APP_STATEMENT_URL!;
            break;
    }

    const baseApi = axios.create({
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': "true",
            "Accept": "*/*",
        },
    });

    baseApi.interceptors.request.use(req => {
        return req;
    }, error => {
        return Promise.reject(error);
    });

    baseApi.interceptors.response.use(res => {
        return res;
    }, error => {
        /*if ((error.response.status === 401)) {
            baseApi.post(baseUrl + "Users/refresh", {})
                .then(async () => {
                    window.location.reload();
                })
        }*/
        return Promise.reject(error);
    });

    return baseApi;
}

export {baseApi}
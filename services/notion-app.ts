import { API_URL } from '@env';
const apiBaseUrl = API_URL;
export interface PostData {
    title: string;
    image: {
        url: string;
    };
}

export const getPosts = async (): Promise<PostData[]> => {
    console.log(apiBaseUrl);
    try {
        const response = await fetch(`${apiBaseUrl}/api/pages`);
        return await response.json();
    } catch (e) {
        console.log({e});
    }
};

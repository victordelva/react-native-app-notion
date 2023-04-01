const apiBaseUrl = 'http://localhost:3001';

export interface PostData {
    title: string;
    image: {
        url: string;
    };
}

export const getPosts = async (): Promise<PostData[]> => {

    try {
        const response = await fetch(`${apiBaseUrl}/api/pages`);
        return await response.json();
    } catch (e) {
        console.log({e});
    }
};

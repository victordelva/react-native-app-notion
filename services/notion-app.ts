const apiBaseUrl = 'https://react-native-back-wlk1.vercel.app/';
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
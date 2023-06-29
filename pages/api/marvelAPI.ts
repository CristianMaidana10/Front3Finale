import md5 from 'md5';

const PUBLIC_KEY = '60685cdc97d1d81a848aabb873f299ba';
const PRIVATE_KEY = 'e8ac9e5db00889c4515f0729adf44881ee501b74';

const getTimestamp = () => {
    return Date.now().toString();
};

const generateHash = (timestamp: string) => {
    return md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
};

export const getComics = async () => {
    const BASE_URL = 'https://gateway.marvel.com/v1/public/comics';
    const timestamp = getTimestamp();
    const hash = generateHash(timestamp);

    try {
        const response = await fetch(`${BASE_URL}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`);
        const data = await response.json();
        const comics = data?.data?.results || [];
        return comics;
    } catch (error) {
        throw new Error('Error fetching comics from Marvel API');
    }
};

export const getComicById = async (comicId: number) => {
    const BASE_URL = 'https://gateway.marvel.com/v1/public/comics';
    const timestamp = getTimestamp();
    const hash = generateHash(timestamp);

    try {
        const response = await fetch(`${BASE_URL}/${comicId}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`);
        const data = await response.json();
        const comic = data?.data?.results[0];
        return comic;
    } catch (error) {
        throw new Error('Error fetching comic details from Marvel API');
    }
};
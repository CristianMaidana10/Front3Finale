interface IThumbnail {
    path: string;
    extension: string;
}

interface IComic {
    id: number;
    title: string;
    thumbnail: IThumbnail;
}

export type { IComic };
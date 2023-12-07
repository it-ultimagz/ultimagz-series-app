export interface SeriesData {
    title: string;
    tag: string;
    is_new: boolean;
    introduction:string;
}

export interface SeriesDataWithTagId extends SeriesData {
    tag_id: number;
}

export interface SeriesDataWithPosts extends SeriesDataWithTagId {
    posts: PostData[];
}

export interface TagData {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    meta: any[];
    _links: any;
}

export interface PostData {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    date: string;
    link: string;
    better_featured_image: {
        id: number;
        caption: string;
        source_url: string;
    };
}

export interface SeriesPageDTO {
    currentSeries: SeriesDataWithTagId;
    currentSeriesPosts: PostData[];
    error?: string;
}

export interface HomePageDTO {
    seriesData: SeriesDataWithTagId[];
    error?: string;
}

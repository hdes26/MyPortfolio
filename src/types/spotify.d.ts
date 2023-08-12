type Images = {
    height: number;
    url: string;
    width: number;
}
type Album = {
    images: Images[];
}
type Artists = {
    name: string;
}
export type Track = {
    album: Album;
    artists: Artists[];
    external_urls: { spotify: string };
    preview_url: string;
    name:string;
}

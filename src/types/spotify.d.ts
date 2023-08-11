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
type Track = {
    album: Album;
    artists: Artists[];
    external_urls: { spotify: string };
    preview_url: string;
    name:string;
}
type Item = {
    track: Track;
}
export type Data = {
    items: Item[];
}

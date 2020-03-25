import { Image } from "./image";

export interface Project {
    title: string;
    link: string;
    shortDescription: string;
    longDescription: string;
    thumbnailImageUrl: string;
    images: Image[];
}
import { Image } from "./image";

export interface Project {
    title: string;
    projectURL?: string;
    repositoryURL?: string;
    shortDescription: string;
    longDescription: string;
    thumbnailImageUrl: string;
    images: Image[];
}
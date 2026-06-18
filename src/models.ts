export interface Project {
    projectTitle: string;
    datePublished: Date;
    skills: string[];
    description: string;
    screenshots: Link[];
    links: Link[];
}

export interface Link {
    linkText: string;
    linkURL: string;
    external?: boolean;
}

export interface tag {
    tagType: string;
    tagContent: string;
}

export interface Image {
    imageSource: string;
    imageClass: string;
}

export interface ContentCard {
    id: string;
    direction: string;
    image: Image;
    paragraphs: ParagraphBlock[];
}

export interface ParagraphBlock {
    parts: ContentPair[];
}

export interface ContentPair {
    contentKey: string;
    contentValue: string;
    tuppleValue?: string;
}

export type BlockContent = ParagraphBlock | Image | Link | ContentPair;
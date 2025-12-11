export interface Project {
    projectTitle: string;
    datePublished: Date;
    skills: string[];
    description: string;
    screenshots: Link[];
    links: Link[];
}

export class Link {
    constructor(
        public linkText: string,
        public linkURL: string,
        public external?: boolean
    ) { }
}

export interface tag {
    tagType: string;
    tagContent: string;
}

export class Image {
    constructor(
        public imageSource: string,
        public imageClass: string
    ) { }
}

export interface ContentCard {
    id: string;
    direction: string;
    image: Image;
    paragraphs: ParagraphBlock[];
}

export class ParagraphBlock {
    constructor(
        public parts: ContentPair[]
    ) { }
}

export class ContentPair {
    constructor(
        public contentKey: string,
        public contentValue: string,
        public tuppleValue?: string
    ) { }
}

export type BlockContent = ParagraphBlock | Image | Link | ContentPair;
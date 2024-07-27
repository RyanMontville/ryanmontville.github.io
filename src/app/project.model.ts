export class Project {
    constructor(
        public title: string,
        public date: string,
        public skills: string[],
        public description: string,
        public screenshots: Link[],
        public links: Link[]
    ) {}
}

export class Link {
    constructor(
        public linkText: string,
        public linkURL: string
    ) {}
}
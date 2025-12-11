export class Link {
    constructor(linkText, linkURL, external) {
        this.linkText = linkText;
        this.linkURL = linkURL;
        this.external = external;
    }
}
export class Image {
    constructor(imageSource, imageClass) {
        this.imageSource = imageSource;
        this.imageClass = imageClass;
    }
}
export class ParagraphBlock {
    constructor(parts) {
        this.parts = parts;
    }
}
export class ContentPair {
    constructor(contentKey, contentValue, tuppleValue) {
        this.contentKey = contentKey;
        this.contentValue = contentValue;
        this.tuppleValue = tuppleValue;
    }
}

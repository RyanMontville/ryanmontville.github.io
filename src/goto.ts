import { ContentPair } from "./models";
import { loadData } from "./utils";

function decode(encodedString: string) {
    try {
      return atob(encodedString);
    } catch (error: any) {
      console.error('Error decoding string:', error);
      return '';
    }
}

function encode(decodedString: string) {
    try {
        return btoa(decodedString);
    } catch (error: any) {
      console.error('Error encoding string:', error);
      return '';
    }
}

async function getData() {
    try {
        const response = await fetch('src/data/file.csv');
        if (!response.ok) {
            throw new Error("Error loading file");
        }
        const data = await response.text();
        if (data) {
            const lines = data.trim().split('\n');
            const l = lines.length;
            let pairs: ContentPair[] = [];
            for (let i=0; i<l; i++) {
                const values = lines[i].split(',');
                const newPair: ContentPair = {contentKey: values[0].trim(), contentValue: values[1].trim()}
                pairs.push(newPair)
            }
            return pairs;
        }
        return null;
    } catch (error: any) {
        console.error(error);
    }
}

function lastStep(u: string) {
    window.location.href = u;
}

//
export async function g(end: string) {
    console.log("g running")
    const pairs = await getData();
    const encodedKey = encode(end);
    console.log(encodedKey);
    if (pairs) {
        const found = pairs.find(pair => pair['contentKey'] === encodedKey);
        if (found) {
            const decodedString = decode(found['contentValue']);
            lastStep(decodedString);
        }
    }
}
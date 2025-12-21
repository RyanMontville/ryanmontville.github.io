function decode(encodedString) {
    try {
        return atob(encodedString);
    }
    catch (error) {
        console.error('Error decoding string:', error);
        return '';
    }
}
function encode(decodedString) {
    try {
        return btoa(decodedString);
    }
    catch (error) {
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
            let pairs = [];
            for (let i = 0; i < l; i++) {
                const values = lines[i].split(',');
                const newPair = { contentKey: values[0].trim(), contentValue: values[1].trim() };
                pairs.push(newPair);
            }
            return pairs;
        }
        return null;
    }
    catch (error) {
        console.error(error);
    }
}
function lastStep(u) {
    window.location.href = u;
}
//
export async function g(end) {
    console.log("g running");
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

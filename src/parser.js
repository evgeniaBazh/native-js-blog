export function parser(text) {
    if (!text) {
        return text;
    }
    text = text.replace(/<\/?[^>]+>/g,'');
    const chanks = text.match(/\[img src=".*"\]/gm);
    if (!chanks) {
        return text;
    }
    chanks.forEach(img => {
        const preSep = 'src="';
        const pre = img.slice(img.indexOf(preSep) + preSep.length);
        const src = pre.slice(0, pre.indexOf('"'));
        text = text.replace(img, `<img src="${src}">`);
    })
    
    return text;
}
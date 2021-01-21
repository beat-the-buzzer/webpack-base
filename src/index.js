import './style.scss';
const wds = ['HEllo', 'WorLD', '!'];
const wdsLower = wds.map(value => value.toLowerCase())

document.write(`<h1>${wdsLower.join(' ')}</h1>`);
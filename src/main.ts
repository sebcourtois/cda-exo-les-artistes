import './style.css'
import {artworks} from "./artworks.ts";

function renderAllArtworks() {
    return artworks.map(art => `<img src=${art.imageFile} alt=${art.title}>`)
}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${renderAllArtworks()}
`
import "./style.css";
import {ARTWORK_DB} from "./artworks.ts";

function renderArtistsNavBar() {
    const artists: Set<string> = new Set(ARTWORK_DB.map(art => art.artist));
    return Array.from(artists).map(lastName =>
        `<p class="artist-navbar-item">${lastName}</p>`
    ).join("\n");
}

function renderArtistGallery(someArtist: string) {
    const artworks = ARTWORK_DB.filter(art => art.artist === someArtist)
    return `
<h1 id="gallery_banner">Galerie ${someArtist}</h1>
<div id="gallery_body">
    ${artworks.map(art => `
    <article class="gallery-item">
        <img class="gallery-item-img" src=${art.imageFile} alt=${art.title}>
        <p class="gallery-item-title">${art.title}</p>
    </article>
    `.trim()).join("\n")}
</div>
`.trim()
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<header id="header_layout">
    <div id="logo">
        <img src="/resources/img/logo-art-peinture.png" alt="logo-art-peinture.png">
    </div>
    <h1 id="les_artistes_peintres">Les Artistes Peintres</h1>
</header>
<nav id="artist_navbar">
    ${renderArtistsNavBar()}
</nav>
<main>
    <div id="banner_layout">
        <div id="banner_img">
            <img src="resources/img/img_baniere.png" alt="img_baniere.png">
        </div>
        <div id="banner_body">
            <h1>Ce que nous faisons</h1>
            <p>Nous avons pour mission de mettre en lumière et de promouvoir les œuvres de peintres, en créant un lien entre les artistes et un public passionné.</p>
        </div>
    </div>
    <div id="content_body_layout">
        <aside id="aside_navbar">
            <p class="aside-navbar-item">Nos Productions</p>
            <p class="aside-navbar-item">Qui Sommes-Nous ?</p>
            <p class="aside-navbar-item">Notre Philosophie</p>
            <p class="aside-navbar-item">Nous Contacter</p>
        </aside>
        <section id="gallery_layout">
        </section>
    </div>
</main>
<footer id="footer_layout">
    <p>© Copyright Art Fabric</p>
</footer>
`;

function handleNavbarItemClicked(event: MouseEvent) {
    const navItem = event.target as HTMLElement
    const artist = navItem.textContent
    if (!artist) return

    const prevSel = document.querySelector<HTMLElement>(
        ".artist-navbar-item[data-selected]"
    )
    if (prevSel !== null) {
        prevSel.removeAttribute("data-selected")
    }
    navItem.setAttribute("data-selected", "")

    document.querySelector("#gallery_layout")!.innerHTML = renderArtistGallery(artist)
}

const navbarItems = document.querySelectorAll<HTMLElement>(".artist-navbar-item")
for (let navItem of navbarItems) {
    navItem.addEventListener("click", handleNavbarItemClicked)
}
import "./style.css";
import {artworks} from "./artworks.ts";

function renderArtistsNavBar() {
    let artists: Set<string> = new Set(artworks.map(art => art.artist));
    console.log(artists);

    return Array.from(artists).map(lastName =>
        `<p class="artist-navbar-item">${lastName}</p>`).join("\n"
    );
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<header class="header-layout">
    <img src="/resources/img/logo-art-peinture.png" alt="logo-art-peinture.png">
    <h1 class="les-artistes-peintres">Les Artistes Peintres</h1>
</header>
<nav class="artist-navbar">
    ${renderArtistsNavBar()}
</nav>
<main>
    <div class="banner-layout">
        <div class="banner-img">
            <img src="resources/img/img_baniere.png" alt="img_baniere.png">
        </div>
        <div>
            <h1>Ce que nous faisons</h1>
            <p>Nous avons pour mission de mettre en lumière et de promouvoir les œuvres de peintres, en créant un lien entre les artistes et un public passionné.</p>
        </div>
    </div>
        <div class="content-body-layout">
            <aside class="aside-navbar">
                <p class="aside-navbar-item">Nos Productions</p>
                <p class="aside-navbar-item">Qui Sommes-Nous ?</p>
                <p class="aside-navbar-item">Notre Philosophie</p>
                <p class="aside-navbar-item">Nous Contacter</p>
            </aside>
        <div class="artwork-layout"></div>
    </div>
</main>
<footer class="footer-layout">
    <p>© Copyright Art Fabric</p>
</footer>
`;
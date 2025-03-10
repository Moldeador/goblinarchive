<script>
    import PortfolioItem from "../lib/PortfolioItem.svelte";

    let imageDndPublications = "/images/dnd-publications.png";
    let imageApp = "/images/app-roll-for-initiative.png";
    let imageCV = "/images/CV-image.png";
    let imagePapers = "/images/papers-3.png";
    let imagePoems = "/images/poemas.png";
    let imageMidjourney = "/images/deck-of-many-things.png";

    let linkDnd = "https://www.dmsguild.com/browse.php?author=Santiago%20Cabrera";
    let linkApp = "https://rollforinitiative.goblinarchive.com";
    let linkCV = "/pdfs/cv_goblinarchive.pdf";
    let linkPapers = "https://arxiv.org/search/hep-th?searchtype=author&query=Cabrera,+S";
    let linkPoems = "https://buscadbuscadlos.blogspot.com/";
    let linkMidjourney = "https://santibanti.itch.io/the-deck-of-many-things";
</script>

<main>

  <div class="top">
    <h2>Santi's Portfolio</h2>
  </div>

  <div class="center">
    <PortfolioItem itemTitle={"App"} imageSrc={imageApp} link={linkApp}/>
    <PortfolioItem itemTitle={"D&D"} imageSrc={imageDndPublications} link={linkDnd}/>
    <PortfolioItem itemTitle={"Resumé"} imageSrc={imageCV} link={linkCV}/>
    <PortfolioItem itemTitle={"Papers"} imageSrc={imagePapers} link={linkPapers}/>
    <PortfolioItem itemTitle={"Poems"} imageSrc={imagePoems} link={linkPoems}/>
    <PortfolioItem itemTitle={"Itch"} imageSrc={imageMidjourney} link={linkMidjourney}/>
  </div>

  <div class="bottom">
    <a href="/">Go back to home page</a>
  </div>

</main>


<style>


  .center{
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  }
  a{
    color: var(--colour-grey)
  }

</style>
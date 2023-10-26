<script>
    import PortfolioItem from "../lib/PortfolioItem.svelte";
    let imageDndPublications = "/images/dnd-publications.png";
    let imageApp = "/images/app-roll-for-initiative.png";
    let imageCV = "";
    let imagePapers = "/images/papers-2.png";
    let imagePoems = "/images/poemas.png";
    let imageMidjourney = "/images/deck-of-many-things.png";

</script>

<main>


  <div class="top">

    <h2>Santi's Portfolio</h2>

  </div>

  <div class="center">
    <PortfolioItem itemTitle={"D&D"} imageSrc={imageDndPublications}/>
    <PortfolioItem itemTitle={"App"} imageSrc={imageApp}/>
    <PortfolioItem itemTitle={"Resumé"} imageSrc={imageCV}/>
    <PortfolioItem itemTitle={"Papers"} imageSrc={imagePapers}/>
    <PortfolioItem itemTitle={"Poems"} imageSrc={imagePoems}/>
    <PortfolioItem itemTitle={"Midjourney"} imageSrc={imageMidjourney}/>

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
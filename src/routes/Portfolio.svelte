<script>
    import PortfolioItem from "../lib/PortfolioItem.svelte";
    let imageDndPublications = "/images/dnd-publications.png";

</script>

<main>


  <div class="top">

    <h2>Santi's Portfolio</h2>

  </div>

  <div class="center">
    <PortfolioItem itemTitle={"D&D"} imageSrc={imageDndPublications}/>
    <PortfolioItem itemTitle={"App"}/>
    <PortfolioItem itemTitle={"CV"}/>
    <PortfolioItem itemTitle={"Papers"}/>

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
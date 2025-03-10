<script>
    import BlogItem from "../lib/BlogItem.svelte";
    let imageDndPublications = "/images/dnd-publications.png";
    let linkDnd = "https://www.dmsguild.com/browse.php?author=Santiago%20Cabrera";

</script>
<main>

    <div class="top">
        <h2>Arkham City</h2>
    </div>

    <div class="center">
        <BlogItem itemTitle={"Amidst the Ancient Trees"} link={linkDnd}/>
    </div>
    
    <div class="bottom">
        <a href="/">Go back to home page</a>
    </div>
</main>

<style>

  main{
    color:var(--colour-arkham-font);
    background:var(--colour-arkham-background);
  }

  a{
    color: var(--colour-grey)
  }

</style>
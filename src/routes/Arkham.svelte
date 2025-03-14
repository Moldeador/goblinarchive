<script>
    import BlogItem from "../lib/BlogItem.svelte";
</script>
<main>

    <div class="top">
        <h2>Amidst the Ancient Trees</h2>
        <div class="subtitle">
          <p>Investigator's Log</p>

        </div>
    </div>

    <div class="center">
        <BlogItem itemTitle={"Day 1"}>   </BlogItem>
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
  
  .subtitle{
    display: flex;
    justify-content: center;
    transform: rotate(355deg);
    font-size: 2em;
    font-family: 'Rock Salt', cursive;
    margin-top: -3em;
  }

</style>
<script>
    import ButtonInHomePage from '../lib/ButtonInHomePage.svelte';

</script>

<main>

  <div class="center">

    <h1>Goblin 𓃛 Archive</h1>

    <div>
      <ButtonInHomePage buttonName={"Santi's Portfolio"} locationRef={"#/portfolio"}/>
    </div>
    <div>
      <ButtonInHomePage buttonName={"Arkham City"}  locationRef={"#/arkham"}/>

    </div>

  
</div>

  <div class="bottom">
    <p>Welcome to the personal site of Santiago Cabrera, the goblins are busy adding more content!</p>
  </div>

</main>


<style>
  .center{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  }
  .bottom{
    color: var(--colour-grey);
  }
</style>
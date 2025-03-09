<script>
    import ButtonInHomePage from '../lib/ButtonInHomePage.svelte';

</script>

<main>

  <div class="center">

    <h1>Goblin 𓃛 Archive</h1>

    <div>
      <ButtonInHomePage buttonName={"Santi's Portfolio"} />
    </div>
    <div>
      <ButtonInHomePage buttonName={"Arkham City"} />

    </div>

  
</div>

  <div class="bottom">
    <p>Welcome to the personal site of Santiago Cabrera, click on the button to see my portfolio!</p>
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
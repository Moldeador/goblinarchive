<script>
  import ButtonGoToPortfolio from '../lib/ButtonGoToPortfolio.svelte'

</script>

<main>

  <div class="center">

    <h1>Goblin 𓃛 Archive</h1>

    <div>
      <ButtonGoToPortfolio />
    </div>

  
</div>

  <div class="bottom">
    <span></span>
    <span>Welcome to the personal site of Santiago Cabrera, click on the button to see my portfolio!</span>
    <span>Locked!</span>
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
    width: 100%;
    color: var(--colour-grey);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
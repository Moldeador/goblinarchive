<script>
    import LockedItem from "../lib/LockedItem.svelte";
</script>

<main>
  <div class="gameContainer">

    <LockedItem name={"door"} x={200} y={0} width={200} height={400}/>
    <LockedItem name={"painting"} x={700} y={300} width={300} height={200}/>
  </div>

</main>

<style>
  main{
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    align-content: space-around;
  }
  .gameContainer{
    width: 1200px;
    height: 600px;
    border-radius: 1%;
    background-color: white;
    position: relative;
    }
</style>

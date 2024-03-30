
<main>
  <div class="gameContainer">
    <div class="door tooltipholder">
      <span class="tooltip">Door</span>
    </div>

      
    <div class="painting tooltipholder" title="Painting">
      <span class="tooltip">Painting</span>
    </div>
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
  .door{
    background-color: black;
    width: 200px;
    height: 400px;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    position: absolute;
    bottom: 0px;
    left: 200px;
  }
  .painting{
    background-color: black;
    width: 300px;
    height: 200px;
    border-radius: 5%;
    position: absolute;
    bottom: 300px;
    left: 700px;
  }

  .tooltip {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: -20px;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 2s;
}


.tooltipholder:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>

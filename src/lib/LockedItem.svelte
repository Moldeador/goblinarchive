<script>
    export let x;
    export let y;
    export let width;
    export let height;
    export let name;
    
    function handleItemClick(){
        window.location.href = '#/locked/'+name;
    }
</script>


<div class="painting tooltipholder" on:click={handleItemClick} style='--x:{x}; --y:{y}; --width:{width}; --height:{height}'>
    <span class="tooltip">name</span>
</div>


<style>
  .painting{
    background-color: black;
    width:calc( var(--width) * 1px );
    height:calc( var(--height) * 1px );
    position: absolute;
    bottom:calc( var(--y) * 1px );
    left:calc( var(--x) * 1px );
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
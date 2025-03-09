<script>
  export let buttonName;
  export let locationRef;
    function handleGoToRef(){
        window.location.href = locationRef;
    }
</script>


<button class="button-53" on:click={handleGoToRef}>
  {buttonName}
</button>
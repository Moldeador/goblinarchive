<script>
  export let buttonName;
    function handleGoToPortfolio(){
        window.location.href = '#/portfolio';
    }
</script>


<button class="button-53" on:click={handleGoToPortfolio}>
  {buttonName}
</button>
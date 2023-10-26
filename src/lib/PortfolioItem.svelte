<script>
    export let itemTitle;
    export let imageSrc;
    export let link;
    function handleItemClick(){
        window.open(link, "_blank");
    }
</script>

<div class="portfolioItemContainer">
    <button on:click={handleItemClick} class="imageContainer" style:background-image="url({imageSrc})"></button>
    <div class="titleContainer"><h3>{itemTitle}</h3></div>
</div>

<style>
    .portfolioItemContainer{
        border: 3px solid black;
        flex-grow: 0;
        display: flex;
        justify-content: center;
        align-items: stretch;
        padding: 2px;
        width: 600px;
        height: 300px;
        margin: 20px;

        box-shadow: 10px 10px 0 -3px white, 10px 10px 0 5px gold;
    }
    .imageContainer{
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: top;
        margin:20px;
        border-width: 0;
        transition: all .4s ease;
    }
    .imageContainer:hover{
        margin:3px;
        cursor: pointer;
        
    }
    .titleContainer{
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        display: flex;
        justify-content: flex-start;
    }

</style>
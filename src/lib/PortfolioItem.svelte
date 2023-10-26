<script>
    export let itemTitle;
    export let imageSrc;
    export let link;
    function handleItemClick(){
        window.open(link, "_blank");
    }
</script>

<div class="portfolioItemContainer">
    <a href={link}>{itemTitle}</a>
    <div class="imageContainer" style:background-image="url({imageSrc})"></div>
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
        position: relative;

        box-shadow: 10px 10px 0 -3px var(--colour-white), 10px 10px 0 5px gold;
    }
    .portfolioItemContainer a {
        position: absolute;
        inset: 0;
        z-index: 1;
        font-size: 0;
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
    .portfolioItemContainer:hover .imageContainer {
        margin:3px;
    }
    .titleContainer{
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        display: flex;
        justify-content: flex-start;
    }

</style>
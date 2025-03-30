<script>
    export let itemTitle;
</script>

<div class="blogItemContainer">
    <div class="titleContainer"><h3>{itemTitle}</h3></div>
    <div >
        <slot>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales velit non ultricies fringilla. Etiam et purus vel erat hendrerit sollicitudin vel id enim. Duis finibus bibendum lorem, a finibus purus scelerisque hendrerit. Phasellus a nunc finibus, rutrum lorem at, tincidunt nisl. Morbi nec maximus purus. Integer sed suscipit mauris. Fusce sagittis massa id ligula porta cursus. Morbi congue imperdiet ante. Mauris quis urna libero. Donec nisi metus, ullamcorper elementum lobortis vitae, efficitur id leo. Mauris quis volutpat est, id dictum erat. Morbi ornare, mauris at cursus finibus, sem risus efficitur leo, id gravida arcu orci vitae velit. Integer sit amet mauris vitae eros pulvinar porttitor ac a lacus. Sed ac sem in ex pharetra feugiat..</p>
        </slot>
    </div>
</div>

<style>
    .blogItemContainer{
        border: 5px solid var(--colour-arkham-font);
        flex-grow: 0;
        display: flex;
        justify-content: center;
        align-items: stretch;
        padding: 2px;
        width: 1000px;
        margin: 60px;
        position: relative;

        box-sizing: border-box;
        max-width: 80vw;

        box-shadow: 10px 10px 0 -3px var(--colour-arkham-background), 10px 10px 0 5px var(--colour-arkham-shade);
    }

    .titleContainer{
        writing-mode: vertical-lr;
        display: flex;
        justify-content: flex-start;
    }

    ::selection{
        background-color: var(--colour-arkham-selected-background);
        color: var(--colour-arkham-selected-font)
    }

</style>
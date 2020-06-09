<!--#ClickableOverlay.svelte-->
<script>
    export let variant = 'center';
</script>
<style>
    div {
        min-height: 100%;
        background: rgba(9, 30, 66, 0.54);
    }
    div.clickableOverlay {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }
</style>
<div class:clickableOverlay={(variant=='center')}>
  <slot>
  </slot>
</div>

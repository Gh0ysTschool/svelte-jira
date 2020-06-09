<!--#Letter.svelte-->
<script>
    export let size=64, color='transparent', style='';
</script>
<style>
    div {
        display: inline-block;
        border-radius: 100%;
        text-transform: uppercase;
        color: #fff;
        font-family: "CircularStdMedium"; font-weight: normal;
    }
    div > :global(span) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>

<div style={`width:${size}px;height:${size}px;background:${color};font-size:${Math.round(size / 1.7)}px;`+style}><slot/></div>

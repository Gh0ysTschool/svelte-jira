<!--#Image.svelte-->
<script>
    export let size=32, avatarUrl, style='';
</script>
<style>
    div {
        display: inline-block;
        border-radius: 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: var(--color-backgroundLight);
    }
</style>

<div style={`width:${size}px;height:${size}px;font-size:${Math.round(size / 1.7)};background-image: url("${avatarUrl}");`+style}><slot/></div>

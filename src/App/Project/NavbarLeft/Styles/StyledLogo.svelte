<!--#StyledLogo.svelte-->
<script>
    import Logo from './Logo.svelte';
</script>
<style>
    div {
        display: inline-block;
        margin-left: 8px;
        padding: 10px;
        cursor: pointer;
        user-select: none;
    }
</style>
<div>
    <Logo {...$$props}>
        <slot/>
    </Logo>
</div>

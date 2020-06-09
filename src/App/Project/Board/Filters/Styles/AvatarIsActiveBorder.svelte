<!--#AvatarIsActiveBorder.svelte-->
<style>
    div {
        display: inline-flex;
        margin-left: -2px;
        border-radius: 50%;
        transition: transform 0.1s;
        @include clickable;
    }
    div:hover {
        transform: translateY(-5px);
    }
    div:active {
        box-shadow: 0 0 0 4px var(--color-primary);
    }
</style>

<div>
    <slot/>
</div>

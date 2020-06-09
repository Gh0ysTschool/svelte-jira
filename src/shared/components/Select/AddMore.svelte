<!--#AddMore.svelte-->
<style lang='scss'>
        div {
            display: inline-block;
            margin-bottom: 3px;
            padding: 3px 0;
            font-size:12.5px;
            @include link;
            
        }
        div :global(i) {
            margin-right: 3px;
            vertical-align: middle;
            font-size: 14px;
        }
</style>
<div>
    <slot/>
</div>

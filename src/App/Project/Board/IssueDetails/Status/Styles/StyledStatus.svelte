<!--#Status.svelte-->
<script>
  //  ${props => mixin.tag(issueStatusBackgroundColors[props.color], issueStatusColors[props.color])}
  export let isValue;
</script>
<style>
    div {
        text-transform: uppercase;
        transition: all 0.1s;
    }
    div.isValue {
        padding: 0 12px;
        height: 32px;
    }
    div.isValue:hover {
        transform: scale(1.05);
    }
</style>

<div 
  class:isValue
>
    <slot/>
</div>

<!--#Priority.svelte-->
<script>
    export let isValue,key;
    import {IssuePriorityIcon} from '../../../shared/components';
    import Label from './Label.svelte';
    import {IssuePriorityCopy} from '../../../shared/constants/issues.js';
</script>
<style>
  div {
      display: flex;
        align-items: center;
  }
  div.isValue {
      padding: 3px 4px 3px 0px;
      border-radius: 4px;
      
    }
  div.isValue:hover,
  div.isValue:focus {
    background: var(--color-backgroundLight);
  }
</style>

<div class:isValue>
    <IssuePriorityIcon priority={key} />
    <Label>{IssuePriorityCopy[key]}</Label>
</div>

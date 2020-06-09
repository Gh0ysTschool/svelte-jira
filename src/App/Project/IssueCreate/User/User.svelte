<!--#User.svelte-->
<script>
    import { Avatar, Icon } from '../../../../shared/components';
    import { Username } from './Styles';
    export let isValue;
    export let removeOptionValue;
    export let user;
    export let key;
    $: if (!user) user = key;
    let withBottomMargin;
    let onClick=() => removeOptionValue && removeOptionValue();
    $: withBottomMargin=!!removeOptionValue;
</script>
<style>
    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }
  div.isValue {
      margin: 0 10px 5px 0;
      padding: 4px 8px;
      border-radius: 4px;
      background: var(--color-backgroundLight);
      transition: background 0.1s;
  }
  div.isValue:hover {
        background: var(--color-backgroundMedium);
      }
  div.isValue.withBottomMargin {
      margin: 0 10px 0 0;
  }
</style>

<div 
    class:withBottomMargin 
    class:isValue
>
    <Avatar 
        avatarUrl={user.avatarUrl} 
        name={user.name} 
        size={24} 
    />
    <Username>
        {user.name}
    </Username>
    {#if removeOptionValue}
        <Icon 
            type="close" 
            top={1} 
        />
    {/if}
</div>

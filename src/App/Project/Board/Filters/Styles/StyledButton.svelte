<!--#StyledButton.svelte-->
<script>
import {afterUpdate} from 'svelte';
export let variant,onClick;

let primary, secondary, danger, empty, iconOnly;
afterUpdate(()=>{
    primary=(variant=='primary');
    secondary=(variant=='secondary');
    danger=(variant=='danger');
    empty=(variant=='empty');
})
</script>
<style>
    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        vertical-align: middle;
        line-height: 1;
        padding: 0 12px;
        white-space: nowrap;
        border-radius: 3px;
        transition: all 0.1s;
        appearance: none;
        @include clickable;
        font-size:14.5px;
    }
    button:disabled {
      opacity: 0.6;
      cursor: default;
    }
    button.iconOnly {
      padding: 0 9px;
    }
    button.primary {
      background: var(--color-primary);
    }
    button.secondary {
      background: var(--color-secondary);
    }
    button.danger {
      background: var(--color-danger);
    }
    button.primary:not(:disabled):hover {
      background: lighten(var(--color-primary),0.15);
    }
    button.secondary:not(:disabled):hover {
      background: lighten(var(--color-secondary),0.15);
    }
    button.danger:not(:disabled):hover {
      background: lighten(var(--color-danger),0.15);
    }
    button.primary:not(:disabled):active {
      background: darken(var(--color-primary),0.1);
    }
    button.secondary:not(:disabled):active {
      background: darken(var(--color-secondary),0.1);
    }
    button.danger:not(:disabled):active {
      background: darken(var(--color-danger),0.1);
    }
    button.primary, button.secondary, button.danger {
      color: #fff;
      font-family: "CircularStdMedium"; font-weight: normal;
    }
   
    button.empty {
      background: #fff;
    }  
    button.empty, button.secondary {
      color: var(--color-textDark);
      font-family: "CircularStdBook"; font-weight: normal;
    }
     button.empty:not(:disabled):hover, button.secondary:not(:disabled):hover {
          background: var(--color-backgroundLight);
     }
     button.empty:not(:disabled):active, button.secondary:not(:disabled):active {

          color: var(--color-primary);
          background: var(--color-backgroundLightPrimary);
     }  
</style>

<button on:click={onClick} class:primary={primary} class:secondary={secondary} class:danger={danger} class:empty={empty} {...$$props}><slot/></button>

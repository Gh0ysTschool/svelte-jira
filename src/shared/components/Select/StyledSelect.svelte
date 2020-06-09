<!--#StyledSelect.svelte-->
<script>
export let invalid, variant='normal',onClick;
</script>
<style>
        div.invalid,
        div.invalid:focus {
          border: 1px solid var(--color-danger);
          box-shadow: none;
        }
        div.empty {
          display: inline-block;
        }
    div.normal {
        width: 100%;
        border: 1px solid var(--color-borderLightest);
        background: var(--color-backgroundLightest);
        transition: background 0.1s;
        
    }
    div.normal:hover {
      background: var(--color-backgroundLight);
    }
    div.normal:focus {
        border: 1px solid var(--color-borderInputFocus);
        box-shadow: 0 0 0 1px var(--color-borderInputFocus);
        background: #fff;
    }
    div {
        position: relative;
        border-radius: 4px;
        cursor: pointer;
        font-size:14px;
    }
    div:focus {
          outline: none;
        }
</style>

<div on:click={onClick} class:normal={variant=='normal'} class:invalid={invalid} class:empty={variant=='empty'}><slot/></div>

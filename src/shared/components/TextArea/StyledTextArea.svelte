<!--#StyledTextarea.svelte-->
<script>
    export let invalid = false;
</script>
<style lang='scss'>
    div {
        display: inline-block;
        width: 100%;
        
    }
    div.invalid, div.invalid:focus {
          border: 1px solid var(--color-danger);
    }
    div:nth-child(0) {
          overflow-y: hidden;
          width: 100%;
          padding: 8px 12px 9px;
          border-radius: 3px;
          border: 1px solid var(--color-borderLightest);
          color: var(--color-textDarkest);
          background: var(--color-backgroundLightest);
          font:var(--font-regular);
          font-size:15px;
      }
      div:nth-child(0):focus {
          background: #fff;
          border: 1px solid var(--color-borderInputFocus);
          box-shadow: 0 0 0 1px var(--color-borderInputFocus);
        }
</style>

<div class:invalid ><slot/></div>

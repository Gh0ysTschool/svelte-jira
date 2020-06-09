<!--#InputElement.svelte-->
<script>
    export let invalid, hasIcon;
</script>
<style lang='scss'>
    input {
        height: 100%;
        width: 100%;
        padding: 0 7px;
        border-radius: 3px;
        border: 1px solid var(--color-borderLightest);
        color: var(--color-textDarkest);
        background: var(--color-backgroundLightest);
        transition: background 0.1s;
        font-family: "CircularStdBook"; font-weight: normal;
        font-size : 15px;
    }
    input.hasIcon {
      padding-left: 32px;
    }
    input.hasIcon:hover {
      background: var(--color-backgroundLight);
    }
    input.hasIcon:focus {
      background: #fff;
      border: 1px solid var(--color-borderInputFocus);
      box-shadow: 0 0 0 1px var(--color-borderInputFocus);
    }
    input.hasIcon.invalid,
    input.hasIcon.invalid:focus {
      border: 1px solid var(--color-danger);
      box-shadow: none;
    }
</style>


<input class:invalid class:hasIcon />

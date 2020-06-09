<!--#EditorCont.svelte-->
<script>
    export let className;
</script>
<style lang='scss'>
        div.ql-toolbar.ql-snow {
            border-radius: 4px 4px 0 0;
            border: 1px solid var(--color-borderLightest);
            border-bottom: none;
        }
        div.ql-container.ql-snow {
          border-radius: 0 0 4px 4px;
          border: 1px solid var(--color-borderLightest);
          border-top: none;
          color: var(--color-textDarkest);
          font-size: 15px;
          font: var(--font-regular)
        }
        div.ql-editor {
          min-height: 110px;
        }
</style>

<div class={className}><slot/></div>

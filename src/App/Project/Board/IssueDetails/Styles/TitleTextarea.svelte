<!--#TitleTextArea.svelte-->
<script>
    import  { TextArea } from '../../../../../shared/components';
    export let 
        // minRows=1,
        placeholder,
        defaultValue;//,
        // onBlur,
        // onKeyDown;
</script>
<style>
    div {
        margin: 18px 0 0 -8px;
        height: 44px;
        width: 100%;
        padding: 7px 7px 8px;
        line-height: 1.28;
        border: none;
        resize: none;
        background: #fff;
        border: 1px solid transparent;
        box-shadow: 0 0 0 1px transparent;
        transition: background 0.1s;
        font-size:24px;
        font-family: "CircularStdMedium"; font-weight: normal;
        
      }
      div:hover:not(:focus) {
          background: var(--color-backgroundLight);
      }
</style>
<div>

<TextArea value={defaultValue ? defaultValue : placeholder} {...$$props}><slot/></TextArea>
</div>

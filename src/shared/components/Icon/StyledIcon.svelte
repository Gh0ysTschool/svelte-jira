<!--#StyledIcon.svelte-->
<script>
    // i:before {
    //       content: attr(code);
    //       font-family: "jira" !important;
    //       speak: none;
    //       font-style: normal;
    //       font-weight: normal;
    //       font-variant: normal;
    //       text-transform: none;
    //       line-height: 1;
    //       -webkit-font-smoothing: antialiased;
    //       -moz-osx-font-smoothing: grayscale;
    //     }
    export let size=16,top,left,code,style='',cStyle;
    $: cStyle=style+((top||left)?'position:absolute;':'') + ((top)?`top:${top}px;`:'' )+ ((left) ? `left:${left}px;` : '') +`font-size:${size}px`;
    //$: i.style.transform=(left || top) ? `transform: translate(${left}px, ${top}px);` : '';
    
    // i:before {
    //       content:attr(code);
    //       font-family: "jira" !important;
    //       speak: none;
    //       font-style: normal;
    //       font-weight: normal;
    //       font-variant: normal;
    //       text-transform: none;
    //       line-height: 1;
    //       -webkit-font-smoothing: antialiased;
    //       -moz-osx-font-smoothing: grayscale;
    // }
</script>
<style lang='scss'>
    i {
        display: inline-block;
    }
</style>

<i {...$$props} style={cStyle}>{code}<slot/></i>

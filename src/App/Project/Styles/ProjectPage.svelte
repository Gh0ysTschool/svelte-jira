<!--#ProjectPage.svelte-->
<style >
    div {
        padding: 25px 32px 50px;
        padding-left:var(--paddingLeft);
  }
  @media (max-width: 1100px) {
      div {
          padding:25px 20px 50px calc(var(--paddingLeft) - 20px);
      }
  }
  @media (max-width: 999px) {
    div {
      padding-left: calc(var(--paddingLeft) - 20px - var(--sizes-secondarySideBarWidth));
    }
  }
</style>

<div>
    <slot/>
</div>

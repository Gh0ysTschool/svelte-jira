<!--#StyledIssue.svelte-->
<style>
    div {
        padding: 10px;
        border-radius: 3px;
        background: #fff;
        box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
        transition: background 0.1s;
        font-family: "CircularStdBook"; font-weight: normal;
        cursor: pointer;
        user-select: none;
     }
     @media (max-width: 1100px) {
          div {
              padding: 10px 8px;
          }
      }
      div:hover {
          background: var(--color-backgroundLight);
      }
</style>
<div>
    <slot/>
</div>
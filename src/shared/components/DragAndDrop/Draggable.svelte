<script>
  export let component;
  export let props = {};
  export let key;
  export let isBeingDragged;
  let dragflag = false;
  import { get } from 'svelte/store';
  import { onmousedown, onmouseup } from './lib.js';
  const onMouseDown = (event) => {
    if (event.which !== 1) {
      return;
    }
    isBeingDragged(true);
    onmousedown(event, component, props);
  }
  const onMouseUp = (event) => {
    console.log('boom');
  //  event.stopPropagation();
   isBeingDragged(false);
   onmouseup(event, component, props);
  }
  //on:mousedown={onMouseDown} on:mouseup={onMouseUp}
  //on:click={[...component.children][0].click()}
  // const start = (event)=>{
  //   console.log('kjh');
  //   console.log(event.target);
  //   event.target.style.opacity=1;
  //   event.target.style.transform='scale(2.3);';
  //   dragflag=true
  // }
  // const drag = (event)=>{
  //   event.target.style.opacity=0;

  // }
</script>
<style>
  div {
    display: block;
    margin-bottom: 5px;
  }
</style>
<!-- on:drag={drag} on:dragstart={start} draggable="true" -->
<div {key} bind:this={component} on:dragstart={onMouseDown} draggable="true" on:drop={onMouseUp}>
  <!-- <svelte:component this={component} {...props} /> -->
  <slot/>
</div>

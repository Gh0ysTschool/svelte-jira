import { get } from 'svelte/store';
import {
  isMouseDownStore,
  currentDraggableStore,
  currentComponentStore,
  currentPropsStore,
  cloneStore,
  shiftXStore, shiftYStore,
  currentStylesStore,
  dropFromStore,
  activeDropZoneStore,
  lastDropStore,
} from './stores.js';

let isMouseDown = false;
let curClone = null;
let shiftY = 0;
let shiftX = 0;
let startedCoordX = 0;
let startedCoordY = 0;
let MIN_MOVE_DISTANCE = 3;

cloneStore.subscribe(value => {
  curClone = value;
});
isMouseDownStore.subscribe(value => {
  isMouseDown = value;
});
shiftXStore.subscribe(value => {
  shiftX = value;
});
shiftYStore.subscribe(value => {
  shiftY = value;
});


export function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
    width: box.width,
    height: box.height,
  };
}

export function getDropZone(drag, event) {
  const displayStyle = window.getComputedStyle(drag).display;

  drag.style.display = 'none';

  const elem = document.elementFromPoint(event.clientX, event.clientY);

  drag.style.display = displayStyle;

  if (elem == null) {
    return null;
  }
  return elem.closest('[dropzone-id]');
}

export function onmousedown(event, component, props) {
  window.addEventListener('mouseup',onmouseup);
  //const current = event.target; 
  const current = component; 

  currentComponentStore.set(component);
  currentPropsStore.set(props);
  isMouseDownStore.set(true);
  currentDraggableStore.set(current);

  if (current) {
    window.addEventListener('mousemove', onmousemove);
    const clone = current.cloneNode(true);
    // const clone = current;
    const rect = getCoords(current);

    cloneStore.set(clone);
    startedCoordY = event.pageY;
    startedCoordX = event.pageX;
    shiftYStore.set(event.pageY - rect.top);
    shiftXStore.set(event.pageX - rect.left);

    currentStylesStore.set({
      position: current.style.position,
      top: current.style.top,
      left: current.style.left,
    });
    current.after(clone);
    current.style.visibility = 'hidden';
    clone.style.position = 'fixed';
    clone.style.top = rect.top + 'px';
    clone.style.left = rect.left + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.transform = 'rotate(3deg)';
    clone.style.boxShadow = '5px 10px 30px 0px rgba(9, 30, 66, 0.15)';
  
    const dropZone = getDropZone(current, event);
    dropZone && dropFromStore.set(dropZone.getAttribute('dropzone-id'))
  }
}

export function onmouseup(event) {
  window.removeEventListener('mousemove', onmousemove);
  window.removeEventListener('mouseup',onmouseup);
  const clone = get(cloneStore);
  const current = get(currentDraggableStore);

  isMouseDownStore.set(false);
  clone && clone.remove();
  cloneStore.set(null);

  if (!current) {
    return;
  }

  shiftYStore.set(0);
  shiftXStore.set(0);

  const droppZone = getDropZone(current, event);
  const dropapbleId = droppZone && droppZone.getAttribute('dropzone-id');

  lastDropStore.set(dropapbleId);

  current.style.visibility = '';
  clearDragData();
}

function isFarEnouth(event) {
  const diffY = Math.abs(event.pageY - startedCoordY);
  const diffX = Math.abs(event.pageX - startedCoordX);

  return diffX > MIN_MOVE_DISTANCE || diffY > MIN_MOVE_DISTANCE;
}

export function onmousemove(event) {
  if (isMouseDown && curClone && isFarEnouth(event)) {
    curClone.style.top = event.pageY - shiftY + 'px';
    curClone.style.left = event.pageX - shiftX + 'px';

    const droppZone = getDropZone(curClone, event);
    const dropapbleId = droppZone && droppZone.getAttribute('dropzone-id');
    if (dropapbleId !== get(activeDropZoneStore)) {
      activeDropZoneStore.set(dropapbleId);
    }
  }
}

export function clearDragData() {
  activeDropZoneStore.set('');
  lastDropStore.set(null);
  startedCoordX = 0;
  startedCoordY = 0;
}

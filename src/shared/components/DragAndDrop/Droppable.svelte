<script>
	import { onMount, createEventDispatcher, setContext } from 'svelte';
	import { get } from 'svelte/store';
	import {
		activeDropZoneStore,
		dropZoneListStore,
		lastDropStore,
		dropFromStore,
		addDropZone,
		currentComponentStore,
		currentPropsStore,
	} from './stores.js';
	import { onmouseup } from './lib.js';

	export let id;
	export let classes;
	export let isActive;

	if (!id) {
		throw Error(`'id' is empty`);
	}

	const dispatch = createEventDispatcher();
	let isCurrent = false;

	onMount(() => {
		addDropZone(id);
	});

	activeDropZoneStore.subscribe(value => {
		if (value === id) {
			if (!isCurrent) {
				dispatch('dragover', { dropZoneId: id });
				isCurrent = true;
			}
		} else {
				if (isCurrent) {
					dispatch('dragout', { dropZoneId: id });
					isCurrent = false;
				}
		}
	});

	lastDropStore.subscribe(dzId => {
		if (dzId === id) {
			dispatch('drop', {
				to: id,
				from: get(dropFromStore),
				item: {
					component: get(currentComponentStore),
					props: get(currentPropsStore),
				}
			});
	  }
	});

</script>
<style>
	.active {
		background:var(--color-backgroundLight);
	}
	div {
		height:100%;
	}
</style>
<div class={classes} class:active={isActive} dropzone-id={id}>
	<slot/>
</div>

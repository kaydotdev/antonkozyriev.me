<script>
	import Typewriter from 'typewriter-effect/dist/core';
	import { randomID } from '../utils/id';
	import { onMount } from 'svelte';

	export let className = '';
	export let innerText = '';
	export let messages = [];
	export let initDelay = 75;
	export let typeDelay = 100;
	export let eraseDelay = 1500;

	let typeWriterId = randomID('typewriter-');

	onMount(() => {
		let typewriter = new Typewriter(`#${typeWriterId}`, { loop: true, delay: initDelay });

		for (let message of messages) {
			typewriter = typewriter
				.pauseFor(typeDelay)
				.typeString(message)
				.pauseFor(eraseDelay)
				.deleteChars(message.length);
		}

		typewriter.start();
	});
</script>

<div id={typeWriterId} class={className}>{innerText}</div>

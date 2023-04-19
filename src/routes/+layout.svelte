<script>
	import { onMount } from 'svelte';
	import '../app.css';

	// Prevent screen rotation on mobile devices
	onMount(async () => {
		if ('orientation' in screen) {
			await screen.orientation.lock('portrait');
		}
	});
</script>

<slot />

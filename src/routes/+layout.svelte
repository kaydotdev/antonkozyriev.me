<script>
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(async () => {
		if ('orientation' in screen) {
			try { await screen.orientation.lock('portrait') } catch {}
		}
	});
</script>

<slot />

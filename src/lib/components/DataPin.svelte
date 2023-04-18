<script lang="ts">
	export let src: string;
	export let alt: string;
	export let header: string;
	export let description: string;
</script>

<div class="container">
	<div class="icon"><img class="w-16 h-16" {src} {alt} draggable="false" /></div>
	<div class="header items-end">
		<h3 class="line-clamp-1 text-ellipsis whitespace-nowrap text-2xl font-black text-primary">
			{header}
		</h3>
	</div>
	<div class="description items-start">
		<span class="line-clamp-1 text-ellipsis whitespace-nowrap text-base font-light text-primary"
			>{description}</span
		>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 4em 1fr;
		grid-template-rows: 2em 2em;
		gap: 0px 1em;
		grid-auto-flow: row;
		grid-template-areas:
			'icon header'
			'icon description';
		height: 4em;
	}

	.icon {
		grid-area: icon;
	}

	.header {
		grid-area: header;
	}

	.description {
		grid-area: description;
	}
</style>

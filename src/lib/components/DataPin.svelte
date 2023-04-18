<script lang="ts">
	export let src: string;
	export let alt: string;
	export let header: string;
	export let description: string;
</script>

<div class="container w-fit h-12 xl:h-16">
	<div class="icon"><img class="w-12 h-12 xl:w-16 xl:h-16" {src} {alt} draggable="false" /></div>
	<div class="header items-end inline-block">
		<h3
			class="line-clamp-1 text-ellipsis whitespace-nowrap text-xl xl:text-2xl font-black text-primary w-auto"
		>
			{header}
		</h3>
	</div>
	<div class="description items-start inline-block">
		<span
			class="line-clamp-1 text-ellipsis whitespace-nowrap text-sm leading-none xl:text-base font-light text-primary w-auto"
			>{description}</span
		>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 3rem 1fr;
		grid-template-rows: 1.5rem 1.5rem;
		gap: 0px 0.75rem;
		grid-auto-flow: row;
		grid-template-areas:
			'icon header'
			'icon description';
	}

	@media (min-width: 1280px) {
		.container {
			grid-template-columns: 4rem 1fr;
			grid-template-rows: 2rem 2rem;
			gap: 0px 1rem;
		}
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

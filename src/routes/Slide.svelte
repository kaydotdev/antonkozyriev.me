<script lang="ts">
	export let id: string;
	export let align: boolean = false;
</script>

<div {id} class={align ? 'slide slide-align' : 'slide'}>
	<slot />
</div>

<style>
	div.slide {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
	}

	.slide-align {
		justify-content: center;
		align-items: center;
	}
</style>

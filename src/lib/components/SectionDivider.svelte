<script lang="ts">
	export let pathIdOdd: boolean;
	export let bgIdOdd: boolean;

	const pathClass = pathIdOdd ? 'fill-odd-slide' : 'fill-even-slide';
	const bgClass = bgIdOdd ? 'bg-odd-slide' : 'bg-even-slide';
</script>

<div class={'w-screen h-[150px] relative ' + bgClass}>
	<div class="divider">
		<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class={pathClass} />
		</svg>
	</div>
</div>

<style>
	.divider {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);
	}

	.divider svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 150px;
	}
</style>

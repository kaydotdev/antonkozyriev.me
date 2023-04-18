<script>
	import SocialBar from "$lib/components/SocialBar.svelte";
	import TypeWriter from "$lib/components/TypeWriter.svelte";
	import wallpaperSrc from '$lib/assets/wallpaper.png';


	$: bgImage = `background-image: url("${wallpaperSrc}");`;
</script>

<section id="home" class="w-screen h-screen relative grid">
	<div style={bgImage} class="w-full h-full bg-fixed bg-center bg-no-repeat bg-cover z-0" />
	<div
		class="w-full h-full top-0 left-0 absolute z-[2] text-white text-xl tracking-wide subpixel-antialiased flex flex-col justify-center items-center"
	>
		<div class="mb-4 text-3xl font-light">Hello,</div>
		<TypeWriter className="font-bold text-6xl" messages={[
			"I'm Anton Kozyriev", "I'm a Backend Developer", "I'm an AI/ML Enginner"
		]} innerText="I'm Anton Kozyriev" />
		<div class="mt-6 flex flex-row items-start">
			<span class="mt-3 border-b border-b-[3] w-12" />
			<span class="text-xl px-2 uppercase">based in Kyiv, Ukraine</span>
			<span class="mt-3 border-b border-b-[3] w-12" />
		</div>
		<SocialBar />
	</div>
</section>

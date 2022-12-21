<script>
	import Slide from './Slide.svelte';
	import ProfileCard from './ProfileCard.svelte';
</script>

<Slide align id="profile">
	<ProfileCard />
</Slide>
<Slide id="skills" />
<Slide id="languages" />
<Slide id="education" />
<Slide id="experience" />
<Slide id="certification" />
<Slide id="portfolio" />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

	:global(body) {
		margin: 0;
		overflow: hidden;
		font-family: 'Inter', sans-serif;
		background-color: #ffffff;
	}

	:global(h1) {
		font-weight: 900;
	}
</style>

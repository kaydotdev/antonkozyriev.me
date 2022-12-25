<script>
	import profile from '$lib/assets/profile.png';
	import SocialBar from '$lib/components/SocialBar.svelte';
	import Slide from '$lib/components/Slide.svelte';
	import '$lib/styles/global.css';
</script>

<Slide>
	<div class="stretch center">
		<div class="profile-card">
			<img src={profile} alt="Profile pic" />
			<h1>Anton Kozyriev</h1>
			<small>Data Scientist @ Postello.ai</small>
			<p>
				"I am a Ukrainian graduate student and a professional Machine Learning Engineer / Software
				Developer with 3+ of experience in both academic and enterprise. My development and research
				interests are Deep Learning, Natural Language Processing and Big Data. I am looking for a
				projects with unique and challenging tasks, discoveries, and friendly team members."
			</p>
			<SocialBar />
		</div>
	</div>
</Slide>

<style>
	.profile-card {
		max-width: 28rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 8rem;
		height: 8rem;
		border-radius: 9999px;
		filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
	}

	h1 {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	small {
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.25em;
		color: #0009;
	}

	p {
		font-size: 0.75rem;
		margin: 2rem 1rem;
		font-weight: 200;
		font-style: italic;
		text-align: justify;
		letter-spacing: -0.025em;
	}
</style>

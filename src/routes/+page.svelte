<script>
	import profile from '$lib/assets/profile.png';
</script>

<img class="profile-pic" src={profile} alt="Profile pic" />
<h1 class="title">Anton Kozyriev</h1>
<small class="description">Data Scientist @ Postello.ai</small>
<p class="quote">
	"I am a Ukrainian graduate student and a professional Machine Learning Engineer / Software
	Developer with 3+ of experience in both academic and enterprise. My development and research
	interests are Deep Learning, Natural Language Processing and Big Data. I am looking for a projects
	with unique and challenging tasks, discoveries, and friendly team members."
</p>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

	:global(*) {
		font-family: 'Inter', sans-serif;
	}

	:global(h1) {
		font-weight: 900;
	}

	img.profile-pic {
		width: 8rem;
		aspect-ratio: 1 / 1;
		border-radius: 9999px;
		filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
	}

	h1.title {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	small.description {
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.25em;
		color: #0009;
	}

	p.quote {
		font-size: 0.75rem;
		margin: 2rem 0.5rem;
		font-weight: 200;
		text-align: justify;
		letter-spacing: -0.025em;
	}
</style>

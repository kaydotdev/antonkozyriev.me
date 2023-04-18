<script>
	import TypeWriter from '$lib/components/TypeWriter.svelte';
	import DataPin from '$lib/components/DataPin.svelte';

	import facebookLogo from '$lib/assets/social/facebook.svg';
	import githubLogo from '$lib/assets/social/github.svg';
	import telegramLogo from '$lib/assets/social/telegram.svg';
	import linkedinLogo from '$lib/assets/social/linkedin.svg';
	import kaggleLogo from '$lib/assets/social/kaggle.svg';

	import locationPin from '$lib/assets/pins/location.svg';
	import experiencePin from '$lib/assets/pins/experience.svg';
	import employmentPin from '$lib/assets/pins/employment.svg';

	import arrowIcon from '$lib/assets/arrow.svg';

	import logo from '$lib/assets/logo.png';
</script>

<main class="w-screen min-h-screen bg-ascent box-border">
	<section
		id="home"
		class="relative min-h-screen 2xl:h-screen p-8 md:p-14 2xl:p-20 box-border overflow-hidden"
	>
		<div
			class="grid grid-cols-5 2xl:grid-cols-6 gap-y-6 2xl:gap-y-0 box-border max-h-92 w-full align-middle items-start"
		>
			<div class="col-span-5 md:col-span-2 box-border z-0 h-full">
				<h1 class="mt-12 not-italic font-black text-5xl xl:text-7xl xl:leading-title text-primary">
					Anton<br />Kozyriev
				</h1>
				<div
					class="mt-12 xl:mt-20 not-italic font-normal text-base xl:text-xl text-justify text-primary"
				>
					I am a <TypeWriter
						className="font-bold text-base xl:text-xl text-primary"
						messages={[
							'Machine Learning Engineer',
							'Big Data Engineer',
							'Python Backend Engineer',
							'Machine Learning Researcher'
						]}
						innerText="Machine Learning Engineer"
						eraseDelay="5000"
					/>, and I have dedicated over three exhilarating years to cutting-edge academic research
					and AI engineering in the enterprise.
				</div>
				<div class="flex flex-row gap-x-4 mt-6 xl:mt-12 items-start">
					<a href="https://facebook.com/anton.kozyriev" target="_blank" rel="noreferrer"
						><img class="w-5 h-5 xl:w-6 xl:h-6 social" src={facebookLogo} alt="Facebook logo" /></a
					>
					<a href="https://github.com/antonAce" target="_blank" rel="noreferrer"
						><img class="w-5 h-5 xl:w-6 xl:h-6 social" src={githubLogo} alt="Github logo" /></a
					>
					<a href="https://t.me/antonace" target="_blank" rel="noreferrer"
						><img class="w-5 h-5 xl:w-6 xl:h-6 social" src={telegramLogo} alt="Telegram logo" /></a
					>
					<a href="https://linkedin.com/in/anton-kozyriev" target="_blank" rel="noreferrer"
						><img class="w-5 h-5 xl:w-6 xl:h-6 social" src={linkedinLogo} alt="Linkedin logo" /></a
					>
					<a href="https://www.kaggle.com/antonkozyriev" target="_blank" rel="noreferrer"
						><img class="w-5 h-5 xl:w-6 xl:h-6 social" src={kaggleLogo} alt="Kaggle logo" /></a
					>
				</div>
			</div>
			<div class="col-span-5 md:col-span-3 box-border ml-auto">
				<img class="logo" src={logo} alt="My home page setup" draggable="false" />
			</div>
			<div class="col-span-5 2xl:col-span-1 box-border z-0 h-full">
				<div
					class="w-full h-full flex flex-row flex-wrap gap-8 justify-start md:justify-around lg:flex-nowrap 2xl:flex-col 2xl:gap-y-12 2xl:justify-center items-center"
				>
					<DataPin
						src={locationPin}
						alt="My working location pin"
						header="Location"
						description="Based in Kyiv, Ukraine"
					/>
					<DataPin
						src={experiencePin}
						alt="My years of experience pin"
						header="Experience"
						description="3+ years in enterprise"
					/>
					<DataPin
						src={employmentPin}
						alt="My preferred working environment pin"
						header="Employment"
						description="In office or remote"
					/>
				</div>
			</div>
		</div>
		<a
			href="#profile"
			class="hidden 2xl:block w-6 h-6 bottom-4 absolute z-[3] translate-x-1/2 left-1/2"
			on:click|preventDefault={(_) =>
				document.getElementById('profile').scrollIntoView({ behavior: 'smooth' })}
		>
			<img class="animate-bounce w-full" src={arrowIcon} alt="Go to profile section" />
		</a>
	</section>
	<section id="profile" class="p-8 md:p-14 2xl:p-20 box-border overflow-hidden">Profile section</section>
</main>

<style>
	img.social {
		opacity: 0.85;
	}

	img.social:hover {
		animation: enlarge 1s cubic-bezier(0, 0, 0.2, 1);
	}

	img.logo {
		box-sizing: border-box;
		display: block;
		z-index: -50;
		aspect-ratio: 1 / 1;
		max-height: calc(100vh - 10rem);
	}

	@keyframes enlarge {
		from {
			opacity: 0.85;
			transform: translate(0);
		}
		to {
			opacity: 1;
			transform: translate(0, -0.25rem);
		}
	}
</style>

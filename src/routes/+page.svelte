<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex justify-center gap-6 flex-wrap">
	{#each data.overviews as overview}
		<a href="/overview/{overview.id}" class="block card w-80 p-4">
			<header class="card-header">
				<p class="h1">{overview.name}</p>
				<p>{overview.description}</p>
				<br>
			</header>
			<section class="p-4 flex gap-3 flex-wrap">
				<span class="chip variant-filled-secondary font-bold relative">
					AAPL
					<span class="absolute -top-[5px] -right-[5px] z-10 fi fi-us"></span>
				</span>
				<span class="chip variant-filled-secondary font-bold relative">
					AAPL
					<span class="absolute -top-[5px] -right-[5px] z-10 fi fi-us"></span>
				</span>
				<span class="chip variant-filled-secondary font-bold relative">
					AAPL
					<span class="absolute -top-[5px] -right-[5px] z-10 fi fi-us"></span>
				</span>
			</section>
		</a>
	{/each}
</div>

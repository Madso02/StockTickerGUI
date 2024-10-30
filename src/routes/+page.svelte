<script lang="ts">
	import type { PageData } from './$types';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	let { data }: { data: PageData } = $props();

	const modalStore = getModalStore();

	const createOverviewModal: ModalSettings = {
		type: 'component',
		component: 'createOverviewModal'
	}
</script>

<h1 class="h1 text-center">Overviews</h1>
<br />
<div class="flex justify-center gap-6 flex-wrap">
	{#each data.overviews as overview}
		<a href="/overview/{overview.id}" class="block card w-80 p-4">
			<header class="card-header">
				<p class="h1">{overview.name}</p>
				<p>{overview.description}</p>
				<br />
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
	<a
		href="javascript:void(0)"
		onclick={() => {modalStore.trigger(createOverviewModal)}}
		class="block card w-80 p-4 border-2 border-secondary-500 flex justify-center items-center flex-col"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="size-24 fill-secondary-500"
		>
			<path
				fill-rule="evenodd"
				d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
				clip-rule="evenodd"
			/>
		</svg>
		<span class="text-secondary-500 font-bold">Add new overview</span>
	</a>
</div>

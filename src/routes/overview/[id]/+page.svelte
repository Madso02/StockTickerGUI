<script lang="ts">
	import type { PageData } from '../$types';
	import { stockTickerApi } from '$lib/StockTickerAPI';

	let { data }: { data: PageData } = $props();

	let editingInfo = $state(false);
	function toggleEditingInfo() {
		if (editingInfo) {
			data.overview.name = data.overview.originalValues.name;
			data.overview.description = data.overview.originalValues.description;
			editingInfo = false;
		} else {
			editingInfo = true;
		}
	}

	async function updateOverview(e: SubmitEvent) {
		e.preventDefault;
		try {
			await stockTickerApi.overviews.update(data.overview.id, {
				name: data.overview.name,
				description: data.overview.description
			});
		} catch (e) {
			console.error(e);
		}

		data.overview.originalValues = {
			name: data.overview.name,
			description: data.overview.description
		};

		toggleEditingInfo();
	}
</script>

<div class="bg-surface-500 p-8 rounded-lg relative">
	<button onclick={toggleEditingInfo} class="absolute top-3 right-3" aria-label="edit">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="size-6 {editingInfo ? 'fill-primary-500' : 'fill-tertiary-500'}"
		>
			<path
				d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"
			/>
			<path
				d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"
			/>
		</svg>
	</button>
	{#if editingInfo}
		<form onsubmit={updateOverview}>
			<input
				class="input text-3xl"
				type="text"
				placeholder="Name"
				name="name"
				bind:value={data.overview.name}
			/>
			<textarea
				class="textarea mt-4"
				rows="4"
				placeholder="Overview description..."
				name="description"
				bind:value={data.overview.description}
			></textarea>
			<button type="submit" class="btn variant-filled-primary mt-4">Save</button>
			<button onclick={toggleEditingInfo} type="button" class="btn variant-filled-error ml-4"
				>Cancel</button
			>
		</form>
	{:else}
		<h1 class="h1">{data.overview.originalValues.name}</h1>
		<p>{data.overview.originalValues.description}</p>
	{/if}
</div>

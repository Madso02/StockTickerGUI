<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { stockTickerApi } from './StockTickerAPI';

	const modalStore = getModalStore();

	const data = {
		name: '',
		description: ''
	};

	async function createOverview() {
		try {
			let response = await stockTickerApi.overviews.create(data);
            window.location.assign(`/overview/${response.id}`);
		} catch (e) {
            window.location.reload();
        }
	}
</script>

{#if $modalStore[0]}
	<div class="bg-surface-500 rounded-xl">
		<form class="p-10" onsubmit={createOverview}>
			<p class="h1 font-bold mb-4">Create new overview</p>
			<input class="input mt-4" type="text" placeholder="Name" bind:value={data.name} />
			<textarea
				class="textarea mt-4"
				rows="4"
				placeholder="Description..."
				bind:value={data.description}
			></textarea>
			<button type="submit" class="btn variant-filled-primary mt-4">Create</button>
			<button
				onclick={() => {
					modalStore.close();
				}}
				type="button"
				class="btn variant-filled-error mt-4 ml-2">Cancel</button
			>
		</form>
	</div>
{/if}

<script lang="ts">
	import type { PageData } from './$types';

let { data }: { data: PageData } = $props();
</script>

{#each data.overviews as overview}
<div class="card">
	<header class="card-header">{overview.name}</header>
	<section class="p-4">{overview.description}</section>
</div>
{/each}
<script lang="ts">
	import type { PageData } from '../$types';

	let { data }: { data: PageData } = $props();
	let overview = data.overview;
</script>

<div class="bg-surface-500 p-8 rounded-lg">
	<h1 class="h1">{overview.name}</h1>
	<p>{overview.description}</p>
</div>

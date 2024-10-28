<script lang="ts">
	import '../app.postcss';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import type { LayoutData, PageData } from './$types';
	import { page } from '$app/stores';

	let { data }: { data: LayoutData } = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-[auto_1fr]">
	<aside class="static h-screen">
		<AppRail>
			<svelte:fragment slot="lead">
				<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
					<div class="flex justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-8"
						>
							<path
								d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
							/>
							<path
								d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
							/>
						</svg>
					</div>
				</AppRailAnchor>
			</svelte:fragment>

			{#each data.overviews as overview}
				<AppRailAnchor
					href="/overview/{overview.id}"
					selected={$page.url.pathname === '/overview/' + overview.id}
				>
					<svelte:fragment slot="lead">
						<div class="flex justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="size-8"
							>
								<path
									fill-rule="evenodd"
									d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</svelte:fragment>
					<span>{overview.name}</span>
				</AppRailAnchor>
			{/each}
			<AppRailAnchor href="/overview" selected={$page.url.pathname === '/overview'}>
				<svelte:fragment slot="lead">
					<div class="flex justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-8"
						>
							<path
								fill-rule="evenodd"
								d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</svelte:fragment>
			</AppRailAnchor>
			<svelte:fragment slot="trail">
				<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
					<div class="flex justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-8"
						>
							<path
								fill-rule="evenodd"
								d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</aside>
	<main class="p-4">
		<slot />
	</main>
</div>

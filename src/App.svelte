<script>
	import Login from './Login.svelte'
	import Main from './Main.svelte'
	import { store } from './auth'
</script>

<main>
	{#if $store.user !== null}
		<Main />
	{:else}
		<Login />
	{/if}
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

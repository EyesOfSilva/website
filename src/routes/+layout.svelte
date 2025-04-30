<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div id="viewport">
<Header />
{@render children()}
<Footer />
</div>
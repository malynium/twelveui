<script>
  import { page } from '$app/stores'
  $: slug = $page.params.slug
</script>
<h1 class="text-3xl text-center">Welcome to {slug}!</h1>
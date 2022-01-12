<script>
  import { page } from '$app/stores'
  $: slug = $page.params.slug
</script>
<h1 class="twelveui-text-3xl">Welcome to {slug}!</h1>
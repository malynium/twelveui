<script context="module">
  export function load({params}) {
    return {
      props: {
        slug: params.slug
      }
    }
  }
</script>
<script>
  export let slug
</script>
<h1 class="twelveui-text-3xl">Welcome to {slug}!</h1>
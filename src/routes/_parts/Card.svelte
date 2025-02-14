<script lang="ts">
    import ArrowTopRight from "$ui-kit/icons/ArrowTopRight.svelte";

    type Props = {
        name: string,
        image: string,
    }

    const {
        name,
        image,
    }: Props = $props()

</script>

<div class="card">
    <h2>{name}</h2>
    <ArrowTopRight type="primal" size="md" />
</div>

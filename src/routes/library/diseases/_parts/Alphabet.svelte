<script lang="ts">
    import Tag from "$ui-kit/Tag/Tag.svelte";
    import {goto} from "$app/navigation";

    let {
        existLetters
    } = $props()

    const start = 'А'.charCodeAt(0)
    const end = 'Я'.charCodeAt(0)

    const lettersCount = end - start
    let letters = Array(lettersCount + 1)
    letters[0] = {
        chr: 'Популярные',
        isDisabled: false
    }

    for (let i = 0; i < lettersCount; i++) {
        const chr = String.fromCharCode(start + i)
        letters[i + 1] = {
            chr,
            isDisabled: !existLetters.includes(chr)
        }
    }

    function goAnchor(chr: string) {
        goto(`#` + chr)
    }
</script>

<section class="alphabet">
  {#each letters as {isDisabled, chr}}
    <Tag
        onclick={() => isDisabled ? null : goAnchor(chr)}
        {isDisabled}>
      {chr}
    </Tag>
  {/each}
</section>

<style>
 .alphabet {
     display: flex;
     gap: 14px;

     overflow-x: auto;
 }
</style>
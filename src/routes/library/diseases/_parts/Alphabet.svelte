<script lang="ts">
    import Tag from "$ui-kit/Tag/Tag.svelte";
    import {goto} from "$app/navigation";

    const Alphabet = [
        {
            title: "Популярные",
            isDisabled : false
        },
        {
            title: "А",
            isDisabled : false
        },
        {
            title: "Б",
            isDisabled : false
        },
        {
            title: "В",
            isDisabled : false
        },
        {
            title: "Г",
            isDisabled : false
        },
        {
            title: "Д",
            isDisabled : false
        },
        {
            title: "Е",
            isDisabled : true
        },
        {
            title: "Ё",
            isDisabled : true
        },
        {
            title: "Ж",
            isDisabled : false
        },
        {
            title: "З",
            isDisabled : true
        },
        {
            title: "И",
            isDisabled : false
        },
        {
            title: "Й",
            isDisabled : true
        },
        {
            title: "К",
            isDisabled : false
        },
        {
            title: "Л",
            isDisabled : false
        },
        {
            title: "М",
            isDisabled : false
        },
        {
            title: "Н",
            isDisabled : false
        },
        {
            title: "О",
            isDisabled : false
        },
        {
            title: "П",
            isDisabled : false
        },
        {
            title: "Р",
            isDisabled : false
        },
        {
            title: "С",
            isDisabled : false
        },
        {
            title: "Т",
            isDisabled : false
        },
        {
            title: "У",
            isDisabled : false
        },
        {
            title: "Ф",
            isDisabled : false
        },
        {
            title: "Х",
            isDisabled : false
        },
        {
            title: "Ц",
            isDisabled : false
        },
        {
            title: "Ч",
            isDisabled : false
        },
        {
            title: "Ш",
            isDisabled : false
        },
        {
            title: "Щ",
            isDisabled : true
        },
        {
            title: "Ъ",
            isDisabled : true
        },
        {
            title: "Ы",
            isDisabled : true
        },
        {
            title: "Ь",
            isDisabled : true
        },
        {
            title: "Э",
            isDisabled : false
        },
        {
            title: "Ю",
            isDisabled : true
        },
        {
            title: "Я",
            isDisabled : false
        }
    ]
</script>

<section class="alphabet">
  {#each Alphabet as letter}
    <Tag onclick={() => !letter.isDisabled? goto(`#${letter.title}`) : undefined}
         isDisabled={letter.isDisabled}>{letter.title}</Tag>
  {/each}
</section>

<style>
 .alphabet {
     display: flex;
     gap: 14px;

     overflow-x: auto;
 }
</style>
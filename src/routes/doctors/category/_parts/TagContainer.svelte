<script lang="ts">
    import Tag from "$ui-kit/Tag/Tag.svelte";

    type filterTag = "today" | "next" | "weekends" | "face-to-face" | "online" | "registration" | "rating" | "clinic"

    let activeTag:filterTag = $state("face-to-face")

    const handleActiveTag = (tag:filterTag) => {
        activeTag = tag;
    }
</script>

<div class="tags">
  <Tag isActive={activeTag === "today"}
       onclick={() => handleActiveTag("today")}>Сегодня 12 дек.</Tag>
  <Tag isActive={activeTag === "next"}
       onclick={() => handleActiveTag("next")}>Ближайшие 3 дня</Tag>
  <Tag isActive={activeTag === "weekends"}
       onclick={() => handleActiveTag("weekends")}>Выходные 17 дек.- 18 дек.</Tag>
  <Tag isActive={activeTag === "face-to-face"}
       onclick={() => handleActiveTag("face-to-face")}>Очные Консультации</Tag>
  <Tag isActive={activeTag === "online"}
       onclick={() => handleActiveTag("online")}>Онлайн Консультации</Tag>
  <Tag isActive={activeTag === "registration"}
       onclick={() => handleActiveTag("registration")}>Есть онлайн-запись</Tag>
  <Tag isActive={activeTag === "rating"}
       onclick={() => handleActiveTag("rating")}>С рейтингом выше 4 звёзд</Tag>
  <Tag isActive={activeTag === "clinic"}
       onclick={() => handleActiveTag("clinic")}>Приём в клинике</Tag>
</div>

<style lang="scss">
  @use "sass:map";
  @use "$lib/ui/env";

  .tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    padding: 2rem 1.5rem;

    border: 1px solid rgba(map.get(env.$color, primary), .1);
    border-radius: 12px;
  }
</style>
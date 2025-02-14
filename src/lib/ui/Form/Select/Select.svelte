<script lang="ts">
  import ArrowDown from "$ui-kit/icons/ArrowDown.svelte"
  import Input from "$ui-kit/Form/Input.svelte"

  type Props = {
      placeholder: string,
  }

  const {
      placeholder,
  }: Props = $props()
</script>

<label class="select-input">
  <Input {placeholder} />
  <div class="select-input__chevron">
    <ArrowDown size="sm" />
  </div>
</label>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    .select-input {
      position: relative;

      input {
        height: 100%;
        padding-right: calc(1em + 24px);
      }

      &__chevron {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);

        opacity: .5;
      }
    }
  }
</style>
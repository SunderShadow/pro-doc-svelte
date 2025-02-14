<div class="search-group">
  <slot />
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  :global {
    .search-group {
      --border-color: #{rgba(map.get(env.$color, primary), .1)};

      display: flex;
      width: 100%;
    }

    .search-group > * {
      flex-grow: 1;
    }

    .search-group > *:not(:first-child) input {
      border-radius: 0;

      border-left-color: transparent;
      border-right-color: transparent;
    }

    .search-group > *:first-child input {
      border-radius: .75em 0 0 .75em;

      border-right-color: transparent;
    }

    .search-group > *:last-child input {
      border-left-color: transparent;
    }


    .search-group > button {
      width: auto !important;
      flex-shrink: 1;
      flex-grow: 0;
    }

    .search-group > *:last-child {
      border-top-right-radius: .75em;
      border-bottom-right-radius: .75em;

      border-right-color: var(--border-color);
    }

    .search-group > *:not(:last-child) {
      position: relative;
    }

    .search-group > *:not(:last-child)::after {
      position: absolute;

      content: "|";
      right: -4px;
      top: 50%;

      color: rgba(map.get(env.$color, primary), .1);

      font-size: 2rem;
      opacity: .5;

      transform: translateY(-50%);
    }

    .search-group > button:last-child {
      border-top-right-radius: .75em;
      border-bottom-right-radius: .75em;
    }

    .search-group > button:first-child {
      border-top-left-radius: .75em;
      border-bottom-left-radius: .75em;
    }
  }
</style>
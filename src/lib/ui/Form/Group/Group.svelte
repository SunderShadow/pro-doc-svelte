<div class="input-group">
  <slot />
</div>

<style lang="scss">
  @use "sass:map";
  @use "$ui-kit/env";

  @media (max-width: map.get(env.$screen-size, tablet)) {
    .input-group {
      flex-direction: column;
    }
  }
  :global {
    .input-group {
      --border-color: #{rgba(map.get(env.$color, primary), .1)};

      display: flex;
      width: 100%;

      @media (max-width: map.get(env.$screen-size, tablet)) {
        gap: 15px;
      }
    }

    @media (max-width: map.get(env.$screen-size, tablet)) {
      .input-group .select_input-date_picker {
        max-width: 100% !important;
      }
    }

    @media (min-width: (map.get(env.$screen-size, tablet) + 1px)) {
      .input-group > * {
        flex-grow: 1;
      }

      .input-group > *:not(:first-child) input {
        border-radius: 0;

        border-left-color: transparent;
        border-right-color: transparent;
      }

      .input-group > *:first-child input {
        border-radius: .75em 0 0 .75em;

        border-right-color: transparent;
      }

      .input-group > *:last-child input {
        border-left-color: transparent;
      }

      .input-group > button:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    .input-group > button {
      width: auto !important;
      flex-shrink: 1;
      flex-grow: 0;
    }

    .input-group > *:last-child {
      border-top-right-radius: .75em;
      border-bottom-right-radius: .75em;

      border-right-color: var(--border-color);
    }

    .input-group > *:not(:last-child) {
      position: relative;
    }

    .input-group > *:not(:last-child)::after {
      position: absolute;

      content: "|";
      right: -4px;
      top: 50%;

      color: rgba(map.get(env.$color, primary), .1);

      font-size: 2rem;
      opacity: .5;

      transform: translateY(-50%);
    }

    .input-group > button:last-child {
      border-top-right-radius: .75em;
      border-bottom-right-radius: .75em;
    }

    .input-group > button:first-child {
      border-top-left-radius: .75em;
      border-bottom-left-radius: .75em;
    }
  }
</style>
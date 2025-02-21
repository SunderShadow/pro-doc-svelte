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

    .input-group .form-control-wrapper {
      height: 100%;
    }

    @media (min-width: map.get(env.$screen-size, netbook)) {
      .input-group:hover {
        > *::after {
          --opacity: 1 !important;
        }

        input {
          --border-opacity: 1;

          box-shadow: 0 4px 6px rgba(map.get(env.$color, primary), .06);
        }
      }

      .input-group:focus-within {
        > *::after {
          --opacity: 1 !important;
        }

        input {
          --border-opacity: 1;

          box-shadow: 0 4px 6px rgba(map.get(env.$color, primary), .06);
        }
      }
    }

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

        border-left: none;
        border-right: none;
      }

      .input-group > *:first-child input {
        border-radius: .75em 0 0 .75em;

        border-right: none;
      }

      .input-group > *:last-child input {
        border-left: none;
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

    .input-group > .select-input:not(:last-child)::after {
      --opacity: .1;
      --offset-y: 9px;

      position: absolute;

      content: "";
      right: 0;
      top: 50%;

      width: 1px;
      background-color: rgba(map.get(env.$color, primary), var(--opacity));

      height: calc(100% - var(--offset-y) * 2);
      transform: translateY(-50%);

      transition: background-color 300ms;
      z-index: 4;
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
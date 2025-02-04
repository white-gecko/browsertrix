import { css } from "lit";

export const styles = css`
  article > * {
    min-height: 0;
  }

  .qa-grid {
    grid-template:
      "header"
      "pageToolbar"
      "tabGroup"
      "pageList";
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, max-content);
  }

  /* Tailwind 'lg' responsive size */
  @media only screen and (min-width: 1024px) {
    .qa-grid {
      /* TODO calculate screen space instead of hardcoding */
      height: 100vh;
      /* overflow: hidden; */
      grid-template:
        "header header"
        "pageToolbar pageList"
        "tabGroup pageList";
      grid-template-columns: 1fr 35rem;
      grid-template-rows: repeat(2, min-content) 1fr;
    }
  }

  .grid--header {
    grid-area: header;
  }

  .grid--pageToolbar {
    grid-area: pageToolbar;
  }

  .grid--tabGroup {
    grid-area: tabGroup;
  }

  .grid--pageList {
    grid-area: pageList;
  }

  sl-image-comparer::part(divider) {
    --divider-width: 1rem;
    border-left: 1px solid var(--sl-panel-border-color);
    border-right: 1px solid var(--sl-panel-border-color);
    box-shadow: var(--sl-shadow-large);
  }

  sl-image-comparer::part(handle) {
    background-color: transparent;
  }
`;

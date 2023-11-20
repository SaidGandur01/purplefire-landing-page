<template>
  <main class="main-section">
    <div class="first-column">
      <div class="first-column--content">
        <span class="introduction">Home design</span>
        <h1 class="title">
          Elegance for <br />
          interiors & <br />
          Exteriors
        </h1>
        <h2 class="information">
          We provide everyone with modern, <br />
          trendy, quality furniture
        </h2>
        <div class="scroll-down-image">
          <CoreIconsScrollDown />
        </div>
      </div>
    </div>
    <div class="second-column"></div>
  </main>
</template>
<style lang="scss" scoped>
@mixin flex-attributes($display, $direction, $align-items, $justify-content) {
  display: flex;
  flex-direction: $direction;
  align-items: $align-items;
  justify-content: $justify-content;
}
@mixin font-attributes(
  $font-size,
  $font-color,
  $font-weight,
  $letter-spacing,
  $line-height
) {
  font-size: $font-size;
  color: var($font-color);
  font-weight: $font-weight;
  letter-spacing: $letter-spacing;
  line-height: $line-height;
  font-feature-settings: 'clig' off, 'liga' off;
}

.main-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-background-page);

  .first-column,
  .second-column {
    width: 100%;
  }

  .first-column {
    @include flex-attributes(flex, column, flex-start, center);

    &--content {
      @include flex-attributes(flex, column, flex-start, center);
      gap: 5rem;
      width: 100%;
      height: 100%;
      padding: 15rem;

      .introduction {
        @include font-attributes(1.4rem, --color-brand-primary-100, 700, 1px, 20px);
        margin-bottom: 2rem;
        text-transform: uppercase;
      }

      .title {
        @include font-attributes(5rem, --color-brand-primary-100, 300, -0.4px, 70px);
        font-family: 'Merriweather', sans-serif;
      }

      .information {
        @include font-attributes(2.2rem, --color-brand-primary-200, 300, 0px, 30.8px);
      }
    }
  }

  .second-column {
    background: url('/images/overview/overview-image.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    inset: 0;
  }
}
</style>

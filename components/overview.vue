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
          <a href="#overview-details">
            <CoreIconsScrollDown />
          </a>
        </div>
      </div>
    </div>
    <div class="second-column"></div>
  </main>
</template>
<style lang="scss">
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
    @include flex-attributes(column, flex-start, center);

    &--content {
      @include flex-attributes(column, flex-start, center);
      gap: 5rem;
      width: 100%;
      height: 100%;
      padding: 15rem;

      .introduction {
        @include font-attributes(
          1.4rem,
          --color-brand-primary-100,
          700,
          1px,
          20px
        );
        margin-bottom: 2rem;
        text-transform: uppercase;
      }

      .title {
        @include font-attributes(
          5rem,
          --color-brand-primary-100,
          300,
          -0.4px,
          70px
        );
        font-family: 'Merriweather', sans-serif;
      }

      .information {
        @include font-attributes(
          2.2rem,
          --color-brand-primary-200,
          300,
          0px,
          30.8px
        );
      }

      .scroll-down-image {
        svg {
          path {
            fill: var(--color-brand-primary-100);
          }
          border-radius: 10rem;
          border: 2px solid var(--color-brand-primary-100);
        }
      }
    }
  }

  .second-column {
    background: url('/images/overview/overview-image.png');
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    inset: 0;
  }
}

@media (max-width: 768px) {
  .main-section {
    .first-column {
      background: linear-gradient(
          0deg,
          rgba(112, 100, 88, 0.2) 0%,
          rgba(112, 100, 88, 0.2) 100%
        ),
        url('/images/overview/overview-image-mobile.png'),
        lightgray 50% / cover no-repeat;
      background-position: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;

      &--content {
        display: none;
        padding: 2rem 2rem !important;
        align-items: center;

        .introduction,
        .title,
        .information {
          // color: var(--color-white);
          // text-align: center;
        }

        .introduction {
          // margin-top: 5rem;
          // margin-bottom: 0;
        }

        .scroll-down-image {
          // svg {
          //   path {
          //     fill: var(--color-white);
          //   }
          //   border-radius: 10rem;
          //   border: 2px solid var(--color-white);
          // }
        }
      }
    }

    .second-column {
      display: none;
    }
  }
}
</style>

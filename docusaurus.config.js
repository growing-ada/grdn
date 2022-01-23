// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GRDN Pool",
  tagline: "Reliably growing the Cardano network",
  url: "https://growingada.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/growingada.ico",

  /**
   * Github pages
   */
  organizationName: "growing-ada", // Usually your GitHub org/user name.
  projectName: "grdn", // Usually your repo name.
  // sourceBranch: "master",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {},
        blog: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Growing ADA",
        logo: {
          alt: "GRDN Logo",
          src: "img/growingada.svg",
        },
        items: [],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Why Cardano",
                href: "https://why.cardano.org/",
              },
              {
                label: "Introduction",
                href: "https://docs.cardano.org/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Official Wallets",
                href: "https://cardano.org/stake-pool-delegation#wallets",
              },
              {
                label: "Stake Pool Delegation",
                href: "https://cardano.org/stake-pool-delegation/",
              },
              {
                label: "Staking Rewards",
                href: "https://www.stakingrewards.com/earn/cardano/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/growing-ada",
              },
              {
                label: "growing.ada@protonmail.com",
                href: "mailto: growing.ada@protonmail.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GRDN Pool`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

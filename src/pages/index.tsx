import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepagePoolInfo from "../components/HomepagePoolInfo";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <button
            className="button button--secondary button--lg"
            onClick={() => {
              navigator.clipboard.writeText("asdfasdfsadfsf");
            }}
          >
            FUTURE POOL ID
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The GRDN staking pool supports the Cardano (ADA) network"
    >
      <HomepageHeader />
      <main>
        <HomepagePoolInfo />
        <div className={styles.embededPool}>
          <iframe
            width="600"
            height="360"
            src="https://js.adapools.org/widget.html?pool=TBD"
          >
            <a href="https://adapools.org/pool/TBD"></a>
          </iframe>
        </div>
      </main>
    </Layout>
  );
}

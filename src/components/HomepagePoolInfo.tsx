import React from "react";
import clsx from "clsx";
import styles from "./HomepagePoolInfo.module.css";

type PoolInfoItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const PoolInfoList: PoolInfoItem[] = [
  {
    title: "1% Margin",
    image: "/img/watering.jpg",
    description: (
      <>
        We keep the margin low to cover our costs. Sustaining the network is our
        purpose.
      </>
    ),
  },
  {
    title: "Monitoring 24/7",
    image: "/img/seedling.jpg",
    description: (
      <>
        Monitoring is in place both automatically and manually to ensure
        availability and maximum performance.
      </>
    ),
  },
  {
    title: "Dedicated Hardware",
    image: "/img/tractors.jpg",
    description: (
      <>
        Hardened servers with a reliable network connection solely dedicated to
        supporting Cardano.
      </>
    ),
  },
];

function PoolInfo({ title, image, description }: PoolInfoItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepagePoolInfo(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PoolInfoList.map((props, idx) => (
            <PoolInfo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

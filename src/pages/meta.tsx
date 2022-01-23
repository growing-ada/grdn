import React from "react";

const meta = {
  name: "Growing ADA",
  description: "The GRDN staking pool supports the Cardano (ADA) network",
  ticker: "GRDN",
  homepage: "https://growingada.org",
};

export default function Metadata(): JSX.Element {
  return <pre>{JSON.stringify(meta)}</pre>;
}

import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.tsx";

import { rhythm, scale } from "../utils/typography";

const Component = ({ location, title, children }) => {
  return <Layout>{children}</Layout>;
};

export default Component;

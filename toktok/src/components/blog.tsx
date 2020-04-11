import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.tsx";

import { rhythm, scale } from "../utils/typography";

const Component: React.FC = ({ location, title, children }) => (
  <Layout>{children}</Layout>
);

export default Component;

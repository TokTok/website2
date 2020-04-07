// replace inline css/scss with links
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  let hc = getHeadComponents();
  hc.forEach((el) => {
    if (el.type === "style") {
      el.type = "link";
      el.props["href"] = el.props["data-href"];
      el.props["rel"] = "stylesheet";
      el.props["type"] = "text/css";

      delete el.props["data-href"];
      delete el.props["dangerouslySetInnerHTML"];
    }
  });
};

import React from "react";
import Button from "components/button";

export default function IconText(props) {
  return (
    <Button
      className={[`brand-text-icon`, props.className].join(" ")}
      href=""
      type="link"
    >
      Stay<span className="text-gray-900">Cation.</span>
    </Button>
  );
}

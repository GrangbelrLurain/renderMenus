/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import papers from "../../lib/client/paper-size";

interface ITemplate extends React.HTMLAttributes<HTMLDivElement> {
  size: keyof typeof papers;
}

const Template = ({ size, children, ...props }: ITemplate) => (
  <div
    css={css`
      width: ${papers[size].width}${papers[size].unit};
      height: ${papers[size].height}${papers[size].unit};
      box-shadow: 0px 0px 2px 4px rgba(0, 0, 0, 0.2);
    `}
    {...props}
  >
    {children}
  </div>
);

export default Template;

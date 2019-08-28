import React from "react";
import Image from "gatsby-image";
import _ from "lodash";
import { Box } from "rebass";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints }) => {
  const aspectRatios = images.map(image => image.aspectRatio);
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      _.chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        _.sum(rowAspectRatios)
      )
  );
  const overlayStyle = css`
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-tranform: translate(0.5%, -50%);
    text-align: center;
  `;
  const containerStyle = css`
    display: inline-block;
    position: relative;
    &:hover .${overlayStyle.name} {
      opacity: 1;
    }
  `;
  return (
    <div>
      {images.map((image, i) => (
        <Box
          key={image.src}
          title={image.caption}
          width={rowAspectRatioSumsByBreakpoints.map(
            (rowAspectRatioSums, j) => {
              const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j]);
              const rowAspectRatioSum = rowAspectRatioSums[rowIndex];
              return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`;
            }
          )}
          css={containerStyle}
        >
          <Image fluid={image} />
          <div css={overlayStyle} />
        </Box>
      ))}
    </div>
  );
};

export default Gallery;

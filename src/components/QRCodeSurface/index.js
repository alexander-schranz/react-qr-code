import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  children: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string,
  xmlns: PropTypes.string,
};

const defaultProps = {
  title: undefined,
  xmlns: "http://www.w3.org/2000/svg",
};

const QRCodeSurface = ({ children, size, title, xmlns, ...props }) => (
  const viewBox = "0 0 " + size + " " + size;
  
  <svg {...props} height={size} width={size} viewBox={viewBox} xmlns={xmlns}>
    {title ? <title>{title}</title> : null}
    {children}
  </svg>
);

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

export default QRCodeSurface;

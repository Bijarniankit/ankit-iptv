import React from 'react';
import { SvgIcon } from '@mui/material';

function TVIcon(props) {
  return (
    <SvgIcon {...props} sx={{color:"white"}}>
      <path d="M2 3H22C22.55 3 23 3.45 23 4V18C23 18.55 22.55 19 22 19H16.65L18.65 21H14.65L12.65 19H11.35L9.35 21H5.35L7.35 19H2C1.45 19 1 18.55 1 18V4C1 3.45 1.45 3 2 3ZM3 5V17H21V5H3ZM4 6H20V16H4V6Z" />
    </SvgIcon>
  );
}

export default TVIcon;

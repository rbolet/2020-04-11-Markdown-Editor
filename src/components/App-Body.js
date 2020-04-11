import React from 'react';
import useWindowDimensions from '../lib/useWindowDimensions';

export default function AppBody(props){
  const { bodyHeight, width } = useWindowDimensions();

  return (
    <div className="bg-secondary row" style={{ minHeight: bodyHeight, maxWidth: width }}>
      {props.children}
    </div>
  );
}

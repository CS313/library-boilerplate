import * as React from 'react';
import './styles.css';

export interface Props {
   text: string;
}

export const Test: React.FC<Props> = ({ text }) => (
   <div className="test">
      Example: {text}
      <p>Cool!</p>
   </div>
);

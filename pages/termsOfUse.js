import React from 'react';
import { useState } from 'react';

import Link from 'next/link';
function termsOfUse() {
  const handleCheckBox = () => {
    setCheckbox(!check);
  };

  const [check, setCheck] = useState(false);

  const myFunction = () => {
    check
      ? alert('Thanks for agreeing, enjoy your stay here')
      : alert('No acces');
  };

  return (
    <div>
      <p>
        "He used to take his dog to school every day, but he finally had to
        stop. - How come? - The dog got graduated."
      </p>
      <label>
        <input type='checkbox' onChange={() => setCheck(!check)} />
        accept the terms
      </label>
      <button onClick={() => myFunction() }>OK</button>
      <br />
      <br />
      <Link href='/'>
        <a>Return Home</a>
      </Link>
    </div>
  );
}

export default termsOfUse;

import React from "react";
import Link from "next/link";

import { HeaderStyle } from "./style";

const Header = ({ route, name }) => {
  return (
    <HeaderStyle>
      <p>
        Stock <span>Manager</span>
      </p>

      <Link href={route}>
        <button>
          <a>{name}</a>
        </button>
      </Link>
    </HeaderStyle>
  );
};

export default Header;

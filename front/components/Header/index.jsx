import React from "react";
import Link from "next/link";

import { HeaderStyle } from "./style";

const Header = ({ route, name }) => {
  return (
    <HeaderStyle>
      <nav>
        <p>
          Stock <span>Manager</span>
        </p>

        <Link href={route}>
          <button>
            <a>{name}</a>
          </button>
        </Link>
      </nav>
    </HeaderStyle>
  );
};

export default Header;

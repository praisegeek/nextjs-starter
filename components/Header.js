/** @jsxRuntime classic */

import React from "react";
import Link from "next/link";
import { Box, Flex, Heading } from "theme-ui";

const Header = () => {
  // const [colorMode, setColorMode] = useColorMode();

  return (
    <Box variant="header">
      <div className="wrapper">
        <div className="brand">
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div className="menu">
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/#">
              <a>Services</a>
            </Link>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </nav>
          <nav>
            <a href="https://console.app.com">Sign In</a>

            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </nav>
        </div>
      </div>
    </Box>
  );
};

export default Header;

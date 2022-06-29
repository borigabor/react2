import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled(motion.div)`
    position: absolute;
    top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;

    transition: all .3s ease;
`;


const MenuItems = styled(motion.ul)`
    position: relative;
    height: ${props => props.theme.navHeight};
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    list-style: none;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    padding: 0 10rem;
`;

const MenuBtn = styled.li`
    background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
    list-style-type: none;
    color: ${props => props.theme.body};
    width: 15rem;
    height: 2.5rem;

    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${props => props.theme.fontmd};
    font-weight: 600;
    text-transform: uppercase;

    cursor: pointer;
`;

const MenuItem = styled(motion.li)`
    text-transform: uppercase;
    color: ${props => props.theme.text};
`;

const itemVariants = {

}

const NavBar = () => {

    const [click, setClick] = useState(false);

    const toggle = () => setClick(!click);

  return (
    <NavContainer click={click}
    initial={{
        y: '-100%',
    }}
    animate={{
        y: 0
    }}
    transition={{
        duration: 2, delay: 2
    }}
    >
        <MenuItems
            drag="y"
            dragConstraints={{
                top: 0,
                bottom: 70,
            }}
            dragElastic={0.05}
            dragSnapToOrigin
        >
        <MenuBtn onClick={toggle}>Menu</MenuBtn>
        <MenuItem whileHover={{scale: 1.1, y: -5}}
                  whileTap={{scale: 0.9, y: 0}}
        >Home</MenuItem>
        <MenuItem whileHover={{scale: 1.1, y: -5}}
                  whileTap={{scale: 0.9, y: 0}}
        >about</MenuItem>
        <MenuItem whileHover={{scale: 1.1, y: -5}}
                  whileTap={{scale: 0.9, y: 0}}
        >shop</MenuItem>
        <MenuItem whileHover={{scale: 1.1, y: -5}}
                  whileTap={{scale: 0.9, y: 0}}
        >new arrival</MenuItem>
        </MenuItems>
    </NavContainer>
  );
}

export default NavBar;
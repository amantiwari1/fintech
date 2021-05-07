import React from 'react';
import { ThemeContext } from './themeContext';
// eslint-disable-next-line
import tw from 'twin.macro'
import { Switch } from '@headlessui/react';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri'


const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);
    let isDark = theme === 'dark'



    return (
        <>
            <Switch
                checked={isDark}
                onChange={() => setTheme(isDark ? 'light' : 'dark')}
            >
                {isDark ?
                    <RiEyeCloseFill tw="text-2xl mt-1 text-white" /> :

                    <RiEyeFill tw="text-2xl text-white mt-1" />

                }
            </Switch>

        </>
    );
};

export default Toggle;

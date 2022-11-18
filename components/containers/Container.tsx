import React from 'react';
import DesktopNavbar from '../navbars/DesktopNavbar';
import DesktopHeaderBase from '../headers/DesktopHeaderBase';
import Navbar from '../navbars/Navbar';
import HeaderBase from '../headers/HeaderBase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useWalletSelector } from 'contexts/WalletSelectorContext';
import { isAdminChecker } from 'utils/admin';

const Container = (props) => {
  const { activeName, children } = props;
  const { selector, accountId } = useWalletSelector();

  const isAdmin = isAdminChecker(accountId);

  return (
    <div className="font-montserrat h-min md:h-screen relative hide-scroll bg-indigo-white flex overflow-x-hidden overflow-y-hidden">
      <div className="invisible w-0 md:visible md:w-full">
        <div className="flex bg-indigo-white">
          <DesktopNavbar
            isAdmin={isAdmin}
            isLoggedIn={selector.isSignedIn()}
            color="indigo-navbargrad2"
            secondcolor="indigo-navbargrad1"
            activeName={activeName}
          />
          <div className="flex flex-col w-screen h-full">
            <DesktopHeaderBase />
            {children}
          </div>
        </div>
      </div>

      <div className="visible md:invisible h-fit overflow-x-auto z-40">
        <Navbar isAdmin={isAdmin} isLoggedIn={selector.isSignedIn()} />
        <HeaderBase />

        {children}
      </div>
    </div>
  );
};

export default Container;

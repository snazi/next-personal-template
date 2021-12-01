import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import React, { Component, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import HeaderBase from '../components/HeaderBase';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import TitledContainer from '../components/TitledContainer';
import PortfolioContainer from '../components/PortfolioContainer';
import LargePackContainer from '../components/LargePackContainer';
import searchIcon from '../public/images/search.png'
import DesktopNavbar from '../components/DesktopNavbar';
import Link from 'next/link';
import {BrowserView, MobileView} from 'react-device-detect'
import Container from '../components/Container';
import BackFunction from '../components/BackFunction';

export default function Packs() {
    const { status, connect, disconnect, availableConnectTypes } = useWallet();

    const interactWallet = () => {
        if (status === WalletStatus.WALLET_CONNECTED) {
            disconnect();
        } else {
            connect(availableConnectTypes[1]);
        }
    };

    const [filterInfo, handleFilter] = React.useState(false)
    const { register, handleSubmit } = useForm()
    const [result, setResult] = useState("")
    const [teamFilter, setTeamFilter] = useState("")
    const [posFilter, setPosFilter] = useState("")
    const [isClosed, setClosed] = React.useState(true)
    const [filterMode, setMode] = React.useState(false)
    const [showFilter, setFilter] = React.useState(false)

    const onSubmit = (data) => {
        if (data.search)
            setResult(data.search)
        else setResult("")

        if (data.teamName)
            setTeamFilter(data.teamName)
        else setTeamFilter("")

        if (data.positions)
            setPosFilter(data.positions)
        else setPosFilter("")

        console.log(data)
    }
    const key1 = 'team'

    const packList = [
        {
            name: 'PREMIUM PACK',
            key: 'prem2',
            release: '2',
            price: '20 UST',
            image: '/images/packimages/PremiumRelease2.png',

        },
        {
            name: 'PREMIUM PACK',
            key: 'prem3',
            release: '3',
            price: '35 UST',
            image: '/images/packimages/PremiumRelease3.png',

        },
        {
            name: 'BASE PACK',
            key: 'base2',
            release: '2',
            price: '20 UST',
            image: '/images/packimages/BaseRelease1.png',
        },
    ]

    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    // useEffect(() => {
    //     // set initial value
    //     const mediaWatcher = window.matchMedia("(max-width: 500px)")
    
    //     //watch for updates
    //     function updateIsNarrowScreen(e) {
    //       setIsNarrowScreen(e.matches);
    //     }
    //     mediaWatcher.addEventListener('change', updateIsNarrowScreen)
    
    //     // clean up after ourselves
    //     return function cleanup() {
    //       mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    //     }
    //   })
    
    // if (isNarrowScreen) {
        return (
            <>
            <MobileView>
                <div className={`font-montserrat h-screen relative`}>
                    <Navbar/>
                    <HeaderBase/>

                    <div className="flex flex-col w-full h-screen">
                        <Main color="indigo-dark">
                            <div className="flex flex-col w-full h-full overflow-y-scroll overflow-x-hidden">
                                <TitledContainer title="PACKS">
                                    <div>
                                        <div className="w-full flex justify-center">
                                            <div className="rounded-md bg-indigo-light ml-1 h-11 w-9/12 flex justify-center">
                                                <div className="mt-2">
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <input {...register("search")} className="text-xl ml-3 appearance-none bg-indigo-light focus:outline-none w-10/12" placeholder="Search..." />

                                                    </form>
                                                </div>
                                            </div>
                                            <div className="rounded-md bg-indigo-light ml-1 w-12 h-11">
                                                <div className="ml-4 mt-3">
                                                    <img src={searchIcon} />
                                                </div>
                                            </div>

                                        </div>
                                        {
                                            packList.map(function (pack, i) {
                                                const toFindName = pack.name.toLowerCase()
                                                const searchInfo = result.toLowerCase()
                                                if (toFindName.includes(searchInfo))
                                                    return (
                                                        <Link href={`/PackDetails?id=${pack.key}`}>
                                                            <div className='mb-4' key={i}>
                                                                <LargePackContainer
                                                                    PackName={pack.name}
                                                                    CoinValue={pack.price}
                                                                    releaseValue={pack.release}
                                                                    imagesrc={pack.image} />
                                                            </div>
                                                        </Link>
                                                    )
                                            })
                                        }
                                    </div>
                                </TitledContainer>
                            </div>
                        </Main>
                    </div>
                </div>
            </MobileView>
            <BrowserView>
            <Container>
                <PortfolioContainer color="indigo-white" textcolor="indigo-black" title="PACKS">
                    <div className="invisible">
                        <BackFunction prev="/Packs"/>
                    </div>
                    <div className="grid grid-cols-4 pl-10">
                        {
                            packList.map(function (pack, i) {
                                const toFindName = pack.name.toLowerCase()
                                const searchInfo = result.toLowerCase()
                                if (toFindName.includes(searchInfo))
                                    return (
                                        <div className="mx-4 py-4 mr-40">
                                            <a href={`/PackDetails?id=${pack.key}`}>
                                                <div className="mx-left" key={i}>
                                                    <LargePackContainer
                                                        PackName={pack.name}
                                                        CoinValue={pack.price}
                                                        releaseValue={pack.release}
                                                        imagesrc={pack.image} />
                                                </div>
                                            </a>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </PortfolioContainer>
            </Container>
            </BrowserView>
        </>
    )
}

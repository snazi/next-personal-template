import Image from 'next/image';
import React, { useState } from 'react';
import Main from '../../components/Main';
import PortfolioContainer from '../../components/containers/PortfolioContainer';
import TokenGridCol4 from '../../components/grids/TokenGridCol4';
import TeamMemberContainer from '../../components/containers/TeamMemberContainer';
import Link from 'next/link';
import Container from '../../components/containers/Container';
import BackFunction from '../../components/buttons/BackFunction';

import { playList } from '../../pages/PlayDetails/data/index.js'

import { teamComposition } from './data';

import PlayDetailsComponent from '../../pages/PlayDetails/components/PlayDetailsComponent.js';

import { useRouter } from 'next/router';

import Lineup from '../../pages/CreateLineup/components/Lineup.js';

export default function CreateLineup() { 

    const router = useRouter();

    return (
        <>
        <Container>
          <div className="flex flex-col w-full overflow-y-auto h-screen justify-center self-center md:pb-12">
                    <Main color="indigo-white">
                        <div className="mt-8">
                              <BackFunction prev="/Play"/>
                        </div>
                        {playList.map(function(data, i){
                      if(router.query.id === data.key){
                        return(
                        <>
                          <div className="md:ml-7 flex flex-row md:flex-row">
                              <div className='md:mr-12'>
                                    <div className="mt-7 justify-center md:self-left md:mr-8">
                                        <Image
                                        src={data.image}
                                        width={550}
                                        height={220}
                                        />
                                    </div>
                              </div>
                            <div className="flex flex-col">
                                <div className="mt-4">
                                    <PortfolioContainer  textcolor="indigo-black" title="GAMEPLAY"/>
                                </div>
                                <div className="ml-7 mt-5 font-normal">
                                    Enter a team into the Alley-oop tournament to compete for cash prizes.
                                </div><div className="ml-7 mt-2 font-normal">
                                    Create a lineup by selecting five Playible Athlete Tokens now.
                                </div>
                            </div>
                          </div>

                          <PortfolioContainer title="CREATE LINEUP" textcolor="text-indigo-black">
                                <div className="flex flex-col">
                            <PortfolioContainer title={`Team ${data.number}`} textcolor="text-indigo-black"/>
                                <div className="grid grid-cols-4 gap-y-4 mt-4 md:grid-cols-4 md:ml-7 md:mt-12">
                                    {teamComposition.map(function (data, i) {
                                                return (
                                                    <div className="">
                                                        <a href={`/Position?id=${data.position}`}>
                                                            <div className="" key={i}>
                                                                <Lineup
                                                                    position={data.position}
                                                                    player={data.player}
                                                                    id={data.id}
                                                                    score={data.score} />
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                                </div>
                            </PortfolioContainer>
                                
                                </>
                                )
                            }
                            }
                        )
                        }
                            

                        <div className='flex justify-center mt-8'> 
                            <Link href="/Play">
                                <div className="bg-indigo-buttonblue w-80 h-12 mb-16 text-center rounded-md">
                                    <div className="mt-3 text-indigo-white font-black">
                                        PROCEED
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Main>
                    </div>
		</Container>
        </>
    );
}

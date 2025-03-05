import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';
import Typed from 'react-typed';
import { ThemeContext } from '../../contexts/theme-context';
import { headerData } from '../../data/header-data';
import { socialsData } from '../../data/socials-data';
import styles from '../../styles/landing.module.css';
import Link from '../link';
import ExperienceCard from '../experience/experience-card';
import { experienceData } from '../../data/experience-data' ;

import  AlignItemsList  from './list-projects';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            const scrollText = document.getElementById('scrollText');
            if (window.scrollY > 50) {
                scrollText.classList.add(styles.hidden);
            } else {
                scrollText.classList.remove(styles.hidden);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollClick = () => {
        window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
    };

    return (
        <div className={styles.landing} style={{
            backgroundColor: theme.quaternary
        }}>
            <div className={styles.landingContainer}>
                <div
                    className={styles.landingContainerLeft}
                    style={{ backgroundColor: theme.quaternary }}
                >
                    <div className="flex-grow flex justify-center items-center ml-8 sm:pt-10 sm:mt-8">
                        <AlignItemsList/>
                    </div>

                    <div className={styles.lclContent}>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}

                        {socialsData.facebook && (
                            <a
                                href={socialsData.facebook}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaFacebook
                                    className={styles.landingSocial}
                                    style={{ color: theme.primary }}
                                    aria-label='facebook'
                                />
                            </a>
                        )}
                    </div>
                    <div id="scrollText" className={styles.scrollText} onClick={handleScrollClick}>
                        Scroll down to see more
                        <div className={styles.arrow}>▼</div>
                    </div>
                </div>

                <div
                    className={styles.landingContainerRight}
                    style={{ backgroundColor: theme.secondary }}
                >

                        <div
                            className={`${styles.lcrContent}`}
                            style={{ color: theme.tertiary, paddingLeft: '5rem' }}
                        >
                            {/* <h6 style={{ color: theme.primary }}>{headerData.title}</h6> */}
                            <div className={styles.imageAndText}>
                                <Image
                                    src={headerData.image}
                                    alt=''
                                    width={80} // Decreased width for smaller image
                                    height={80} // Decreased height to maintain aspect ratio
                                    className={styles.landingImg}
                                    style={{
                                        opacity: `${drawerOpen ? '0' : '1'}`,
                                        borderColor: theme.primary,
                                        borderRadius: '50%',
                                        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
                                        marginRight: '20px',
                                    }}
                                />

                                <h1>{headerData.name}</h1>

                    </div>
                        <Typed
                            strings={[
                                'Frontend Developer',
                                'Backend Developer',
                                'Fullstack Developer']}
                            typeSpeed={40}
                            backSpeed={50}
                            className={styles.typedHeader}
                            style={{ color: theme.primary, fontSize: '20px' }}
                            loop
                        />
                        <p>{headerData.desciption}</p>

                        <div className={styles.lcrButtonContainer}>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button
                                        className="sm:w-[180px] text-[#1D9BF0]
                                        rounded-[30px] no-underline	w-36 text-base
                                        font-medium h-12 border-[3px] border-[#1D9BF0]
                                        transition duration-100 ease-out
                                        hover:bg-[#8B98A5] hover:text-[#15202B]
                                         hover:border-[#8B98A5] "
                                    >
                                        Download CV
                                    </button>
                                </a>
                            )}
                            <Link
                                href='/#contacts'
                            >
                                <button className="sm:w-[180px] bg-[#1D9BF0]
                                text-[#15202B] rounded-[30px] no-underline
                                w-36 text-base font-medium h-12 border-[3px]
                                 border-[#1D9BF0] transition duration-100
                                 ease-out hover:bg-[#8B98A5] hover:text-[#15202B]
                                  hover:border-[#8B98A5] hidden sm:block "
                                >
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Landing;

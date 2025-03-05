import emailjs from '@emailjs/browser';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Image from 'next/image';
import React, { useContext, useRef, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import {
    FaFacebook, FaGithub, FaLinkedinIn, FaMediumM,
    FaStackOverflow, FaTwitter
} from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import isEmail from 'validator/lib/isEmail';
import { ThemeContext } from '../../contexts/theme-context';
import { contactsData } from '../../data/contacts-data';
import { socialsData } from '../../data/socials-data';
import styles from '../../styles/contacts.module.css';

function Contacts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const form = useRef();
    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                emailjs.sendForm(
                    process.env.REACT_APP_YOUR_SERVICE_ID,
                    process.env.REACT_APP_YOUR_TEMPLATE_ID,
                    form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
                    .then((result) => {
                        console.log('success');
                        setSuccess(true);
                        setErrMsg('');
                        setName('');
                        setEmail('');
                        setMessage('');
                        setOpen(false);
                    }, (error) => {
                        console.log(error.text);
                    });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className={styles.contacts}
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className={styles.contactsContainer}>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className={styles.contactsBody}>
                    <div className={styles.contactsDetails}>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className={styles.personalDetails}
                        >
                            <div className="w-[45px] h-[45px]
                            rounded-[50%] flex items-center
                            justify-center text-2xl transition
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#1D9BF0] hover:scale-[1.1]
                             shrink delay-200"
                            >
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className={styles.personalDetails}
                        >
                            <div className="w-[45px] h-[45px]
                            rounded-[50%] flex items-center
                            justify-center text-2xl transition
                            ease-in-out text-[#15202B] bg-[#8B98A5]
                             hover:bg-[#1D9BF0] hover:scale-[1.1]
                             shrink delay-200"
                            >
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className={styles.personalDetails}>
                            <div className="w-[45px] h-[45px]
                             rounded-[50%] flex items-center
                             justify-center text-2xl transition
                             ease-in-out text-[#15202B] bg-[#8B98A5]
                              hover:bg-[#1D9BF0] hover:scale-[1.1]
                               shrink delay-200"
                            >
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className={styles.socialmediaIcons}>
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px]
                                    rounded-[50%] flex items-center
                                    justify-center text-xl transition
                                     ease-in-out text-[#15202B] bg-[#8B98A5]
                                      hover:bg-[#1D9BF0]"
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px]
                                    rounded-[50%] flex items-center justify-center
                                     text-xl transition ease-in-out text-[#15202B]
                                      bg-[#8B98A5] hover:bg-[#1D9BF0]"
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex
                                    items-center justify-center text-xl transition
                                    ease-in-out text-[#15202B] bg-[#8B98A5]
                                    hover:bg-[#1D9BF0]"
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}

                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex
                                    items-center justify-center text-xl transition
                                    ease-in-out text-[#15202B] bg-[#8B98A5]
                                    hover:bg-[#1D9BF0]"
                                >
                                    <FaMediumM aria-label='Medium' />
                                </a>
                            )}



                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex
                                    items-center justify-center text-xl transition
                                    ease-in-out text-[#15202B] bg-[#8B98A5]
                                    hover:bg-[#1D9BF0]"
                                >
                                    <FaStackOverflow aria-label='Stack Overflow' />
                                </a>
                            )}
                            {socialsData.facebook && (
                                <a
                                    href={socialsData.facebook}
                                    target='_blank'
                                    rel='noreferrer'
                                    className="w-[45px] h-[45px] rounded-[50%] flex
                                     items-center justify-center text-xl transition
                                      ease-in-out text-[#15202B] bg-[#8B98A5]
                                       hover:bg-[#1D9BF0]"
                                >
                                    <FaFacebook aria-label='facebook' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Image
                src={theme.contactsimg}
                alt='contacts'
                className={styles.contactsImg}
            />
        </div>
    );
}

export default Contacts;

import React from 'react';
import { IconContext } from "react-icons";
import { FaDropbox } from 'react-icons/fa';

import Styles from './styles.module.css';


interface Props {
    variant: 'Blue' | 'Beige' | 'White' | 'Black';
    title: string;
    description: string;
}

const Section: React.FC<Props> = ({variant, title, description}) => {
    const buttonVariant = Math.round(Math.random());

    return (
        <div className={`${Styles.Container} ${Styles[variant]}`}>
            <div className={Styles.HeaderWrapper}>
                <div className={Styles.Header}>
                    <h1>
                        <IconContext.Provider
                            value={{ className: Styles.DropboxLogo }}
                            ><FaDropbox />
                        </IconContext.Provider>
                        <span>Dropbox</span>
                    </h1>
                    <button>{buttonVariant === 0 ? "Interagir" : "Acessar"}</button>
                </div>
            </div>
            <div className={Styles.Content}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Section

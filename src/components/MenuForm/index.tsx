import React from 'react'
import { IconContext } from "react-icons";
import { FaDropbox } from 'react-icons/fa';

import Styles from "./styles.module.css";

interface Props {
    
}

const MenuForm = (props: Props) => {
    const handleToggle = () => {
        if (window.toggleActiveMenu) window.toggleActiveMenu();
    }
    
    return (
        <div className={Styles.Container}>
            <nav>
                <h1>
                    <IconContext.Provider
                        value={{ className: Styles.DropboxLogo }}
                        ><FaDropbox />
                    </IconContext.Provider>
                    <span>Dropbox</span>
                </h1>
                <button 
                  className="action--close"
                  onClick={handleToggle}
                  >⨉</button>
            </nav>
            <form>
                <span
                  className={Styles.Title}
                  >Registre-se</span>
                <span 
                  className={Styles.Subtitle}
                  >Preencha o formulário abaixo</span>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />

                <button>Prosseguir</button>

                <span className={Styles.Terms}>
                    Esta página está sujeita à Política de privacidade e
                    aos Termos de serviço.
                </span>
            </form>
        </div>
    )
}

export default MenuForm

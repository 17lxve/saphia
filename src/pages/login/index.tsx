import React from 'react'
import './custom.css'
import TabComponent from '../../components/tab'
import LoginComponent from '../../components/login';

type Props = {title:string}

function LoginPage({title}: Props) {
    const tabsElements = {
        triggers:[
            { key: '1', title: `Se connecter à SAPHIA` },
            { key: '2', title: `Demande d'accès` },
        ],
        content:[
            { key: '1', val:<LoginComponent/> },
            { key: '2', val:<AccessComponent/> },
        ]
    }
  return (
    <>
        <main className="container">
            <TabComponent 
                title="Mes Onglets"
                trigger={tabsElements.triggers}
                content={tabsElements.content}
            />
        </main>
    </>
  )
}

function AccessComponent(){
    return (
        <>
            <div className='tabContainer'>
                <div className='info'>
                Pour faire une demande d'accès au chatbot remplissez le formulaire suivant en y renseignant les informations necessaire
                </div>
            </div>
        </>
    )
}

export default LoginPage
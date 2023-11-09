// import React from 'react'
import './custom.css'
import TabComponent from '../../components/tab'
import LoginComponent from '../../components/login';

function LoginPage() {
    const tabsElements = {
        triggers:[
            { key: '1', title: `Se connecter à SAPHIA` },
            { key: '2', title: `Demande d'accès` },
        ],
        content:[
            { key: '1', val:<LoginComponent/> },
            // { key: '2', val:<AccessComponent/> },
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

export default LoginPage
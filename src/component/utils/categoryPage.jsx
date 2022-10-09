import React from 'react'
import { Outlet } from 'react-router-dom'
import ContainerPage from './containerPage'
import Navbar from './navbar'

const CategoryPage = () => {
    return (
        <>
            <Navbar />
                <ContainerPage>
                    {/* <>
                        <BackButton />
                        
                    </> */}
                    <Outlet />
                </ContainerPage>
        </>
    )
}

export default CategoryPage
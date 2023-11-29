import SideNavigationBar from '@/components/Admin/SideNavigationBar';
import React from 'react';

function AdminLayoutBase({ title, children, donotShowSideBar }: {
    title : string,
    donotShowSideBar?: boolean | undefined,
    children: React.ReactNode,
}) {

  return (
    <div style={{display: 'flex', marginTop: '80px'}}>
        {!donotShowSideBar && <SideNavigationBar></SideNavigationBar>}
        <main style={{ minHeight: '100vh', 
                       display: 'flex', 
                       flexDirection: 'column', 
                       gap: '2em', 
                       flex: 1, 
                       padding: '2em'}}
        >
            <h1 style={{textAlign: 'center', fontSize: '62px'}}>
                {title}
            </h1>
            { children }
        </main>
    </div>
  )
}

export default AdminLayoutBase;

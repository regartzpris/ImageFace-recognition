import React from 'react';



const Navigation = ({onRouteChange,isSignIn}) => {
    if(isSignIn){
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* stayling using taychons */}
                <p  onClick={()=>onRouteChange('signout')} className='f3 link dim blcak underline pa3 pointer'>Sign Out</p>
            </nav>
        );
    }else {
        return(
          
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* stayling using taychons */}
                    <p  onClick={()=>onRouteChange('login')} className='f3 link dim blcak underline pa3 pointer'>Sign In</p>
                    <p  onClick={()=>onRouteChange('register')} className='f3 link dim blcak underline pa3 pointer'>Register</p>
                </nav>
        );
           
    }
    
}


export default Navigation;
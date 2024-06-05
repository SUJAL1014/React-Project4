import React from 'react'
import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';


export default function Layout(props) {
  return (
    <>
    <Header/>
   <main>
     <div className='container a_cont h-100'>
       <div className='row h-100'>
         <Aside cls='a_leftaside'>LeftAside</Aside>
         {props.children}
         <Aside cls='a_rightaside'>RightAside</Aside>
       </div>
      
     </div>
   </main>
   <Footer/>
   </>
  )
}

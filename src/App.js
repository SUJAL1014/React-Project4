import React from 'react'
import './Style.css';

import Section from './component/Section';
import Layout from './component/Layout';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';



export default function App() {
  return (
    <Layout>
        <Section>
            <Page1></Page1>
            <Page2></Page2>
        </Section>
    </Layout>
  )
}

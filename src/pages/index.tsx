import * as React from 'react';
import Directory from '../components/directory/directory.component';

const HomePage = (sections) => {
  
  console.log(sections);
  
  return (
    <Directory   />
  )
}

export default HomePage;


HomePage.getInitialProps = async ({ }) => {
  const res = await fetch(`http://localhost:4200/sections`)
  const sections = await res.json()

  return {
      sections
  }
}
import React from 'react'
import Layout from './../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Nolcstore"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Nolcstore, your gateway to the vibrant world of Kenyan traditional items!

Immerse yourself in the rich tapestry of Kenyan culture as you explore our collection of authentic traditional artifacts, handcrafted with love and skill by local artisans. From intricately carved wooden sculptures to colorful Maasai beadwork, each piece tells a story of heritage, craftsmanship, and tradition.

At Nolcstore, we are passionate about preserving Kenya's cultural heritage and supporting local communities. By bringing these unique treasures to you, we hope to share the beauty and diversity of Kenyan craftsmanship with the world.

Whether you're searching for a statement piece for your home decor, a meaningful gift for a loved one, or simply seeking to connect with the soul of Kenya, you'll find it here. Browse our curated selection, and let the spirit of Kenya inspire you.

Thank you for joining us on this journey of discovery. Karibu sana! 

          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "Nolcstore - shop now",
  description: "mern stack project",
  kleywords: "mern,react,node,mongodb",
  author: "Rose"
}

export default About;
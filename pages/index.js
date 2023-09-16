import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Alyssa Malig Bondoc, 21 years old, from San Antonio, Mexico, Pampanga. I don't really have that much of a hobby but I have 3 hobbies at the moment which are cycling, cooking and crafting. When it comes to my favorite food, I don’t have a favorite food but anything that is made out of potatoes is mostly what I like (e.g., fries & baked potato). I constantly change my music genre, but I can say that “I Choose by Alessia Cara” is my favorite at the moment. Another simple thing about me is that I love to travel to different places and discover new things about them and the different cultures. 
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
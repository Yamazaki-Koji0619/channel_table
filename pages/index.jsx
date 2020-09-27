import Head from 'next/head';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>番組表 - cyberagent-</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/reset.css"/>
      </Head>
      <Layout />
    </>
  )
}

export default Home;
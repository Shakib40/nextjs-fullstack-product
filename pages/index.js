import DetailList from '../components/details/DetailList'
import { MongoClient } from 'mongodb'
import  Head from 'next/head'
import {Fragment} from 'react'

function HomePage(props) {
  return  (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Browse a huge list of higly active react learning code!"/>
      </Head>
      <DetailList meetups={props.meetups} />
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
  
//   const request = context.req;
//   const response = context.res;

//   return {
//     props: {
//       meetups: DUMMY_LIST
//     },
//   };

// }

export async function getStaticProps() {
 
  //First mistake was didn't put await
  const client =await MongoClient.connect(
    'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/meetups?retryWrites=true&w=majority'
  );
    
  const db = client.db()
  const meetupsCollection =  db.collection('meetups')
  
  const  details = await meetupsCollection.find().toArray()

  client.close()
  
  return {
     props: {
       meetups: details.map( meetup =>({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          description: meetup.description,
          id: meetup._id.toString(),
       }))
     },
     revalidate: 1
  };
}

export default HomePage;
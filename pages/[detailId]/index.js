import Detail from '../../components/details/Detail'
import {MongoClient, ObjectId} from 'mongodb'

import {Fragment} from 'react'
import  Head from 'next/head'

function DetailsView(props) {
   return(
      <Fragment>
        <Head>
          <title>{props.detailData.title}</title>
          <meta 
            name="description" 
            content={props.detailData.description}
          />
        </Head>
        <Detail 
        image = {props.detailData.image}
        title= {props.detailData.title}
        address = {props.detailData.address}
        description = {props.detailData.description}
        />
      </Fragment>
    ) 
}

export async function getStaticPaths() {

   //First mistake was didn't put await
   const client =await MongoClient.connect(
      'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/meetups?retryWrites=true&w=majority'
   );
      
   const db = client.db()
   const meetupsCollection =  db.collection('meetups')
  
   const meetups = await meetupsCollection.find({},{_id: 1}).toArray();

   client.close();

   return {
      fallback: true,
      paths: meetups.map(meetup => ({
         params: {
            detailId: meetup._id.toString()
         }
      }))
   }
}

export async function getStaticProps(context) {
   
   const detailId = context.params.detailId

   //First mistake was didn't put await
   const client =await MongoClient.connect(
      'mongodb+srv://shakib40:shakib40@cluster0.6zwqr.mongodb.net/meetups?retryWrites=true&w=majority'
   );
      
   const db = client.db()
   const meetupsCollection =  db.collection('meetups')
  
   const selectID = await meetupsCollection.findOne({
       _id: ObjectId(detailId) 
   });

   client.close();


   return {
      props: {
         detailData:{
            id: selectID._id.toString(),
            title:selectID.title,
            address:selectID.address,
            image:selectID.image,
            description:selectID.description,
         }
      }
   }
}

export default  DetailsView;

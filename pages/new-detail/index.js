//our-domain/new-details
import { useRouter } from "next/router";
import NewDetailForm from "../../components/details/NewDetailForm";
import {Fragment} from 'react'
import  Head from 'next/head'

function NewDetails() {
  const router = useRouter()
  async function addNewDetailHandler(enteredDetailData){
    
      const response = await fetch('/api/new-detail', {
        method: 'POST',
        body: JSON.stringify(enteredDetailData),
        headers: {
          "Content-Type": "application/json"
        }
      })
  
      const data = await response.json();
      router.push('/')
  }

  return(
    <Fragment>
      <Head>
        <title>Add New Detail</title>
        <meta 
          name="description" 
          content="Add your own meetup"
        />
      </Head>
      <NewDetailForm  onAddMeetup = {addNewDetailHandler} />
    </Fragment>
  )  
   
  
}

export default NewDetails;
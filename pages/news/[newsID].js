import {useRouter} from 'next/router';


function NewsDetailsPage() {
    const router = useRouter();
    
    console.log( router.query.newsID );

    return <h1>The {router.query.newsID} Details page</h1>
}

export default NewsDetailsPage;

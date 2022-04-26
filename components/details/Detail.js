function Detail(props) {
   return (
       <section>
           <img 
            src={props.image}
            alt = {props.title}
            width="300" height = "300"
           />
           <h1> {props.title} </h1>
           <h2> {props.address} </h2>
       </section>
   )  
}

export default  Detail;

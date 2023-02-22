import './App.css';

function App() {
  const data=[
  {
      cardtype:"Free" ,
      Price:"$0/month",
      user:"✔Single User",
      projects:"✔Unlimited Public Projects",
      community:"✔community Access",
      Unlimited:"❌Unlimited Private Projects" ,
      Support:"❌Dedicated Phone Support",
      Domain:"❌Free Subdomain",
      Report:"❌Monthly Status Reports",
      clr:"",
      
  },
    {
      cardtype:"Pro",
      Price:"$9/month",
      user:"✔5 User",
      projects:"✔Unlimited Public Projects",
      community:"✔community Access",
      Unlimited:"✔Unlimited Private Projects",
      Support:"✔Dedicated Phone Support",
      Domain:"✔Free Subdomain",
      Report:"❌Monthly Status Reports",
      clr:"silver"

    },
    {
      cardtype:"Pro",
      Price:"$49/month",
      user:"✔Unlimited User",
      projects:"✔Unlimited Public Projects",
      community:"✔community Access",
      Unlimited:"✔Unlimited Private Projects",
      Support:"✔Dedicated Phone Support",
      Domain:"✔Free Subdomain",
      Report:"✔Monthly Status Reports",
      clr:"gold"
    }
    ]
  return (
    <div className="App">
      {data.map((item,idx)=>(
        <SampleCard
        key={idx}
        cardtype={item.cardtype}
        Price={item.Price}
        user={item.user}
        projects={item.projects}
        community={item.community}
        Unlimited={item.Unlimited}
        Support={item.Support}
        Domain={item.Domain}
        Report={item.Report}
        clr={item.clr}
        
        />
      ))}
     
    </div>
  );
}

export default App;



function SampleCard(props){
  return(
    <div style ={{backgroundColor:props.clr}} className='card-content'>
      <p>{props.cardtype}</p>
      <p>{props.price}</p>
      <p>{props.user}</p>
      <p>{props.projects}</p>
      <p>{props.community}</p>
      <p>{props.Unlimited}</p>
      <p>{props.Support}</p>
      <p>{props.Domain}</p>
      <p>{props.Report}</p>
      <button > Submit</button>
      
    </div>
  )
}


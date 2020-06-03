import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headerone from './headerone component';
import Headertwo from './headertwo component';
import Footer from './footer component'

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100vh', padding:0}}>
	    
	    <Headerone/>
	    
	    <Headertwo/>
	   
	    {/* boxes*/}	      
	    <div style={{display: 'flex', width:'100%', height:'50vh', flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'space-evenly'}}>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'powderblue'}}>
	      		<h3>box 1</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'powderblue'}}>
	      		<h3>box 2</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'powderblue'}}>
	      		<h3>box 3</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'powderblue'}}>
	      		<h3>box 4</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'powderblue'}}>
	      		<h3>box 5</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'powderblue'}}>
	      		<h3>box 6</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'powderblue'}}>
	      		<h3>box 7</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'powderblue'}}>
	      		<h3>box 8</h3>
	      	</div>	
	    </div>

          <Footer/>

    </div>
  );
}

 

export default App;

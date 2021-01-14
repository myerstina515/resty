import React from 'react';
import './form.scss';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
						display: false,
            method: '',
						url: ''
            }
    }
		handleSubmit = async (e) => {
			e.preventDefault();
			let url = e.target.url.value;
			this.setState({ url });
			try{
			var starPeople = await fetch(url, {method: this.state.method, mode: 'cors' })
			console.log('this is star people', starPeople);
			} catch(err){
				console.error(err)
			}
			try{
			let data = await starPeople.json();
			this.props.apiResults(data);
			} catch(err) {
				console.error(err);
			}
			if(this.state.method){this.setState({ display: true })}
		}
		handleDivClick = e => {
			e.preventDefault();
			const method = e.target.name;
			this.setState({ method })
			if(this.state.url){this.setState({ display: true })}
		}
		// getStarPeople = async (e) => {
		// 	e.preventDefault();
		// 	const url = this.state.url;
		// 	const method = this.state.method;
		// 	const results = await fetch(url, {method, mode: 'cors'})

		// 		.then(response => {
		// 			if(response.status !== 200) return;
		// 			console.log(response);
		// 			return response.json();
		// 	});
		// 	this.props.giveAPIresults(results, this.state.headers);
		// };

    render(){
        return(
            <>
						<div onSubmit={this.getStarPeople}>
							<form onSubmit={this.handleSubmit} id='url'>
            		URL<input name='url'/>
            		<button>Click Me!</button>
            	</form>

            	<div onClick={this.handleDivClick}id='radioButtons'>
            		<button name='post'>POST</button>
            		<button name='get'>GET</button>
            		<button name='put'>PUT</button>
            		<button name='delete'>DELETE</button>
            	</div>
							{!this.state.display ? '' :
            	<div id='textReturn'><p><b>{this.state.method}</b>  {this.state.url}</p></div>
				    	}
							</div>
            </>
        )
    }
}


export default Form;
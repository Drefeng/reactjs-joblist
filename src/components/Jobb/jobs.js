import React, {Component} from 'react';
import axios from 'axios';
import CardItem from './jobsListItem'
import {Container, Row} from 'reactstrap'


class Jobs extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('https://jobs.github.com/positions.json?lat=40.730610&long=-73.935242',
        {
    
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
                } 
                
        })
        .then(res => { 
            this.setState({data: res.data});
            console.log(this.state.data);
        })
    }

    componentDidUpdate(props) {
        if (props !== this.props.position) {
            axios.get(`https://jobs.github.com/positions.json?lat=${this.props.position.lat}&long=${this.props.position.lng}`,
        {
    
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
                } 
                
        })
        .then(res => { 
            this.setState({data: res.data});
            //console.log(this.state.data);
        })
        }
    }

    render(){


        
        const Jobs = this.state.data.map(item => (
            <CardItem
                key={item.id}
                name={item.company}
                subtitle={item.title}
                location={item.location}
                date={item.created_at}
                link={item.company_url}
            />
      ));


        return(
    
            <Container>
            <h1 align="center">Click on the map to find jobs</h1>
            <Row>
            {Jobs}
            </Row>
            </Container>
        )
    }
}
export default Jobs;
import React, { Component } from 'react';
import Card from '../Card/Card';
import plants from './../../utils/plants.json';

export default class LandingPage extends Component {
    state = {
        plants:[]
    }
    componentDidMount() {
        // Fetch data from the database
       const dataFromDatabase = plants;
        this.setState({plants: dataFromDatabase})
    }

    render() {
        return (
            <div>
                <div className="container" style={{ paddingHorizontal: 100 }}>
                    <div className="row">
                        {
                            this.state.plants.map((e, i) => {
                                return (
                                    <Card
                                        imageUrl={e.image}
                                        title={e.name}
                                        key={i}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}

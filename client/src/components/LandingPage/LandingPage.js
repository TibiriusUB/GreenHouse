import React, { Component } from 'react';
import Card from '../Card/Card';
import plants from './../../utils/plants.json';

export default class LandingPage extends Component {
    state = {
        plants: [],
        showAllCards: true,
        showOneCard: false,
        singleCardData: {},
    }
    componentDidMount() {
        // Fetch data from the database
        const dataFromDatabase = plants;
        this.setState({ plants: dataFromDatabase })
    }
    onPlusClick = card => {
        console.log('Birungi', card)
        this.setState({ singleCardData: card }, () => {
            this.setState({
                showAllCards: false,
                showOneCard: true,
            })
        })
    }

    render() {
        return (
            <div>
                <div className="container" style={{ paddingHorizontal: 100 }}>
                    <div className="row">
                        {
                            this.state.showOneCard &&
                            <div className="col-md-12">
                                <div className="row">
                                    <div class="card col-md-8 " style={{marginTop: 10, maxHeight:650}}>

                                        <div className="col-md-8 offset-md-2" style={{ marginTop: 10, position: 'relative' }}>
                                            <img className="card-img-top img-responsive" src={this.state.singleCardData.image} alt="Card cap" />
                                            <div className="card-body">
                                                <p style={{ fontWeight: '600' }} className="card-titles">{this.state.singleCardData.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4" style={{ marginTop: 10, position: 'relative', marginBottom: 500 }}>
                                        <div className="card">

                                            <div className="card-body">
                                                <p style={{ fontWeight: '600' }} className="card-titles">Details</p>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        }

                        {
                            this.state.showAllCards &&
                            this.state.plants.map((e, i) => {
                                return (
                                    <Card
                                        cardStyle="card"
                                        imageUrl={e.image}
                                        title={e.name}
                                        key={i}
                                        onPlusClick={() => this.onPlusClick(e)}
                                        showPlusSign={true}
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

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SinglepostComponent from './SinglepostComponent';
import CreatePostModal from './InputPostComponents';
import { useState } from 'react';

export default function TrendsComponent(props) {
    // Ottieni l'array di tendenze giornaliere
    console.log(props.props)
    let arrTrend = props.props.trends.daily_searches[0].searches;

   
    arrTrend.sort((a, b) => b.count - a.count);
    const [trendsel, setTrendSel] = useState("");
    console.log(trendsel)

    return (
        <>
            <div className='row mx-5'>
                <div className="col-8">
                <CreatePostModal name={props.props} />
               <SinglepostComponent post={props.props.posts} auth={props.props.auth.user.id}  action={ props.props.action && props.props.action} trends={trendsel} />
               
              

                </div>
                <div className="col-4">
                    {arrTrend.map((element, index) => (
                        <div className="card mb-3 p-2" key={index} style={{ maxWidth: '540px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-3 my-auto">
                                    <img src={element.articles[0].thumbnail} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body">
                                        <h5 className="card-title">#{element.query.split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join('')}</h5>
                                        <p className="card-text">{element.articles[0].title}</p>
                                       <div className="d-flex ">
                                        </div>
                                    </div>
                                </div><hr  className='w-75 mx-auto'/>
                            </div><div className="d-flex justify-content-center">
                            <button className="btn btn-primary mx-2 " onClick={() => setTrendSel(element.query.split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(''))}>Posta Trends</button>
                                        <a className="btn btn-primary mx-2 text-white" target="_blank" href={element.articles[0].link}>Leggi articolo</a>
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
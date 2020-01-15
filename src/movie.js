import React, { Component } from 'react';
import {Row,Col,Button,Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Movie extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      like: false
    }
  }
  handleClick(){
    var isLike = !this.state.like;
    this.setState({
      like: isLike
    });
    // Here is the specific place where we want to execute the function stored in Movie's parent (App.js). We want to send the information isLike (is the movie liked or not). The goal is to use this data to modify the header in App.js
    this.props.handleClickParent(isLike, this.props.movieName);
  }
  render(){
    var styleHeart = {
      color: '#F7F7F7',
      position: 'absolute',
      top: '5%',
      left: '80%',
      cursor: 'pointer'
    }
    // Depending if this.state.like is true or not, we want to modify the key "color" of our style object.
    if(this.state.like){
      styleHeart.color = '#fc6861';
    }
    // We need to check if we have clicked on LastReleases (displayOnlyLike = false) or on My Movies (displayOnlyLike = true) + if the film is liked or not in order to display it
    var display = null;
    if(this.props.displayOnlyLike && !this.state.like) {
      display = 'none'
    }
    return(
          <Col xs="12" sm="6" md="4" lg="3" style={{display}}>
            <div style={{marginBottom:30}}>
              <Card>
                <CardImg top width="100%" src={this.props.movieImg} alt="Card image cap" />
                <FontAwesomeIcon onClick={this.handleClick} size="2x" style={styleHeart} icon={faHeart} />
                  <CardBody style={{height: 250}}>
                    <CardTitle>{this.props.movieName}</CardTitle>
                    <CardText>{this.props.movieDesc}</CardText>
                  </CardBody>
                </Card>
            </div>
          </Col>
    )
  }
}
export default Movie;

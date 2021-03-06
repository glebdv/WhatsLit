import React from "react";
import styled from 'styled-components';
import { Button } from '../styles';

const BarList = styled.div`
  flex: 1;
  overflow-y: scroll;
  text-align: center;
  padding: 2%;
  height: 93%;
`;

const BarItem = styled(Button)`
  margin: 10px;
  font-size: 14px;
  font-variant: small-caps;
  padding: .5rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  ${ props  => {
    if (props.existCheck && !props.mapState) {
      return 'background-color: #404040; color: white';
    }
    if (!props.existCheck && !props.mapState) {
      return 'background-color: #d9d9d9; color: black';
    }
    if (props.existCheck && props.mapState) {
      return 'background-color: white; color: black';
    }
    if (!props.existCheck && props.mapState) {
      return 'background-color: #d9d9d9; color: black';
    }
  }}
    `;

  const Link = styled.a`
    cursor: help;
    font-variant: small-caps;
    ${ props  => {
      if (!props.mapState) {
        return 'color: white; transition: all 0.2s';
      }
      if (props.mapState) {
        return 'color: black; transition: all 0.2s';
      }
    }}
  `
    // background-color: ${ props  => props.existCheck && props.mapState ? 'blue' : 'yellow'};
    
class BarListComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = { 
      isActive: -1,
      // mapState
    };
  }
  handleClick = (venue, idx) => {
    this.props.toggleInfoWindow(venue);
    this.setState({ isActive: idx });
  }
  render() {
    return ( 
      <BarList>
        {this.props.venues.map((venue, idx) => 
        <BarItem
        key={idx}
        // ourData={}
        existCheck={venue.exists}
        mapState={this.props.mapState}
        onClick={() => this.handleClick(venue, idx)}
        onMouseEnter={(e) => this.props.handleHover(e, venue, idx)}
        onMouseOut={(e) => this.props.handleHoverOut(e, venue, idx)}
          // highlight={venue.genderRatio !== undefined}
        >        
          {venue.name}
          <div>
          {/* `https://www.google.com/maps?saddr=${this.props.userLoc}&daddr=${encodeURI(venue.vicinity)}` */}
          {/* http://maps.google.com/?q=${encodeURI(venue.vicinity)} */}
            <Link 
            mapState={this.props.mapState}
            href={`https://www.google.com/maps/dir/${this.props.userLoc.lat},${this.props.userLoc.lng}/${encodeURI(venue.vicinity)}`} 
            target="_blank">{this.state.isActive === idx ? 'Directions  ' + venue.vicinity : ''}</Link>
          </div>
        </BarItem>
        )}
      </BarList>
    )
  }
}
// {this.props.valueList.map(x => <li> {x} </li>)}

export default BarListComponent
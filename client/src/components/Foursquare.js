import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import ReactMapGL from 'react-map-gl'

class Foursquare extends Component {
    state = { 
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
          },
        map: {}
     }

    componentDidMount() {
        axios.get('https://api.foursquare.com/v2/venues/explore?client_id=2R0HX1XA1G2T0GHCRI45KCI5MD32PUMT5VTJF0GC2MQDGWWP&client_secret=KZZO1LTNFBEBGWX2U2FYUFVIFFLHZIBZN0YE35VLB5JVT4PU&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee')
          .then(response=> response.data.response)
          .then(data => console.log(data))
          .then (data => this.setState({map:data}))
      }

    render() { 
        return ( 
            <div>
                <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken='pk.eyJ1IjoiZW5lbHlhaCIsImEiOiJjazhsZ2N0MDQwMjJ4M25uODlzdjM3d2NwIn0.cG8XRp9MnDgJdhPTi_4TOw'
      />
            </div>
         );
    }
}
 
export default Foursquare;


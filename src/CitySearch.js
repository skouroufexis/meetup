import React, { Component } from 'react';
import { getSuggestions } from './api' ;
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: []
      }
      
      handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value }); //changes the search text value

        getSuggestions(value).then(suggestions => {
          this.setState({ suggestions });
          if (value && suggestions.length === 0) 
            {
              this.setState({infoText: 'We can not find the city you are looking for. Please try another city'});
            } 
          else 
            {
              this.setState({
                infoText: ''
              });
            }
        });
        
      }

      handleItemClicked = (value,lat, lon) => {
        this.setState({ query: value,suggestions:[]});
        this.props.updateEvents(lat, lon);
      }

  render() {
    return (
      
      <div className='container'>

      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        
      </div>

        <div className="CitySearch container">
            <input type="text" className="city" value={this.state.query} 
            onChange={this.handleInputChanged}
            placeholder='city'
            />
            <ul className="suggestions">
              {this.state.suggestions.map(item =>
                  <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string,item.lat, item.lon)} >
                      {item.name_string}
                  </li>
                  )}
            </ul>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.handleItemClicked();
  }

}

export default CitySearch;
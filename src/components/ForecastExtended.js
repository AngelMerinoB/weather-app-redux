import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
    <ForecastItem 
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}>
    </ForecastItem>));
}

const renderProgress = () => {
    return <h3>Loading Extended Forecast...</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (
        <div>
            <h2 className='forecast-title'>Extended forecast for {city}</h2>
            {forecastData ?
                renderForecastItemDays(forecastData) :
                renderProgress()
            }
        </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}
export default ForecastExtended;
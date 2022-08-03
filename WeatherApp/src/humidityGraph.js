import React from "react"
import {Line} from 'react-chartjs-2'
import { connect } from "react-redux";
import { weatherForecast } from './selectors'

const HumidityGraph = (props) => {

    let dates = props.dates
    let humidities = props.humidities

    const chartData = {
        labels: dates,
        datasets: [
          {
            label: 'Humidities',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: humidities
          }
        ]
      }
    
    return (
        <div className= "graph">
            <Line
          data = {chartData}
          options = {{
            title:{
              display:true,
              text: "Humidity Graph",
              fontSize: 20,
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          />
        </div>
        
    )
}

const mapStateToProps = weatherForecast

export default connect(mapStateToProps)(HumidityGraph)
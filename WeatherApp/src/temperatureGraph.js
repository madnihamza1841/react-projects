import React from "react"
import {Line} from 'react-chartjs-2'
import { connect } from "react-redux";
import { weatherForecast } from './selectors'

const TemperatureGraph = (props) => {
    let dates = props.dates
    let temperatures = props.temperatures

    const chartData = {
        labels: dates,
        datasets: [
          {
            label: 'Temperatures',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: temperatures
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
              text: "Temperature Graph",
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

export default connect(mapStateToProps)(TemperatureGraph)
import { ApexOptions } from "apexcharts"
import { useEffect, useState } from "react"
import ReactApexChart from "react-apexcharts"
import Candle from "../models/candle"

export default function CandleStick({dataCandle}: {dataCandle: Candle[]}) {
    const [data, setData] = useState<any>(
        [
            {
                data: dataCandle
            }
        ]
        )
    const [options, setOptions] = useState<ApexOptions> ({
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
            tooltip: {
                enabled: true
            }
            
        },
        yaxis: {

           
        }
        
    })
    useEffect(() => {
        setData([
            {
                data: dataCandle
            }
        ])
    },[dataCandle])

    

    return (
        <ReactApexChart options={options} series={data} type="candlestick" height={'100%'} />
    )
    
}
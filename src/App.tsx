import { useEffect, useState } from "react"
import Candle from "./models/candle"
import { api } from "./utils/api"
import './style/app.css'
import CandleStick from "./components/candle-stick"
// import {io} from 'socket.io-client'
function App() {
  const [dataCandle, setDataCandle] = useState<Candle[]>([])
  // const socket = io(import.meta.env.VITE_APP_SOCKET_SERVER)
  const getCandle = async () => {
    await api.get('/candles/10').then(response => {
      const data = response?.data?.map((candleResponse:any)=>{
        return {
          x: new Date(candleResponse.finalDateTime),
          y: [candleResponse.open, candleResponse.high, candleResponse.low, candleResponse.close]
        }
      }) || []
      setDataCandle(data)
    })
  }

  useEffect(() => {
    getCandle()
  },[])

  return (
   <>
    <div className="header">
      <img src="https://www.bitcoin.org/img/icons/opengraph.png" alt="bitcoin" width={70}/>
      <h1>
        Bitcoin Candle
      </h1>
    </div>
    <div className="content">
      {dataCandle ? <CandleStick dataCandle={dataCandle}/>: <h1>Carregando...</h1>}
    </div>
   </>
  )
}

export default App

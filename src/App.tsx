import { useEffect, useState } from "react"
import Candle from "./models/candle"
import { api } from "./utils/api"

function App() {
  const [dataCandle, setDataCandle] = useState<Candle[]>([])

  const getCandle = async () => {
    await api.get('/candles/10').then(response => {
      setDataCandle(response.data.map((candle: any) => new Candle(candle)))
    })
  }

  useEffect(() => {
    getCandle()
  },[])

  return (
   <div>
    ae
   </div>
  )
}

export default App

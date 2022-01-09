import Binance from 'node-binance-api'

export async function runBinanceSession(defaultConfig: any): Promise<{ message: string}> {

  // Start the binance session
  const binanceSession = new Binance(defaultConfig);

  let message = 'you started session with:' + JSON.stringify(defaultConfig) + '\n'

  // Getting latest price of a symbol
  let prices = binanceSession.prices('LINKETH');
  prices.then( (value) =>
      console.log(value)
  );

  // Periods: 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,1d,3d,1w,1M
  let candleSticks = binanceSession.candlesticks('BNBBTC',"5m");
  candleSticks.then( (ticks) =>
      {
        console.log("candlesticks()", ticks);
        let last_tick = ticks[ticks.length - 1];
        let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = last_tick;
        console.log("BNBBTC last close: "+close);
      }
  );

  // let openOrders = binanceSession.openOrders('ETHBTC');
  // openOrders.then( (value) =>
  //     console.log(value)
  // );

  return {
    message
  }
}

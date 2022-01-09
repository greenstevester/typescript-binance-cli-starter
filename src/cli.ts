#!/usr/bin/env node

import program from 'commander'

import {runBinanceSession} from './index'

program
  .version('0.1.0')
  .option('-apikey, --APIKEY', 'APIKEY')
  .option('-apisecret, --APISECRET', 'APISECRET')
  .parse(process.argv)

runBinanceSession({
  apikey: program.APIKEY,
  apisecret: program.APISECRET
}).then(result => console.log(result.message))

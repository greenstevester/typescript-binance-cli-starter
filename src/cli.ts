#!/usr/bin/env node

import {runBinanceSession} from './index'
import {Command, OptionValues} from "commander";

let program : Command = new Command();
program
  .version('0.1.1')
  .description('CLI for binance')
  .option('--apikey', 'binance APIKEY')
  .option('--apisecret', 'binance APISECRET')
  .parse(process.argv);

const options:OptionValues = program.opts();

const defaultConfig = {APIKEY: options.apikey, APISECRET: options.apisecret,'family': 4,}

runBinanceSession(defaultConfig).then(result => console.log(result.message))

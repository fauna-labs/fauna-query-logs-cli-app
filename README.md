# What is this?

A demo application for receiving query logs .

Presently it uses your username and password to create a synthetic dashboard session enabling the program to receive logs; however, we also support the creation and usage of API tokens. Learn more about how to use the API tokens to get query logs in the Fauna documentation page.

# How do I use it?

1. Install dependencies: `npm install`
2. Run the demo application: `npm run demo`

The demo application walks you through requesting Fauna query logs.
Once query logs are received, you have the option to download them
locally for analysis, you can also write a script to import them in your favourite log processing tools such 
as [Elastic Logstash](https://www.elastic.co/logstash/) or [Datadog](https://www.datadoghq.com/).

const redis = require('redis')

class Redis {
   constructor({ host, port }) {
      this.connection   = null
      this.connected    = false
      this.error        = null
      this.host         = host
      this.port         = port

      this.connect()

      this.listeners()
   }

   connect() {
      this.connection = redis.createClient({ host: this.host, port: this.port })
   }

   listeners() {
      this.connection.on('error', error => {
         console.log('Error connecting to redis: \n', error)
         this.error = error
      })
   }
}

module.exports = Redis
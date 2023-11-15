import {createServer} from 'miragejs';


export function server() {

  createServer({
    routes() {
      this.urlPrefix = 'https://localhost:3000'
      this.namespace = 'api'

      this.get('/users',  () => {
        return [
          {id: 1, username: 'Vincent', isAdmin: true},
          {id: 2, username: 'Peggy', isAdmin: false},
          {id: 3, username: 'Simon', isAdmin: false},
          {id: 4, username: 'Jeanne', isAdmin: false},
        ]
      },  { timing: 1000})
    }
  })

}

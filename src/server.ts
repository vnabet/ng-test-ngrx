import {createServer} from 'miragejs';


export function server() {

  createServer({
    routes() {
      this.urlPrefix = 'https://localhost:3000'
      this.namespace = 'api'

      this.get('/users',  () => {
        return [
          {id: 1, userName: 'Vincent', isAdmin: true},
          {id: 2, userName: 'Peggy', isAdmin: false},
          {id: 3, userName: 'Simon', isAdmin: false},
          {id: 4, userName: 'Jeanne', isAdmin: false},
        ]
      },  { timing: 1000})
    }
  })

}

import RestServices from '../../../supports/services/rest-services'

class BlogService extends RestServices {
  endpoint = '/v2/everything?q=bitcoin&from=2020-11-09&sortBy=publishedAt&apiKey=913b3ba0acec458ea29b3eb3a7e06bdf'
}

export default new BlogService()

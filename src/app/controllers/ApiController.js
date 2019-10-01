import Api from '../models/Api';

class ApiController {
  async store(req, res) {
    const { city } = req.body;
    Api.teste(city, res);
  }
}
export default new ApiController();

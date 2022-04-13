const restaurants = []

class RestaurantController {
  index(req, res) {
    res.json(restaurants)
  }

  store(req, res) {
    const { body } = req

    const nextId = restaurants[restaurants.length - 1]?.id + 1 || 1;

    restaurants.push({
        id: nextId,
        ...body
    })

    res.status(201).setHeader('Location', `http://localhost:1234/restaurants/${nextId}`).send()
  }

    show(req, res) {
    const { id } = req.params

    const restaurant = restaurants.find(restaurant => restaurant.id === +id)

    if (!restaurant) {
        res.sendStatus(404)
        return;
    }

    res.json(restaurant)
  }

  update(req, res) {
    const { params, body } = req

    const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === +params.id)
    if (restaurantIndex < 0) {
        res.sendStatus(404)
        return;
    }

    restaurants[restaurantIndex] = {
        id: +params.id,
        ...body
    }

    res.send()
  }

  delete(req, res) {
    const { id } = req.params

    const restaurantIndex = restaurants.findIndex(restaurant => restaurant.id === +id)
    if (restaurantIndex < 0) {
        res.sendStatus(404)
        return;
    }

    restaurants.splice(restaurantIndex, 1)
    res.send()
  }
}

module.exports = new RestaurantController()
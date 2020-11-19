package main

import (
	"github.com/FranciscoMendes10866/listry/api/router"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	router.AuthRouter(app)
	router.AdressesRouter(app)

	app.Listen(":1080")
}

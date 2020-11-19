package router

import (
	"github.com/FranciscoMendes10866/listry/api/addresses"
	"github.com/FranciscoMendes10866/listry/api/guards"
	"github.com/gofiber/fiber/v2"
)

// AdressesRouter ...
func AdressesRouter(app *fiber.App) {
	api := app.Group("/api/v1/addresses")
	api.Post("/", guards.Protected(), addresses.CreateAddress)
	api.Get("/", guards.Protected(), addresses.FindAddress)
}

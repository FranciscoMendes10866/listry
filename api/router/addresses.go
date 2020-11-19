package router

import "github.com/gofiber/fiber/v2"

// AdressesRouter ...
func AdressesRouter(app *fiber.App) {
	api := app.Group("/api/v1/addresses")
	api.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Adresses Router")
	})
}

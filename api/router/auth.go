package router

import "github.com/gofiber/fiber/v2"

// AuthRouter ...
func AuthRouter(app *fiber.App) {
	api := app.Group("/api/v1/auth")
	api.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Auth Router")
	})
}

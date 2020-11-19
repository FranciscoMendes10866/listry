package main

import (
	"github.com/FranciscoMendes10866/listry/api/router"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/helmet/v2"
)

func main() {
	app := fiber.New()
	app.Use(cors.New())
	app.Use(helmet.New())
	app.Use(logger.New())
	app.Use(compress.New())
	router.AuthRouter(app)
	router.AdressesRouter(app)

	app.Listen(":1080")
}

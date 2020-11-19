package addresses

import (
	"context"

	"github.com/FranciscoMendes10866/listry/api/db"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// CreateAddress ...
func CreateAddress(c *fiber.Ctx) error {
	// Prisma Client
	prisma := db.NewClient()
	err := prisma.Connect()
	if err != nil {
		return err
	}
	defer func() {
		err := prisma.Disconnect()
		if err != nil {
			panic(err)
		}
	}()
	ctx := context.Background()
	// User Input
	body := new(Addresses)
	c.BodyParser(body)
	// token payload
	user := c.Locals("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	tokenID := claims["id"].(string)
	// adds the user_id to the object
	body.UserID = tokenID
	// creates a new address
	created, err := prisma.Addresses.CreateOne(
		db.Addresses.Name.Set(body.Name),
		db.Addresses.Street.Set(body.Street),
		db.Addresses.Zip.Set(body.Zip),
		db.Addresses.City.Set(body.City),
		db.Addresses.Country.Set(body.Country),
		db.Addresses.UserID.Set(tokenID),
	).Exec(ctx)
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	// Response
	return c.JSON(created)
}

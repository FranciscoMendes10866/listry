package addresses

import (
	"context"

	"github.com/FranciscoMendes10866/listry/api/db"
	"github.com/form3tech-oss/jwt-go"
	"github.com/gofiber/fiber/v2"
)

// FindAddress ...
func FindAddress(c *fiber.Ctx) error {
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
	// database query
	query, err := prisma.Addresses.FindMany(
		db.Addresses.UserID.Equals(tokenID),
	).Exec(ctx)
	if err != nil {
		panic(err)
	}
	// response
	return c.JSON(query)
}

package addresses

import (
	"context"

	"github.com/FranciscoMendes10866/listry/api/db"
	"github.com/gofiber/fiber/v2"
)

// DestroyAddress ...
func DestroyAddress(c *fiber.Ctx) error {
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
	// Address ID
	addressID := c.Params("id")
	// delete method
	destroy, err := prisma.Addresses.FindOne(
		db.Addresses.ID.Equals(addressID),
	).Delete().Exec(ctx)
	if err != nil {
		panic(err)
	}
	// response
	return c.JSON(destroy.ID)
}

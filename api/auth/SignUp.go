package auth

import (
	"context"

	"github.com/FranciscoMendes10866/listry/api/db"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

// SignUp ...
func SignUp(c *fiber.Ctx) error {
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
	body := new(User)
	c.BodyParser(body)
	// hashes the User password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 4)
	if err != nil {
		return c.SendStatus(500)
	}
	// exchanges the given password with the hashed password
	body.Password = string(hash)
	// creates a new user
	create, err := prisma.User.CreateOne(
		db.User.Email.Set(body.Email),
		db.User.Password.Set(body.Password),
	).Exec(ctx)
	if err != nil {
		return c.SendStatus(500)
	}
	// Response
	return c.JSON(create)
}

package addresses

type Addresses struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	Street  string `json:"street"`
	Zip     string `json:"zip"`
	City    string `json:"city"`
	Country string `json:"country"`
	UserID  string `json:"userId"`
}

package main

import "fmt"

func main() {
	name := "Richardt"
	age := 19
	job := "Software Developer Intern"

	message := fmt.Sprintf(
		"Meu nome é %s, tenho %d anos e trabalho como %s.",
		name,
		age,
		job,
	)

	fmt.Println(message)
}

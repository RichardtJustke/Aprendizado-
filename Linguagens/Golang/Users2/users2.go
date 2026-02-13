package main

import "fmt"

func main() {
	users := 0
	for i := 0; i < 6; i++ {
		users++
		fmt.Println("Usuários conectados:", users)
	}
	fmt.Println("Sistema pronto")
}


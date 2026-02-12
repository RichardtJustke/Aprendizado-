package main

import "fmt"

func main() {

	var projetctName string = "Go para todos"
	users := 0
	isOnline := true

	text := fmt.Sprintf("O projeto %s tem %d usuarios e ele está onlone: %s", projetctName, users, isOnline) //usando a "função fmt.Sprintf"
	fmt.Println(text)
}

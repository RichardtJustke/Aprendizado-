package main 

import "fmt"

func main(){
	users := 1
	isOnline := true

	if isOnline && users > 0{
		fmt.Println("Sistema ativo com usuários")
	}else{
		fmt.Println("Sistema indisponível")
	}
}
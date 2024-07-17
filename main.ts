import { differenceInSeconds } from "data-fns";
import inquirer from "inquirer";

const response = await inquirer.prompt({
    name: "input",
    type: "input",
    message: "Enter the amount (seconds): "
})

const timeStarts = (value: number) => {
    setInterval(() => {

    }, 1000)
}

const intTime = new Date().setSeconds(new Date().getSecond() + 1);
const intervalTime = new Date(intTime);
console.log(intervalTime)
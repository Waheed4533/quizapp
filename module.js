import inquirer from "inquirer";
import chalk from "chalk";
import { quizQuestions } from "./question.js";
export async function startQuiz() {
    console.log(chalk.bold('Welcome to the Quiz App!\n'));
    const userAnswers = [];
    for (const question of quizQuestions) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: question.question,
                choices: question.choices,
            }
        ]);
        userAnswers.push(answer.answer);
    }
    let Earnedpoints = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        if (userAnswers[i] === quizQuestions[i].correctAnswer) {
            Earnedpoints++;
            console.log(chalk.bgBlue('Great,your answer is correct'));
        }
        else {
            console.log(chalk.bgRed(`Sorry,your answer is wrong. Correct answer is ${quizQuestions[i].correctAnswer}`));
        }
        console.log(chalk.bold(`\nYour Score: ${Earnedpoints} / ${quizQuestions.length}`));
    }
}

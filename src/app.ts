import { Envs } from "./core/adapters"
import { DiscordBot } from "./core/discord-bot"
import { RegisterCommands } from "./core/bootstraper/register-commands"
import { RegisterSlashCommands } from "./core/register-slash-commands"


async function main(){
    const app = new DiscordBot({
        discordToken: Envs.DISCORD_TOKEN,
        prefix: Envs.BOT_PREFIX,
    })
    
    const registerSlashCommands =  new RegisterSlashCommands({ token: Envs.DISCORD_TOKEN })
    await registerSlashCommands.start()

    await app.start()

    RegisterCommands.load(app)
    
}

( async() => main() )()
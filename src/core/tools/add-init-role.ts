import { GuildMember } from "discord.js";

export const addInitialRole = async (member: GuildMember): Promise<void> => {
  try {
    const roleId = "1180117639796903986"; //Ciudadano
    const role = member.guild.roles.cache.get(roleId);
    if (!role) {
      return;
    }
    await member.roles.add(role);
  } catch (error) {
    console.log(error);
  }
};
